'use client'
import react from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='left'>
                    <h1><a>React App</a></h1>
                </div>
                <div className='right'>
                    <h4><a>Home</a></h4>
                    <h4><a>About Us</a></h4>
                    <h4><a href='./contact'>Contact</a></h4>
                    <h4><a>Sign-Up</a></h4>
                </div>
            </div>
        </>
    )
}

export default Header