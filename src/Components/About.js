import React, { Component } from "react";

class About extends Component {
    render() {
        if(this.props.data){
            const name = this.props.data;
            const profilepic= "images/"+this.props.data.image;
            const bio = this.props.data.bio;
            const street = this.props.data.address.street;
            const city = this.props.data.address.city;
            const state = this.props.data.address.state;
            const zip = this.props.data.address.zip;
            const phone = this.props.data.phone;
            const email = this.props.data.email;
            const resumeDownload = this.props.data.resumeDownload;
        }
        
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilepic} alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-information">
                                <h2>Contact Information</h2>
                                <p className="address">

                                    <span>{name}</span><br />
                                    <span>{phone}</span><br />
                                    <span>{email}</span><br />
                                    <span>{city}</span><br />
                                </p>
                            </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;