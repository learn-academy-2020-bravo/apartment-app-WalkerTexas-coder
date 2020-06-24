import React, { useState, useEffect } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, Row, Col
  } from 'reactstrap';
import { Link } from 'react-router-dom'


const ApartmentList = () => {
    //Create an empty array to hold all the apartments
  const [allApartments, setAllApartments] = useState([])

    //useEffect hook lets us GET all apartments from the database when the component loads
    //the empty array after the comma means that it will get triggered automatically only once
  useEffect(() =>{ grabApartments()},[])

  async function grabApartments () {
    try {
        //GET data from the backend
      let response = await fetch("/apartments")

      let data = await response.json();
        //all good?
      if(response.status === 200) {
        //check the console to make sure we have all the apartments
        console.log("data", data)
        //populate the newApartments state array with data
        setAllApartments(data)
      }
    } catch (err) {
        console.log(err)
    }
  }
    return(

          <>
          <Row id="mainPageCards">
          { allApartments.map((apartment, index) => {
            return(
            <>
              <Col xs="6" sm="4" md="3">
              <Card id="cardstyle" onClick= { () => {window.location.replace(`/show/${apartment.id}`)}} >

                  <CardImg top width="100%" src={apartment.images} alt="This is the alt text" />
                  <CardBody >
                  <ListGroup key={ index }>
                    <CardTitle id="namestyle">{apartment.street}, {apartment.apt_num}</CardTitle>
                    <CardSubtitle>{apartment.city}, {apartment.state}</CardSubtitle>
                      </ListGroup>
                  </CardBody>
              </Card>
              </Col>
              </>
            )})}
            </Row>
          </>
    )
  }

export default ApartmentList
