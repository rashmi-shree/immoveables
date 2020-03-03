import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div>  
            <Navbar>
                <Container>
                    <div class="row">
                        <div class="col-sm">
                            <a href="/Terms_&_Conditions">Terms & Conditions</a>
                        </div>
                        <div class="col-sm">
                            <a href="/Privacy_Policy">Privacy Policy</a>
                        </div>
                        <div class="col-sm">
                            <a href="/Feedback">Feedback</a>
                        </div>
                        <div class="col-sm">
                            <a href="/Unsubscribe">Unsubscribe</a>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}
export default Footer;