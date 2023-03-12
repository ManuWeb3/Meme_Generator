import React from "react"
import '../../styles.css'
import memesData from '../../memesData'

export default function Meme() {
        
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage () {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const imageUrl = memesArray[randomNumber].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: imageUrl
            }                            
        })
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
                <img src={meme.randomImage} className='meme-image'/>
            </div>
        </main>
    )
}