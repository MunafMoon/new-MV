import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import {MdFingerprint} from "react-icons/md"
import {IoBalloon} from "react-icons/io5"
import { Button } from './pages/Button'
import "./Navbar.css"
import {IconContext} from "react-icons/lib"
function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
      <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
              <div className="navbar-container container">

                  <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                      {/* <MdFingerprint className="navbar-icon" /> */}
                      Multiverse Creation
                      <IoBalloon className="navbar-icon" />
                      {/* <img src="images/img5.png" alt="" /> */}

                  </Link>

                  <div className="menu-icon" onClick={handleClick}>
                      {click ? <FaTimes /> : <FaBars />}
                  </div>

                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                      <li className='nav-item'>
                          <Link to='/' className='nav-links'>
                              Home
                          </Link>
                      </li>

                      <li className='nav-item'>
                          <Link to='/' className='nav-links'>
                              Services
                          </Link>
                      </li>

                      <li className='nav-item'>
                          <Link to='/' className='nav-links'>
                              Products
                          </Link>
                      </li>

                      <li className='nav-btn'>
                          {button ? (
                              <Link to='/' className='btn-link'>
                                  <Button buttonStyle='btn--outline'>Sign
                                  </Button>
                              </Link>
                          ) :
                              (
                                  <Link to='/' className='btn-link'>
                                      <Button buttonStyle='btn--outline'
                                          buttonSize='btn--mobile'> Sign up</Button>
                                  </Link>
                              )

                          }
                      </li>
                  </ul>
              </div>
          </div>
      </IconContext.Provider>
  )
}

export default Navbar