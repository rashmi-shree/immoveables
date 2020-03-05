import React from 'react';
import {Card, CardDeck, Button} from 'react-bootstrap';
import './Lowerbody.css';
const Lowerbody = () => {
    return (
        <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className="title"><a href="/details">Buy a home</a></Card.Title>
            <Card.Text>
             <a href="/details">
                 With over 1 million+ homes for sale available on the website, Immoveables can match you with a 
                 house you will want to call home.  
             </a>
             <div className="button">
                <Button  type="submit"><a href="/details">Find a home</a></Button>
            </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className="title"><a href="/details">Rent a home</a></Card.Title>
            <Card.Text>
              <a href="/details">
                  With 35+ filters and custome keyword search, Immoveables can
                  help you easily find a home or apartment for rent that 
                  you'll love.
              </a>
              <div className="button">
                <Button type="submit">Find a rental</Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className="title"><a href="/details">See neighborhoods</a></Card.Title>
            <Card.Text>
              <a href="/details">
                  With more neighborhood insights that any other real
                  estate website, we've captured the color and diversity
                  of communities.
              </a>
              <div className="button">
                <Button type="submit">Learn more</Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    );
}
export default Lowerbody;