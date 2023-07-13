import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import {data} from "../helper/data"
import PlayerCard from './PlayerCard';


const ContainerCard = () => {
 const [search, setSearch] =useState("")

const handleChange=(e)=>{
setSearch(e.target.value)
}

const filteredData = data.filter(item =>item.name.toLowerCase().includes(search.trim().toLowerCase()))


    return (
    <>
    <Form.Control type="search" placeholder="Search player..." onChange={handleChange}/>

    <Container className='p-3 rounded-4 card card-container my-3'>
       
        <Row xs={2} md={4} lg={6} className='justify-content-center g-3'>
        <Col>1 of 3</Col>
        {filteredData.map((player,i)=><PlayerCard key={i} {...player} />)}
      </Row>
    </Container>



    </>
  )
}

export default ContainerCard