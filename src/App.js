import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Row, Col, Jumbotron, Button, Card, ButtonGroup } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import img from './17493_36286_524.jpg';
import img2 from './다운로드.jpg';
library.add(faBook);

const App = () => (
	<Fragment>
		<header>
			<Navbar variant="dark" bg="dark" expand={false} className="shadow-sm">
				<Navbar.Collapse id="basic-navbar-nav">
					<Container>
						<Row>
							<Col sm={8} md={7} className="py-4">
								<h4 className="text-white">About</h4>
								<p className="text-muted">
									Add some information about the album below, the author, or any other background
									context. Make it a few sentences long so folks can pick up some informative tidbits.
									Then, link them off to some social networking sites or contact information.
								</p>
							</Col>
							<Col sm={4} md={{ offset: 1 }} className="py-4">
								<h4 className="text-white">Contact</h4>
								<ul className="list-unstyled">
									<li>
										<a href="#section" className="text-white">
											Follow on Twitter
										</a>
									</li>
									<li>
										<a href="#section" className="text-white">
											Like on Facebook
										</a>
									</li>
									<li>
										<a href="#section" className="text-white">
											Email me
										</a>
									</li>
								</ul>
							</Col>
						</Row>
					</Container>
				</Navbar.Collapse>

				<Container className="d-flex justify-content-between">
					<Navbar.Brand href="#home" className="d-flex align-items-center">
						<FontAwesomeIcon icon="book" className="mr-2" />
						<strong>책</strong>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
				</Container>
			</Navbar>
		</header>
		<main role="main">
			<Jumbotron className="text-center" style={{ backgroundColor: '#fff' }}>
				<Container>
					<h1 className="jumbotron-heading">책 예제</h1>
					<p className="lead text-muted">
						Something short and leading about the collection below—its contents, the creator, etc. Make it
						short and sweet, but not too short so folks don’t simply skip over it entirely.
					</p>
					<p>
						<Button variant="primary" className="m-2 y-2">
							Main call to action
						</Button>
						<Button variant="secondary" className="m-2 y-2">
							Secondary action
						</Button>
					</p>
				</Container>
			</Jumbotron>
			<div className="album py-5 bg-light">
				<Container>
					<Row>
						<Col md={4}>
							<Card className="mb-4 shadow-sm">
								<Card.Img variant="top" src={img} style={{ height: '500px' }} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
									</Card.Text>
									<div className="d-flex justify-content-between align-items-center">
										<ButtonGroup>
											<Button variant="outline-secondary" size="sm">
												View
											</Button>
											<Button variant="outline-secondary" size="sm">
												Edit
											</Button>
										</ButtonGroup>
										<small className="text-muted">9 mins</small>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col md={4}>
							<Card className="mb-4 shadow-sm">
								<Card.Img variant="top" src={img2} style={{ height: '500px' }} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
									</Card.Text>
									<div className="d-flex justify-content-between align-items-center">
										<ButtonGroup>
											<Button variant="outline-secondary" size="sm">
												View
											</Button>
											<Button variant="outline-secondary" size="sm">
												Edit
											</Button>
										</ButtonGroup>
										<small className="text-muted">9 mins</small>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</main>
	</Fragment>
);
export default App;

{
	/* <Navbar.Collapse>
				<Container>
					<Row />
					<Col sm={8} md={7} className="py-4">
						<h4 className="text-white">책을 읽고</h4>
						<p className="text-muted ">
							Add some information about the album below, the author, or any other background context.
							Make it a few sentences long so folks can pick up some informative tidbits. Then, link them
							off to some social networking sites or contact information.
						</p>
					</Col>
					<Col sm={4} md={{ offset: 1 }} className="py-4">
						<h4 className="text-white">Contact</h4>
						<ul className="list-unstyled">
							<li>
								<a href="true" className="text-white">
									Follow on Twitter
								</a>
							</li>
							<li>
								<a href="true" className="text-white">
									Like on Facebook
								</a>
							</li>
							<li>
								<a href="true" className="text-white">
									Email me
								</a>
							</li>
						</ul>
					</Col>
				</Container>
			</Navbar.Collapse>
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" /> */
}
