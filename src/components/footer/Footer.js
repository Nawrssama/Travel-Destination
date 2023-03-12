import React from "react";
import "../footer/footer.css";

function Footer() {
    return (
        <div className="Footer">
            <p> contact me : nawrsbibi.nb@gmail.com </p>
            <p>Social media:</p>
            <ul className='buttons'>
                <li>
                    <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook">Facebook</i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/?hl=en" target="_blank"><i className="fab fa-instagram">Instagram</i></a>
                </li>
                <li>
                    <a href="https://twitter.com/?lang=en" target="_blank"><i className="fab fa-twitter">twitter</i></a>
                </li>

            </ul>
        </div>

    )
}


export default Footer;