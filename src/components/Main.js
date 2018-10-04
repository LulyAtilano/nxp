import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';

export class SolutionsNew extends React.Component { 
    render() { 
        let src=this.props.src;
        return (
            <article className="industry-new">
                <img src={src}/>
                <h4> { this.props.subtitle } </h4>
                <p> { this.props.description } </p>
                <div className="links-news">
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
    src: PropTypes.string,
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