import React from "react";

const Footer = () =>{
    return(
        <>
            <div className="Footer">

                <p>web realizada con motivos de estudio personal</p>

                <a href="https://github.com/Dbaljeet" target="_blank" rel="noopener noreferrer">
                    Personal Account
                    <img src="GitHub.png" alt="github">
                    </img>
                </a>

                <a href="https://github.com/Angelobpixel" target="_blank" rel="noopener noreferrer">
                    Student Account
                    <img src="GitHub.png" alt="github">
                    </img>
                </a>

                <a href="https://twitter.com/AngeloskyOner" target="_blank" rel="noopener noreferrer">
                    
                    <img src="twitter.png" alt="twitter"></img>
                    Twitter
                </a>
                
                <a href="https://www.linkedin.com/in/angelo-berrios-pinto-96b317235/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    <img src="Linkedin.png" alt="linkedin"></img>
                </a>

            </div>
        </>
    );
};

export default Footer;