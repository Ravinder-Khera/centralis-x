import React from 'react'
import { ReactComponent as Logo } from '../assets/siteHeaderLogo.svg'
import { CiHamburgerMd } from '../assets/svg'

function Header() {
  return (
    <header>
        <nav className="customContainer navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <Logo />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <CiHamburgerMd width="48" height="48"  style={{color: '#fff'}} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navBtns">
                        <li className="nav-item">
                            <button className="customOutlineBtn">Metamask</button>
                        </li>
                        <li className="nav-item">
                            <button className="customOutlineBtn">Connect Wallet</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header