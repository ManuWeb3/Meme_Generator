import React from "react"
import '../../styles.css'
import memesData from '../../memesData'

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    
    function getMemeImage () {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const imageUrl = memesArray[randomNumber].url
        setMemeImage(() => imageUrl)
    }

    return (
        <main>
            <div action='' className="form">
                <input type="text" name="first-input" className="form-text one" placeholder='Shut up'/>
                <input type="text" name="second-input" className="form-text two" placeholder='and take my money'/> <br/>
                <button className="meme-button">
                    <span className="button-text" onClick={getMemeImage}>Get a new meme image 🖼</span>
                </button> 
                <br></br>
                <img src={memeImage} className='meme-image'/>
            </div>
        </main>
    )
}