import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container-fluid p-5 bg-dark text-white">
            <div className="row">
                <div className="col-lg-3 col-sm-12">
                    <h5><img src="https://i.ibb.co/7vj5vXV/logo-Tour-with-Imriaz.png" width="100"
                        height="100"
                        className="d-inline-block align-top " alt='' /><br />Tour with Imriaz</h5>
                    <p>Your Trusted Tour Partner</p>
                    <p> about@tourwithimriaz.com</p>
                    <p> +8801521227844</p>
                    <p> Mirpur-10, Dhaka</p>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>Our Recent Posts</h5>
                    <br />
                    <p>SAINT MARTIN ISLAND | Bangladesh</p>
                    <p>Skiing In Alps | Austria</p>
                    <p>Mecklenburg-Vorpommern | Germany</p>
                    <p>Mountain Escape | USA</p>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>Subscribe to our Newsletter</h5>
                    <p>Subscribe our newsletter for notify update of our future tour program and choose your best one.</p>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <br />
                    <br />
                    <Button variant="outline-info">Subcribe</Button>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>Our Instagram</h5>
                    <h5>Our Facebook</h5>
                    <p>Tour With Imriaz is a renowned Tour agency successfully over 2 years running. Now it's time to introduce our website Tour With Imriaz.</p>
                </div>
            </div>
            <div>
                <small>Powered by @ Imriaz 2021</small>
            </div>
        </div>
    );
};

export default Footer;