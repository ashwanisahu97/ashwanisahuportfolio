import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Education = dynamic(() => import("../containers/Education"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Ashwani Sahu",
					description:
						"A passionate Full Stack Web Developer",
					image: "",
					url: "https://ashwanisahu.vercel.app/",
					keywords: [
						"Ashwani",
						"Ashwani Sahu",
						"Portfolio",
						"Ashwani Portfolio ",
						"Ashwani Sahu Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills/>
			<Education />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
