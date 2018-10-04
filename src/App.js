import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
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
        <Footer/>
      </div>
    );
  }
}

export default App;
