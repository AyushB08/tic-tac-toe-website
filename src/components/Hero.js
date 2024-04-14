import React, { useEffect, useState } from 'react';
import "./HeroStyles.css";

function Hero() {
    const [typedText, setTypedText] = useState('');
    const text = "Created by Ayush Bheemaiah";
    let index = 0;

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setTypedText((prevText) => prevText + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(typingInterval);
            }
        }, 150); 

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="hero">
            <div className="container">
                <h1>Welcome to Tic Tac Toe</h1>
                <h2>{typedText}</h2>
            </div>
        </div>
    );
}

export default Hero;
