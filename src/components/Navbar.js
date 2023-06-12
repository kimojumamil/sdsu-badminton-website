import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    //states
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    //functions
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960)
        {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    useEffect(() => { 
        showButton();
    }, [])
     /*[] specifies that the effect should run only once, when the 
    component mounts, and not re-run when any dependencies change.
    */

    window.addEventListener('resize', showButton);

    return (
   <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                SDSU <img className='birdie-icon' src= '../../images/birdieclipart-icon.png'  alt='badminton icon'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Other
                    </Link>
                </li>
                <li className='nav-icons-mobile'>
                    <Link to='https://www.instagram.com/sdsu.badminton/' target="_blank" rel="noopener noreferrer" className='nav-icons-instagram' onClick={closeMobileMenu}>
                        <i className='fab fa-instagram'/>
                    </Link>
                    <Link to='https://discord.com/invite/tZevzjckJ7' target="_blank" rel="noopener noreferrer" className='nav-icons-discord' onClick={closeMobileMenu}>
                        <i className='fab fa-discord'/>
                    </Link>
                    <Link to='mailto::sdsubad@gmail.com' target="_blank" rel="noopener noreferrer" className='nav-icons-email' onClick={closeMobileMenu}>
                        <i className='far fa-envelope'/>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
   </>
    
  )
}

export default Navbar
/*something that would be cool would be to find a way to make something that
lets chatGPT comment out lines of code*/