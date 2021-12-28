// import react Component 
import React, { Component } from 'react';
// import particle header
// import ParticlesBg from "particles-bg";


class Header extends Component {
    render() {

        if(this.props.data){
            const project = this.props.data.project;
            const github = this.props.data.github;
            const name = this.props.data.name;
            const description = this.props.data.description;
            const city = this.props.address.city;
            const networks = this.props.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <header id="home">
                {/* <ParticlesBg type="lines" bg={true} /> */}
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>

            <div className="row banner">

                {/* <div className="banner-text">
                    <h1 className="responsive-headline">{name}</h1>
                    <h3>{description}.</h3>
                    <hr />
                    <ul className="social">
                        <a href={project} target="_blank" className="button btn github-btn"><i className="fa fa-linkedin"></i>Linkedin</a>
                        <a href={github} target="_blank" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
                    </ul>
                </div> */}
            </div>
            
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
            </header>
        );
    }
}

export default Header;