import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import aplik1 from '../../assets/aplikacija1test.png'
import './navbar.css';

// opredelitev Menuja v const za zvanje v nadaljevanji //
const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
          <p><a href='#wapli1'>What is Aplikacija1?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
          </>
)

const Navbar = () => {
  // useState za mobile verzijo //
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    // div className za celi navigation bar //
    <div className='aplikacija1__navbar'>

      {/* div className za linke, logo in text v menuji */}
      <div className='aplikacija1__navbar-links'>
        <div className='aplikacija1__navbar-links_logo'>
          <img src={aplik1} alt="logo" />
        </div>
        <div className='aplikacija1__navbar-links_container'>
          <Menu />

        </div>
      </div>

      {/* div className za sign in pa sign up button */}
      <div className='aplikacija1__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>

      </div>

      {/* Logika prikazovanja menuja za telefon ali tablico. If stavek za menu s tremi črtami */}
      <div className='aplikacija1__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {/* Drop menu na tablici pa telefoni + sign in pa sign up button  */}
        {toggleMenu && (
          <div className='aplikacija1__navbar-menu_container scale-up-center'>
            <div className='aplikacija1__navbar-menu_container-links'>
              <Menu />
              <div className='aplikacija1__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar