import React, { useState, useEffect } from 'react'
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


const ApartmentShow = (props) =>{
  const [allApartments, setAllApartments] = useState([])
  useEffect(() =>{grabApartments()},[])

  async function grabApartments(){
    try{
      let response = await fetch(`http://localhost:3000/apartments/${props.match.params.id}`)

      let data = await response.json();
        if(response.status === 200) {
          console.log("data", data);
          setAllApartments(data)
        }
    } catch (err){
      console.log(err);
  }
}
const handleDelete = e => {
   e.preventDefault()
   deleteApartment()
 }
 const deleteApartment = () => {
   fetch(`/apartments/${apartment.id}`, {
     headers: {
       "Content-Type": "application/json"
     },
     method: "DELETE"
   }).then(response => {
       if (response.ok) setSuccess(true)
       else setError(true)
   })
 }
return(
  <>
    <Card>
    <CardImg src="#"/>
      <CardBody>
        <ListGroup key={ index }>
          <CardTitle id="namestyle">{apartment.street}, {apartment.apt_num}</CardTitle>
          <CardSubtitle>{apartment.city},{apartment.state}</CardSubtitle>
           <a href={`/listings/${currentApt.id}/edit`}> <Button>Edit Listing</Button></a>
          <a href="/listings">
            <Button type="submit" onClick={ handleDelete }>Delete Listing</Button>
            {success && <Redirect to="/listings" />}
          </a>
        </ListGroup>
      </CardBody>
    </Card>
    </>
)
