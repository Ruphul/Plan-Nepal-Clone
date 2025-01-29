import React from "react";
import { Accordion, Carousel, Col, Container, Nav, Row, Tab, Tabs } from "react-bootstrap";
const slider = [
  "https://www.plannepal.com/uploads/2016/12/standard/39ef6e51859b4ddc54f8a8bd5621882f.jpg?ver=1481983050",
  "https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg?ver=1482387074",
  "https://www.plannepal.com/uploads/2016/12/standard/64262d2147d4cc947548addb5bb1ee0f.jpg?ver=1481720453",
  "https://www.plannepal.com/uploads/2022/12/standard/ba71d2935e48626811eaa7f7c84f389c.jpg?ver=1672155708",
];

const CrouselData=[
{id:1,desc:"I really enjoyed my trekking with Plan Nepal Travel and Tours. The company is very flexible and tries to fullfill the wishes of the customers. Everything work out fine. I had a very nice and competent guide, staff is very friendly and the price for the tours are really decent. I definitely can recommend booking with this Nepalese Company.",title:'Claudia Fiederle-Filk'},
{id:2,desc:"Excellent Tour organized by plan Nepal Travel & Tour. The hotel in Chitwan was beautiful and the service was fantastic. Bishnu from plan Nepal Travel & Tour was vey helpful and willing to help me with all of my questions.",title:'Michael Warden'},
{id:3,desc:"The guys from Plan Nepal were really great: due to serious reasons we had to re-schedule a flight back from Lukla. Not only that they responded super fast and arranged the change, they showed empathy with our situation and even offered help to rebook a flight which we had arranged via an other agency in Germany. All in all a customer service which exceeded my expectations by far and for which I am still greatful.",title:'Peter F.'},
{id:4,desc:"Helpful, kind and cheap. I absolutely recommend this agency. They provide you with all the information you need. In case of cancellation of the flights, they will give the ticket money back. Top agency! You can trust them.",title:'Nicola & Pietro.'}
]
function Home() {
  return (
    <>
      <section>
        <Carousel>
          {slider.map((a) => (
            <Carousel.Item key={a}>
              <img className="w-100" src={a} alt="" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="py-4">
        <Container>
          <Row className="g-4">
            <Col lg={9}>
              <h4 className="bg-success p-3 text-white d-inline-block">Dear Travellers, Namaste and Welcome</h4>
              <p>
                Plan Nepal Travels & Tours (p.) Ltd. a leading online travel
                agency in Nepal. A Destination Management Company in Nepal, We
                are one of key travel agents in Nepal that brings tours of
                "Incredible Nepal", the country that has mystified the world for
                centuries. Your tour to Nepal, a colorfully diverse country,
                will enchant you with the beauty of its Culture, Mountain and
                Nature. These tours to Nepal will enrich you with its culture,
                heritage, wildlife, flora & fauna, folklore, festivals,
                spirituality, philosophy and at the same time surprise you with
                its modernity. Nepal tour & travel packages also offers the
                welcoming smile of hospitable people who make it a must
                experience destination.
              </p>
              <button className="btn btn-small bg-warning p-3">View More</button>
            </Col>
            <Col lg={3}>
            <h4 className="bg-success p-3 text-white d-inline-block">Featured Packages</h4>
            <ul  className="px-4 featured">
                <li>Nepal Family Holiday</li>
                <li>Nepal Vacation Tour</li>
                <li>Sunrise/Sunset Tour</li>
                <li>Chitwan Safari Tour</li>
                <li>Kathmandu Valley Trek</li>
                <li>Bhutan Tour Package</li>
                <li>Tibet Tour Package</li>
            </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 trips">
        <Container  className="text-center">
            <h2 >Our Specialities
            </h2>
            <Row className="g-4">
                <Col lg={4}>
                <div className="position-relative overflow-hidden">
                    <img className="w-100" src="https://www.plannepal.com/assets/img/our-specialities/tour-banner-special.jpg?ver=1465419636" alt="" />

                    <h4 className="bg-warning p-2 position-absolute bottom-0 start-0">Tour in nepal</h4>
                </div>
                </Col>
                <Col lg={4}>
                <div className="position-relative overflow-hidden">
                    <img className="w-100" src="https://www.plannepal.com/assets/img/our-specialities/tour-banner-special.jpg?ver=1465419636" alt="" />

                    <h4 className="bg-warning p-2 position-absolute bottom-0 start-0">Tour in nepal</h4>
                </div>
                </Col>
                <Col lg={4}>
                <div className="position-relative overflow-hidden">
                    <img className="w-100" src="https://www.plannepal.com/assets/img/our-specialities/tour-banner-special.jpg?ver=1465419636" alt="" />

                    <h4 className="bg-warning p-2 position-absolute bottom-0 start-0">Tour in nepal</h4>
                </div>
                </Col>
            </Row>
        </Container>
      </section>

      <Container>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 justify-content-center"
    >
      <Tab eventKey="NepalTour" title="Nepal Tour">
        <Container className="py-4">
            <Row className="g-4">
                <Col lg={4}>
                
                        <img className="w-100" src="https://www.plannepal.com/uploads/2016/06/thumb/2313845d75957a1459be96c335822d0f.jpg?ver=1464857285" alt="" />
                        
                </Col>
                <Col lg={4}>
                
                        <img className="w-100" src="https://www.plannepal.com/uploads/2016/06/thumb/2313845d75957a1459be96c335822d0f.jpg?ver=1464857285" alt="" />
                        
                </Col>
                <Col lg={4}>
                
                        <img className="w-100" src="https://www.plannepal.com/uploads/2016/06/thumb/2313845d75957a1459be96c335822d0f.jpg?ver=1464857285" alt="" />
                        
                </Col>
                <Col lg={4}>
                
                        <img className="w-100" src="https://www.plannepal.com/uploads/2016/06/thumb/2313845d75957a1459be96c335822d0f.jpg?ver=1464857285" alt="" />
                        
                </Col>
            </Row>
        </Container>
      </Tab>
      <Tab eventKey="Trekking" title="Nepal Trekking">
        Tab content for Profile
      </Tab>
      <Tab eventKey="Adventure" title="Adventure Activities">
        Tab content for Contact
      </Tab>
    </Tabs>
      </Container>

      <section className="py-4 guest-accordian">
        <Container>
            <Row className="g-4">
                <Col lg={8}>
                <h3 className="text-center">Guest Testimonials</h3>
                <Carousel className="sliderbg">
                    {CrouselData.map((a)=>(

                   
      <Carousel.Item key={a.id} className="text-center p-4">
        <p>{a.desc}</p>
        <h4>{a.title}</h4>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
       ))}
    </Carousel>
                </Col>
                <Col lg={4}>
                <h3 className="text-center">WHY PLAN NEPAL</h3>

                <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>12 Years of Experience</Accordion.Header>
        <Accordion.Body>
        We have eperience, knowledge for more than 12 years that will make you come back for more.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Over 150 Holidays Packages</Accordion.Header>
        <Accordion.Body>
        Variations in trip packages is always mesmerizing and a memorable to for the lifetime.so we have done same.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Safety First</Accordion.Header>
        <Accordion.Body>
        Variations in trip packages is always mesmerizing and a memorable to for the lifetime.so we have done same.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Competitive Price</Accordion.Header>
        <Accordion.Body>
        Variations in trip packages is always mesmerizing and a memorable to for the lifetime.so we have done same.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
