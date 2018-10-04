import React, { Component } from 'react';
import Header from './components/Header';
import { SolutionsNew } from './components/Main';
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
          <section id="solution-new">
            <h3> Solutions </h3>
            <SolutionsNew
              src="../public/assets/automotive-solution-hero.jpg"
              subtitle="Automotive"
              description="Solutions that enable breakthrough Automotive
                      designs in and around the car - enhancing safety
                      and the driver experience."
              link1="Advanced Driver Assistance Systems (ADAS) and Autonomous Driving"
              link2="Secure Vehicle Architecture"
              link3="Instrument Clusters"
              link4="Infotainment"
              link5="All Automotive"
            />
            <SolutionsNew
              src=""
              subtitle="Industrial"
              description="Enable fast connectivity between industrial and
              commercial systems to help your design perform under the most 
              extreme conditions."
              link1="Factory Automation"
              link2="Human Machine Interfaces (HM)"
              link3="Home and Building Control"
              link4="Industrial Connectivity"
              link5="Motion and Motor Control"
              link6="Power and Energy"
              link7="All industrial"
            />
            <SolutionsNew
              src=""
              subtitle="Internet of Things (IoT)"
              description="We're driving technology innovation in the Internet
              of Things to empower you to develop smart, connected and
              secure things."
              link1="Connected Things"
              link2="Edge Computing"
              link3="Secure Things"
              link4="Smart Things"
              link5="All IoT"
            />
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