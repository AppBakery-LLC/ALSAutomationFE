import React from 'react'
import {Col,Row, Form, Card} from 'react-bootstrap'

const EnterALS: React.FC = () => {
    return (
        <Card>
            
            <Card.Header>
                <Card.Title as='h5' className='text-center'>Enter ALS</Card.Title>
            </Card.Header>

            <Card.Body className='text-center'>
              
                <Form>
                    <Form.Group as={Row} className="mt-3 mb-3 ms-5" controlId="resource">
                        <Form.Label column sm="2">Resource</Form.Label>
                        <Col sm="5">
                            <Form.Control as="textarea" rows={1}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3 mb-3 ms-5" controlId="date">
                        <Form.Label column sm="2">Date</Form.Label>
                        <Col sm="5">
                            <Form.Control type="date"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3 mb-3 ms-5" controlId="startTime">
                        <Form.Label column sm="2">Start Time</Form.Label>
                        <Col sm="5">
                            <Form.Control type="time"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3 mb-3 ms-5" controlId="endTime">
                        <Form.Label column sm="2">End Time</Form.Label>
                        <Col sm="5">
                            <Form.Control type="time"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3 mb-3 ms-5" controlId="workstation">
                        <Form.Label column sm="2">Workstation</Form.Label>
                        <Col sm="5">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3 mb-3 ms-5" controlId="lastFileDtTm">
                        <Form.Label column sm="2">Last File User Date Time</Form.Label>
                        <Col sm="2">
                            <Form.Control type="date"/>  
                        </Col>
                        <Col sm="3">
                            <Form.Control type="time"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mt-3 mb-3 ms-5" controlId="lastFileUser">
                        <Form.Label column sm="2">Last File User</Form.Label>
                        <Col sm="5">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                   
                </Form>
            
            </Card.Body>

            <Card.Footer>
                <Card.Title as='h5' className='text-center'></Card.Title>
            </Card.Footer>

        </Card>
      
    )
}

export default EnterALS