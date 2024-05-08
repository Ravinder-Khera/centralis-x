import React, { useState } from 'react'
import { ReactComponent as Logo } from '../assets/siteHeaderLogo.svg'
import { CiHamburgerMd } from '../assets/svg'
import { ethers } from 'ethers'

function Header() {
    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });

    const btnhandler = (e) => {
        e.preventDefault()
        console.log("btn handler", window.ethereum)
        if (window.ethereum) {
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) =>
                    accountChangeHandler(res[0])
                );
        } else {
            alert("install metamask extension!!");
        }
    };

    const getbalance = (address) => {
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"],
            })
            .then((balance) => {
                setdata({
                    Balance:
                        ethers.formatEther(balance),
                });
            });
    };

    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        console.log("heree", account)
        setdata({
            address: account,
        });
        getbalance(account);
    };
    
    return (
        <header>
            <nav className="customContainer navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <Logo />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <CiHamburgerMd width="48" height="48" style={{ color: '#fff' }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navBtns">
                            <li className="nav-item">
                                <button className="customOutlineBtn" onClick={(e) => { btnhandler(e) }}>Metamask</button>
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