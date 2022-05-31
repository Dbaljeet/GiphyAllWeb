import React from "react";
import {Link} from "wouter"
const Header = () =>{
    return(
        <>
            <div className="Header">
                <Link to="/">
                    <h1>GiphyAll</h1>
                </Link>
            </div>
        </>
    )
};
export default Header;