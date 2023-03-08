import React from "react";
import "../footer/footer.css";

function Footer(){
    return (
        <div className="Footer">
            <p> contact us on : 000000000000 </p>
            <p>Social media:</p>
            <a href="https://www.facebook.com/"><i class="fab fa-facebook" className="face">Facebook</i></a>
            <a href="https://www.instagram.com/?hl=en"><i class="fab fa-instagram" className="inst">Instagram</i></a>
            <a href="https://twitter.com/?lang=en"><i class="fab fa-twitter" className="twit">twitter</i></a>
        </div>
        
    )
}


export default Footer;