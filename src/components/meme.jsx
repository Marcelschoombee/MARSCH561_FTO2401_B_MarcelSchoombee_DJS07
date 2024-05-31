import React from "react"
import memesData from "../memesData"

export default function Meme() {
// state: A way for React to remember saved values from within a component.
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)  
        
    }

    return (
        <main>
            <div className="form">
                <label>Top text
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Shut up" 
                    />
                </label>
                <label> Bottom text   
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="And take my money"
                    />
                </label>    
                <button className="form--button"
                        onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>

    )
}