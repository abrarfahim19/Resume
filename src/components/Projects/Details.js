import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import CarouselSlide from './CarouselSlide';

function Details ({data}) {
  console.log(data)
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item disabled>
            <CarouselSlide images={data?.img_data} />
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <p className='m-0 p-0 text-dark' style={{ fontSize: "10px", color: "dimgray" }}>Project Name</p>
                <p className="m-0 pt-1 text-dark">{data?.name}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Github Url</p>
                <p className="m-0 pt-1 text-dark">{data?.github}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Live Url</p>
                <p className="m-0 pt-1 text-dark">{data?.live}</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item >
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Project Starting Date</p>
                <p className="m-0 pt-1 text-dark">{data?.start_date}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Project Ending Date</p>
                <p className="m-0 pt-1 text-dark">{data?.end_date}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Description</p>
                <ul className="m-0 pt-1 ">
                  <li className='text-dark'>{data?.point1}</li>
                  <li className='text-dark'>{data?.point2}</li>
                  <li className='text-dark'>{data?.point3}</li>
                  <li className='text-dark'>{data?.point4}</li>
                </ul>
              </div>
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;