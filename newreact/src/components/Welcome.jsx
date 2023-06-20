import React, {Component} from "react";
import SingleCard from "./SingleCard";
import books from "../data/fantasy.json";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Welcome extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container>
      <Row>
      <h1 className="text-center pt-5 pb-5">Welcome</h1> 
        <Col className="d-flex flex-wrap gap-5">
        
       {books.map((book)=>{
        return(
            <SingleCard
            key={book.asin}
            title={book.title}
            price={book.price}
            img={book.img}
            btnTitle = "Vai al prodotto"
            />
        )
       })}       
        </Col>
      </Row>
    </Container>
        )
    }
}
export default Welcome;