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
								<h4 className="text-white">책을 읽자</h4>
								<p className="text-muted">책읽는 사람은 뭐가 되도 될것이다. -나폴레옹-</p>
							</Col>
							<Col sm={4} md={{ offset: 1 }} className="py-4">
								<h4 className="text-white">심심하면 드루와</h4>
								<ul className="list-unstyled">
									<li>
										<a href="#section" className="text-white">
											로그인
										</a>
									</li>
									<li>
										<a href="#section" className="text-white">
											검색
										</a>
									</li>
									<li>
										<a href="#section" className="text-white">
											어쩌구저쩌구
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
					<p className="lead text-muted">안녕하세요 반가워요 영어로 welcome to korea bye</p>
					<p>
						<Button variant="primary" className="m-2 y-2">
							뭐를 위한 클릭
						</Button>
						<Button variant="secondary" className="m-2 y-2">
							뭐를 위한 클릭
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
								<Card.Body style={{ height: '200px' }}>
									<Card.Title>맛있는 요구르트</Card.Title>
									<Card.Text>일생을 요그르트만을 위해 희생한 희대의 살인마</Card.Text>
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
								<Card.Body style={{ height: '200px' }}>
									<Card.Title>교사는 왜쌀아</Card.Title>
									<Card.Text>사람은 무엇을 위해 사는가 그 해답은 과연..</Card.Text>
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
