import React from "react"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"

export default function Footer(){
    return(
        <footer>
            <div className="icons">
                <AiFillFacebook className="facebook" onclick="facebook()"/>
                &nbsp;
                <AiFillInstagram className="insta" />
                &nbsp;
                <AiFillGithub  className="github"/>

            </div>
        </footer>
    )
}

