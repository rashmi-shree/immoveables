import React from 'react';  
import {Form, Col, Button} from 'react-bootstrap';
import './Body.css';

const Body = () => {
    return(
        <div className="bg">
             <div>
                 <div className="data1">
                    <h1>Discover your perfect rental</h1>
                    <h4>Search near by apartments, condos and homes for rent</h4>
                    <ul>
                        <li><a href="/buy">BUY</a></li>
                        <li><a href="/rent">RENT</a></li>
                        <li><a href="/preapproval">PRE-APPROVAL</a></li>
                        <li><a href="/justsold">JUST SOLD</a></li>
                        <li><a href="/homevalue">HOME VALUE</a></li>
                    </ul>
                 </div>
                 <div className="data2">
                    <Form>
                        <Form.Row>
                            <Col>
                            <Form.Control placeholder="Enter Location" />
                            <Button type="submit">Search</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                 </div>
             </div>
        </div>
        );
}
export default Body;