import React from "react"
import myImage from './images/Troll_Face.png';

export default function Header() {
    return (
        <header className="header">
            <img 
                src={myImage} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}