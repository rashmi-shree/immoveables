import React from 'react';  
import './Body.css';

const Body = () => {
    return(
        <div className="bg">
             <div>
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
        </div>
        );
}
export default Body;