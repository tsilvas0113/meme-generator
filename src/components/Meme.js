import React from "react";

function Meme () {
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
                <button>Get a new meme image 🖼</button>
            </div>
        </main>
    )
}

export default Meme