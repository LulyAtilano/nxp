import React from 'react';
//import NewsApi from './NewsApi';
import './Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer"> 
                <section id="upper-row-footer">
                    <div id="aboutNXP">
                        <h5 className="white-text"> ABOUT NXP </h5>
                        <ul>
                            <li>
                                <a className="blue-text" href=""> Investors </a>
                            </li>
                            <li>
                                <a className="blue-text" href=""> Press, News, Blogs </a>
                            </li>
                            <li>
                                <a className="blue-text" href=""> Careers </a>
                            </li>
                        </ul>
                    </div>
                    <div id="resources">
                        <h5 className="white-text"> RESOURCES </h5>
                        <ul>
                            <li>
                                <a className="blue-text" href=""> Mobile Apps </a>
                            </li>
                            <li>
                                <a className="blue-text" href=""> Contact Us </a>
                            </li>
                        </ul>
                    </div>
                    <div id="social-media">
                        <h5 className="white-text"> FOLLOW US </h5>
                        <ul>
                            <li>
                                <i className="fab fa-twitter-square blue-text"></i>
                            </li>
                            <li>
                                <i className="fab fa-linkedin blue-text"></i>
                            </li>
                            <li>
                                <i className="fab fa-facebook-square blue-text"></i>
                            </li>
                            <li>
                                <i className="fas fa-envelope-square"></i>
                            </li>
                        </ul>
                    </div>
                    <NewsFooter/>
                </section>
                <section id="lower-row-footer">
                    <div id="terms-section">
                        <span className="blue-text"> Privacy </span>
                        <span className="blue-text"> Terms of Use </span>
                        <span className="blue-text"> Terms of Sale </span>
                        <span className="blue-text"> Feedback </span>
                    </div>
                    <div id="copyrights">
                        <p> 2006-2018 NXP Semiconductors. All rights reserved.</p>
                    </div>
                </section>
            </footer>
        );
    }
}

export class NewsFooter extends React.Component {
    render() {
        const articles = this.props.article;
        return (
            <div id="news">
                <h5 className="white-text"> { articles }
                    <span> 
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </h5>
                <p className="white-text"> { articles }
                </p>
                <h4 className="blue-text"> Read More 
                    <a> { articles } </a>
                </h4>
            </div>
        );
    }
}