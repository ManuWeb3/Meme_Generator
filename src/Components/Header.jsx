import React from "react"
import '../../styles.css'
import logo from '../assets/Logo.png'

export default function Header() {
    return (
        <header className="header-root">
            <img src={logo} className='logo'/>
            <p className="header-para">Learning-React project # 3</p>
        </header>
    )
}
