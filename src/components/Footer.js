import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">

                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>

                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Woaom. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/sudiptob2/simple-react-footer"
                    target="_blank"
                    className="item3"
                >

                </a>
                <a
                    href="http://fb.com/sudiptob2"
                    target="_blank"
                    className="item4"
                >

                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5"
                >
                </a>


            </div>
        </footer>
    );
};

export default Footer;