import React, { useState, useEffect } from "react";
import { greetings } from "../portfolio";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");

  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            {/* <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand> */}
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {/* <NavItem>
                  <NavLink
                    href="#education"
                    style={{
                      scrollBehavior: " smooth",
                    }}
                  >
                    <i />
                    <span>INTRO</span>
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink
                    href="#intro"
                    style={{
                      scrollBehavior: "smooth",
                    }}
                  >
                    <i />
                    <span>ABOUT</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#about"
                    style={{
                      scrollBehavior: "smooth",
                    }}
                  >
                    <i />
                    <span>SKILLS</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#project"
                    style={{
                      scrollBehavior: "smooth",
                    }}
                  >
                    <i />
                    <span>PROJECT</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#contact"
                    style={{
                      scrollBehavior: "smooth",
                    }}
                  >
                    <i />
                    <span>CONTACT</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
