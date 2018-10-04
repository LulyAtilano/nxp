import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
          <nav>
            <div id="section-search">
              <ul>
                <li className="section"> <a> PRODUCTS </a> </li>
                <li className="section"> <a> SOLUTIONS </a> </li>
                <li className="section"> <a> SUPPORT </a> </li>
                <li className="section"> <a> ABOUT </a> </li>
              </ul>
            </div>
            <div id="search">
              <span> 
                ALL 
                <i className="fas fa-caret-down"></i>
              </span>
              <input type="text" placeholder="Search..."/>
              <i className="fas fa-search"></i>
            </div>
          </nav>
        </header>
        <main className="main">
          <div className="carousel">
            <button> <i class="fas fa-chevron-left"></i></button>
            <button> <i class="fas fa-chevron-right"></i></button>
          </div>
          <section className="solutions-news">
            <h3> Solutions </h3>
            <article>
              <img />
              <h5> Automotive </h5>
              <p> Solutions that enable breakthrough Automotive
                designs in and around the car - enhancing safety
                and the driver experience.
              </p>
              <div className="links-news">
                <ul>>
                  <li>
                    <a> Advanced Driver Assistance Systems (ADAS) and 
                      Autonomus Driving
                    </a>
                  </li>
                  <li>
                    <a> Secure Vehicle Architecture </a>
                  </li>
                  <li>
                    <a> Instrument Clusters </a>
                  </li>
                  <li>
                    <a> Infotainment </a>
                  </li>
                  <li>
                    <a> All Automotive </a>
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="developer-resources">
            <h3> Developer Resources </h3>
            <article>
              <h5> Hardware </h5>
              <div className="links-news">
                <ul>>
                  <li>
                    <a> Evaluation and Development Boards
                    </a>
                  </li>
                  <li>
                    <a> NXP Designs Reference Design Library </a>
                  </li>
                  <li>
                    <a> Community Boards </a>
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="products-list">
            <h3> Products </h3>
            <article>
              <h5> Processors & Microcontrollers (MCUSs) </h5>
              <div className="links-products-list">
                <ul>>
                  <li>
                    <a> Arm-based Processors </a>
                  </li>
                  <li>
                    <a> i.MX Applications Processors </a>
                  </li>
                  <li>
                    <a> Kinetis Cortex-M MCUs </a>
                  </li>
                  <li>
                    <a> LPC Cortex-M MCUs </a>
                  </li>
                  <li>
                    <a> QorlQ Arm-based SoCs </a>
                  </li>
                  <li>
                    <a> All MCUs and Processors </a>
                  </li>
                </ul>
              </div>
            </article>
          </section>
        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
