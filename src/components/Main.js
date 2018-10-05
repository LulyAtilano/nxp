import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';

// section solution-new
// article-industry-new
export class SolutionsNew extends React.Component { 
    render() { 
        return (
            <article className="industry-new">
                <h4> { this.props.subtitle } </h4>
                <p> { this.props.description } </p>
                <div className="links">
                    <ul>
                        <li>
                            <a className="blue-text"> { this.props.link1 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link2 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link3 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link4 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link5 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link6 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link7 } </a>
                        </li>
                    </ul>
                </div>
            </article>
        );
    }
}

SolutionsNew.propTypes = {
    subtitle: PropTypes.string,
    description: PropTypes.string,
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string,
    link4: PropTypes.string,
    link5: PropTypes.string,
    link6: PropTypes.string,
    link7: PropTypes.string
};

// section developer-resources
//  article resources
export class Resource extends React.Component { 
    render() { 
        return (
            <article className="resources">
                <h4> { this.props.subtitle } </h4>
                <div className="links">
                    <ul>
                        <li>
                            <a className="blue-text"> { this.props.link1 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link2 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link3 } </a>
                        </li>
                    </ul>
                </div>
            </article>
        );
    }
}

Resource.propTypes = {
    subtitle: PropTypes.string,
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string,
};

// section products-list
// article products-section
export class Product extends React.Component { 
    render() { 
        return (
            <article className="products-section">
                <h4> { this.props.subtitle } </h4>
                <div className="links">
                    <ul>
                        <li>
                            <a className="blue-text"> { this.props.link1 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link2 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link3 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link4 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link5 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link6 } </a>
                        </li>
                        <li>
                            <a className="blue-text"> { this.props.link7 } </a>
                        </li>
                    </ul>
                </div>
            </article>
        );
    }
}

Product.propTypes = {
    subtitle: PropTypes.string,
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string,
    link4: PropTypes.string,
    link5: PropTypes.string,
    link6: PropTypes.string,
    link7: PropTypes.string
};

export class Carousel extends React.Component { 
    render() { 
        return (
            <section className="carousel">
                <img src="../../assets/carousel-auto.png"/>
                <button> <i className="fas fa-chevron-left" id="btn-left-carousel"></i></button>
                <button> <i className="fas fa-chevron-right" id="btn-right-carousel"></i></button>
          </section>
        );
    }
}