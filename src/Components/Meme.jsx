import React from "react"
import '../../styles.css'

export default function Meme() {
    return (
        <main>
            <form action='' className="form">
                <input type="text" name="first-input" className="form-text one" placeholder='Shut up'/>
                <input type="text" name="second-input" className="form-text two" placeholder='and take my money'/> <br/>
                <button className="meme-button">
                    <span className="button-text">Get a new meme image 🖼</span>
                </button>
            </form>
        </main>
    )
}