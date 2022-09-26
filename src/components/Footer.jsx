import React from "react";

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
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
