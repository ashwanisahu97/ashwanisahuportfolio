import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      <Button
        className="btn-icon-only rounded-circle"
        color="twitter"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener"
        aria-label="Twitter"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-twitter" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="github"
        href={socialLinks.github}
        rel="noopener"
        aria-label="Github"
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-github" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="twitter"
        rel="noopener"
        aria-label="Linkedin"
        href={socialLinks.linkedin}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-linkedin" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="primary"
        href={socialLinks.email}
        target="_blank"
        rel="noopener"
        aria-label="gmail"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-envelope-open" />
        </span>
      </Button>
    </div>
  );
};

export default SocialLinks;
