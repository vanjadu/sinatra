import React, { useContext } from 'react'
import './navbar.sass'
import { Link } from 'react-router-dom'
import { FiLogIn, FiShoppingBag, FiMenu, FiX, FiUser } from 'react-icons/fi'
import { UserContext } from '../../context/UserContext'
import logoImage from '../../assets/logo.png'

interface NavbarProps {
  alterNav: boolean
  setAlterNav: (alterNav: boolean) => void
}

const Navbar = ({ alterNav, setAlterNav }: NavbarProps): JSX.Element => {
  const { user } = useContext(UserContext)

  return (
    <header className='navbar'>
      <nav className='navbar__nav'>
        <Link to='/' className='navbar__link'>
          Naslovna
        </Link>
        <Link to='/menu' className='navbar__link'>
          Porucite
        </Link>
        <Link to='/contact' className='navbar__link'>
          Kontakt
        </Link>
      </nav>
      <Link to='/' className='navbar__logo'>
        <h1 className='navbar__logo-text'>Sinatra</h1>
      </Link>
      <div className='navbar__utils'>
        <Link to='/cart' className='navbar__utils-link'>
          <FiShoppingBag className='navbar__utils-icon' />
          <span className='navbar__utils-text'>Korpa</span>
        </Link>
        {user ? (
          <Link
            to='/profile'
            className='navbar__utils-link'
            onClick={() => window.scrollTo(0, 0)}
          >
            <FiUser className='navbar__utils-icon' />
            <span
              style={{ textTransform: 'capitalize' }}
              className='navbar__utils-text'
            >
              {user?.displayName}
            </span>
          </Link>
        ) : (
          <Link
            to='/login'
            className='navbar__utils-link'
            onClick={() => window.scrollTo(0, 0)}
          >
            <FiLogIn className='navbar__utils-icon' />
            <span className='navbar__utils-text'>Ulogujte se</span>
          </Link>
        )}
        {alterNav ? (
          <FiX
            className='navbar__buregr'
            onClick={() => setAlterNav(!alterNav)}
          />
        ) : (
          <FiMenu
            className='navbar__buregr'
            onClick={() => setAlterNav(!alterNav)}
          />
        )}
      </div>
    </header>
  )
}

export default Navbar
