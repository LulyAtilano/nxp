import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <section id="section-user">
                    <div id="logo">
                        <img src="../../assets/nxp.png"/>
                    </div>
                    <div id="user-lang-cart">
                        <span> 
                            <i className="fas fa-user-alt"></i>
                            LUIS JAVIER 
                            <i className="fas fa-caret-down"></i>
                        </span>
                        <span>
                            <i className="fas fa-globe"></i>
                            ENGLISH
                            <i className="fas fa-caret-down"></i>
                        </span>
                        <span>
                            <i className="fas fa-shopping-cart"></i>
                            CART
                        </span>
                    </div>
                </section>
                <nav id="navbar">
                    <div id="section-search">
                        <ul>
                            <li className="section"> 
                                <a className="white-text"> PRODUCTS </a> 
                            </li>
                            <li className="section"> 
                                <a className="white-text"> SOLUTIONS </a> 
                            </li>
                            <li className="section"> 
                                <a className="white-text"> SUPPORT </a> 
                            </li>
                            <li className="section"> 
                                <a className="white-text"> ABOUT </a> 
                            </li>
                        </ul>
                    </div>
                    <div id="search-input">
                        <span className="white-bg"> 
                            ALL 
                            <i className="fas fa-chevron-down"></i>
                        </span>
                        <input type="text" placeholder="Search..."/>
                        <i className="fas fa-search white-bg"></i>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;