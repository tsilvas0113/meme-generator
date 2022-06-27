import React from "react";
import memesData from "../memesData";

function Meme () {
    const [memeImage, setMemeImage] = React.useState('')
    function getMemeImage () {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <main className="meme">
            <div className="form">
                <input 
                    type='text'
                    placeholder="Top text"
                    className="form-input" 
                />
                <input 
                    type='text'
                    placeholder="Bottom text"
                    className="form-input" 
                />
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
                <img className="meme-image" src={memeImage} alt='' />
            </div>
        </main>
    )
}

export default Meme