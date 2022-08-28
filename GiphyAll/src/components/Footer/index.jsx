import React from "react";
import Github from "../../assets/Github";
import Linkedin from "../../assets/Linkedin";
const Footer = () =>{
    return(
        <>
            <div className="Footer">

                <p>web realizada con motivos de estudio personal</p>

                <a href="https://www.linkedin.com/in/angelo-berrios-pinto-96b317235/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    <Linkedin width='25px'></Linkedin>
                </a>

                <a href="https://github.com/Dbaljeet" target="_blank" rel="noopener noreferrer">
                    Cuenta personal
                    <Github width='30px'></Github>
                </a>

                <a href="https://github.com/Angelobpixel" target="_blank" rel="noopener noreferrer">
                    Cuenta estudiante
                    <Github width='30px'></Github>
                </a>
                
                

            </div>
        </>
    );
};

export default Footer;