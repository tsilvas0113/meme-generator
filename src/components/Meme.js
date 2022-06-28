import React from "react";
import memesData from "../memesData";

function Meme () {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage () {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: memesArray[randomNumber].url
            }
        })
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
            </div>
            <img className="meme-image" src={meme.randomImage} alt='' />
        </main>
    )
}

export default Meme