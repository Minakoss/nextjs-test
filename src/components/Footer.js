import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footercss">
        <div className="w3">
          <a
            href="https://www.facebook.com/nontas.papastefanis"
            target="_blank"
          >
            <i className="fa fa-facebook-official "></i>
          </a>
          <a href="https://www.instagram.com/non_papast/" target="_blank">
            <i className="fa fa-instagram "></i>
          </a>
          <a href="https://twitter.com/home" target="_blank">
            <i className="fa fa-twitter "></i>
          </a>

          <h6> &copy; MiNakos</h6>
          <p> Copyright © 2023 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
