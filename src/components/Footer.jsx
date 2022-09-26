import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="footer-content">
          <p>Copyright &copy; {date}. All Rights Reserved</p>
          <div className="social-icons">
            <h3>Let's connect here</h3>
            <ul>
              <li>
                <a href="https://github.com/Masud-Ndatsu" target={"_blank"}>
                  <FaGithubSquare />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mas-ud-ndatsu-2b29831aa/" target={"_blank"}>
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/MasudNdatsu?t=K82Ut05EutEHYadnuXX6bw&s=03" target={"_blank"}>
                  <FaTwitterSquare />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
