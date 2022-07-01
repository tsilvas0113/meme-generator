import React from "react";

function Meme () {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage () {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: allMemes[randomNumber].url
            }
        })
    }

    function handleChange(event) {
        setMeme(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }


    return (
        <main>
            <div className="form">
                <input 
                    type='text'
                    placeholder="Top text"
                    className="form-input"
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange} 
                />
                <input 
                    type='text'
                    placeholder="Bottom text"
                    className="form-input"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange} 
                />
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className="meme-image" src={meme.randomImage} alt='' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme