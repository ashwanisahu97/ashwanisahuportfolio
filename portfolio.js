import emoji from "react-easy-emoji";
import vijaysales from "./vijaysales.png";
import travelocity from "./travelocity.png";
import rodanfields from "./rodanfields.png";
import you_and_me_shop from "./you-and-me-shop.png";
// import picturess from "./front.png";
// import facebook from "./facebook.png";

export const greetings = {
  name: "Ashwani Sahu",
  title: "Hi all, I'm Ashwani",
  description:
    "I am a Tech Enthusiast, good at adapting to new technologies. My interests include full-stack developments, problem-solving, writing quality code and system design. I am an effective communicator, problem-solver and an aspiring leader in the making.",
  resumeLink:
    "https://drive.google.com/file/d/1KAhHE1C4-VV8-Z_PEpqPj6yJ7qzrHz9u/view?usp=sharing",
};

export const openSource = {
  githubUserName: "ashwanisahu97",
};

export const contact = {};

export const socialLinks = {
  twitter: "https://twitter.com/Ashwani90453593",
  github: "https://github.com/ashwanisahu97",
  linkedin: "https://www.linkedin.com/in/ashwani-sahu-459458189/",
  email: "mailto:ashsahu627@gmail.com",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "○ Be proficient in coding languages such as HTML, CSS, JavaScript, and React."
    ),
    emoji("○ Develop highly interactive Front end / User Interfaces for your web and mobile applications."),
    // emoji(
    //   "○ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "logos:sass",
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },

    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "logos:firebase",
    // },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Masai School",
    subHeader: "Full Stack Web Development",
    duration: "Sep 2021 - May 2022",
    desc: "Learning MERN STACK AND BUILDING PROJECTS",
    descBullets: [
      "Learned Data Structure Algorithm",
      "Communication Effectiveness.",
      "How to build great Personality and Mindset.",
      "Made many Collabarative and Individual Projects",
      "Learned Toolset,Skillset,Mindset"
    ],
  },
  {
    schoolName: "Government Engineering College Bilaspur,Chhattisgarh",
    subHeader: "Bachelor's Of Technology in Computer Science",
    duration: "July 2016 - June 2020",
    desc: "I have studied basic software engineering subjects like DS, Algorithm, DBMS, OS, AI etc.",
    descBullets: [
      "Apart from this I have learnt software development from free Code Camp and Youtube",
      "Participated in College Flash Mob Tech Fest "
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Google",
    companylogo: "/img/icons/common/google.svg",
    date: "June 2018 – Present",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Github",
    companylogo: "/img/icons/common/github.svg",
    date: "May 2017 – May 2018",
    desc:
      "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "Software Engineer Intern",
    company: "Airbnb",
    companylogo: "/img/icons/common/airbnbLogo.png",
    date: "Jan 2015 – Sep 2015",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const projects = [
  {
    name: "Rodan and Fields Clone",
    img: rodanfields,
    title:"R+F, is an American multi-level marketing company specializing in skincare products",
    desc: [
      "Built product details Page with functionality.",
      "Developed a functional cart page.",
      "Implemented add and remove functionality in cart using Redux .",
    ],
    Tech: "React | Redux | Chakra Ui | Json-server",
    github: "https://github.com/Mallikarjuna-dev/serene-scarecrow-3205",
    link: "https://rodanandfields-clone-orcin.vercel.app/",
  },
  {
    name: "You&Me Shop",
    img: you_and_me_shop,
    title:`You&Me shop is an online platform where
    customers can buy any men's and women's clothes,
    electronics, and jewelery products`,
    desc: [
      "Created Homepage,product details page with proper functionality.",
      "Built static Navbar and Sign in/Signup Page.",
      "Cart functionality and wishlist drawer.",
    ],
    Tech: "React | Redux | Chakra Ui | Json-server",
    github: "https://github.com/ashwanisahu97/You-and-me-shop",
    link: "https://you-and-me-shop.vercel.app/",
  },
  {
    name: "vijaySales.com Clone",
    img: vijaysales,
    title:"A web application for  consumers to buy any electronic products.",
    desc: [
      "Built Home Page with functionality.",
      "Developed a functional product & category page.",
      "Created and manipulated data using local storage.",
    ],
    Tech: "HTML | CSS | Javascript | LocalStorage",
    github: "https://github.com/GobindSetia/vijaysales-clone",
    link: "https://thirsty-feynman-5c455d.netlify.app/",
  },
  {
    name: "Travelocity.com Clone",
    img: travelocity,
    title:"Travelocity.com is a leading travel website where travelers can make airline,hotel and car rental reservations .",
    desc: [
      "Created Sign in/signup page with proper functionality.",
      "Built Support Page for customer queries.",
      "Developed OTP page with constraints.",
    ],
    Tech: "HTML | CSS | Javascript | LocalStorage",
    github: "https://github.com/nHari9/travelocity-clone",
    link: "https://vijaysales-clone.vercel.app/",
  }
  // {
  //   name: "Frontend Masters",
  //   img: picturess,
  //   desc: [
  //     "Created the payment page and integrated it with the frontend and backend.",
  //     "Created the payment page and integrated it with the frontend and backend.",
  //   ],
  //   Tech: "Express | Node | EJS | MongoDB",
  //   github: "https://github.com/front-en.d-master",
  //   link: "https://frontend-masters.herokuapp.com",
  // },
  // {
  //   name: "Facebook Clone",
  //   img: facebook,
  //   desc: [
  //     "Created responsive UI and merging of the code with backend.",
  //     "User Authentication, login & signup, clean code.",
  //   ],
  //   Tech: "React | Mongo | Express",
  //   github: "https://github.com/front-en.d-master",
  //   link: "https://facebook-cloners.vercel.app/login",
  // },
];

export const feedbacks = [
  {
    name: "Ashwani Sahu",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Maheen Altaf",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];
