import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Box1, ContactWrapper, Outer } from "./ContactElements";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaMobileAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Outer>
            <Box1>
              <HiMail />
              <p id="contact-email">saurabhwakde430@gmail.com</p>
            </Box1>
            <Box1>
              <FaMobileAlt />
              <p id="contact-phone">+91 8308645619</p>
            </Box1>
            <Box1>
              <HiLocationMarker />
              <p>Jalna , Maharastra
              </p>
            </Box1>
            <Box1 id="linkdin">
              <FaLinkedin />
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/saurabh-wakde/"
                target="_blank"
                rel="noopener noreferrer"
              >
              Saurabh Wakde
              </a>
            </Box1>
            <Box1 id="github">
              <FaGithub />
              <a
                id="contact-github"
                href="https://github.com/saurabhWakde"
                target="_blank"
                rel="noopener noreferrer"
              >
              saurabhWakde
              </a>
            </Box1>
          </Outer>
        </div>
        {/* <SocialIcon /> */}
      </div>
    </ContactWrapper>
  );
}

export default Contact;
