import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import "./Style.css";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add To Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                className="mx-2 mt-4 card_style"
                style={{ width: "22rem", border: "none" }}
              >
                <Card.Img
                  className="mt-3"
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price : Rs {element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button variant="primary" className="col-lg-12">
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
