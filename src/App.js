import React, { Component } from 'react';
import Header from './components/Header';
import { SolutionsNew, Resource, Product, Carousel } from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="main">
          <Carousel/>
          <section className="solution-new">
            <h2> Solutions </h2>
            <SolutionsNew
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
            <h2> Developer Resources </h2>
            <Resource
              subtitle="Hardware"
              link1="Evaluation and Development Boards"
              link2="NXP Designs Reference Design Library"
              link3="Community Boards"
            />
            <Resource
              subtitle="Software"
              link1="Software Development Tools"
              link2="Run-time Software"
              link3="Software Center"
            />
            <Resource
              subtitle="Get Help"
              link1="Communities"
              link2="Documentation"
              link3="Training and Events"
            />
          </section>
          <section className="products-list">
            <h2> Products </h2>
            <Product
              subtitle="Processors & Microcontrollers (MCUSs)"
              link1="Arm-based Processors"
              link2="i.MX Applications Processors"
              link3="Kinetis Cortex-M MCUs"
              link4="LPC Cortex-M MCUs"
              link5="QorlQ Arm-based SoCs"
              link6="All MCUs and Processors"
            />
            <Product
              subtitle="Wireless"
              link1="Bluetooth Low Energy (BLE)"
              link2="MIFARE"
              link3="NFC"
              link4="Thread"
              link5="Wireless Power"
              link6="Zigbee"
              link7="All Wireless"
            />
            <Product
              subtitle="Automotive"
              link1="In-Vehicle Network"
              link2="MCUs and Processors"
              link3="Radar"
              link4="Secure Car Access"
              link5="All Automotive"
            />
            <Product
              subtitle="More Products"
              link1="Analog"
              link2="Identification"
              link3="Media and Audio"
              link4="Power Management"
              link5="RF"
              link6="Sensors"
              link7="All Products"
            />
          </section>
        </main>
          <Footer/>
      </div>
    );
  }
}

export default App;