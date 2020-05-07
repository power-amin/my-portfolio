import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import { Row, Col, Card } from 'reactstrap';

class Projects extends Component {
	state = {
		activeTab: 0
	};

	toggleCategories = () => {
		// React Projects
		if (this.state.activeTab === 0) {
			return (
				<div className="container-fluid">
					<Row>
						<Col lg="4" md="12">
							{/* Project 2 */}
							<Card className="projects-width mb-3">
								<CardTitle
									style={{
										color: 'black',
										height: '176px',
										background:
											'url(https://medici-prod.s3-us-west-2.amazonaws.com/uploads/cryptostockmarket.jpg) center / cover'
									}}
								/>
								<CardTitle>Currencies Project</CardTitle>
								<CardText>This project made to see all kind of currencies in the stock market</CardText>
								<CardActions>
									<Button href="https://github.com/amin-bash/React-coins" target="_blank" colored>
										GitHub
									</Button>
									<Button href="https://react-coins.netlify.com/" target="_blank" colored>
										See Project
									</Button>
								</CardActions>
								<CardMenu style={{ color: '#fff' }}>
									<IconButton name="share" />
								</CardMenu>
							</Card>
						</Col>
						<Col lg="4" md="12">
							{/* Project 3 */}
							{/* <Card className="projects-width mb-3">
								<CardTitle
									style={{
										color: 'black',
										height: '176px',
										background:
											'url(https://lh3.googleusercontent.com/trxWxRjnufhXnpgnQY26sGn_JkrsSd1n6Gb9SJwwUV17oJqpWrAgy9abvVQpTP2xSHf9S__pPYc=s640-w640-h400) center / cover'
									}}
								/>
								<CardTitle>Form Validation</CardTitle>
								<CardText>This project to check the login forms if they are completed</CardText>
								<CardActions>
									<Button
										href="https://github.com/amin-bash/reac-form-with-material"
										target="_blank"
										colored
									>
										GitHub
									</Button>
									<Button href="https://react-form-with-material.netlify.com/" target="_blank" colored>
										See Project
									</Button>
								</CardActions>
								<CardMenu style={{ color: '#fff' }}>
									<IconButton name="share" />
								</CardMenu>
							</Card> */}
						</Col>
					</Row>
				</div>
			);

			// Javascript Projects
		} else if (this.state.activeTab === 1) {
			return (
				<div className="container-fluid">
					<Row>
						<Col lg="4" md="12">
							{/* Project 1 */}
							<Card className="projects-width mb-3">
								<CardTitle
									style={{
										color: 'black',
										height: '176px',
										background:
											'url(http://www.playbubblez.com/images/games/woobies.jpg) center / cover'
									}}
								/>
								<CardTitle>Ball Game Project</CardTitle>
								<CardText>
									This is a small game that I made to count how many points did you make
								</CardText>
								<CardActions>
									<Button href="https://github.com/amin-bash/Ball-Game" target="_blank" colored>
										GitHub
									</Button>
									<Button href="https://amin-bash.github.io/Ball-Game" target="_blank" colored>
										See project
									</Button>
								</CardActions>
								<CardMenu style={{ color: '#fff' }}>
									<IconButton name="share" />
								</CardMenu>
							</Card>
						</Col>

						<Col lg="4" md="12">
							{/* Project 2 */}
							<Card className="projects-width mb-3">
								<CardTitle
									style={{
										color: 'black',
										height: '176px',
										background:
											'url(https://steamcdn-a.akamaihd.net/steam/apps/810690/header.jpg?t=1520607629g) center / cover'
									}}
								/>
								<CardTitle>Boxes Project</CardTitle>
								<CardText>This project is to count how many couple boxes you got </CardText>
								<CardActions>
									<Button href="https://github.com/amin-bash/Boxes-Game" target="_blank" colored>
										GitHub
									</Button>
									<Button href="https://amin-bash.github.io/Boxes-Game" target="_blank" colored>
										See Project
									</Button>
								</CardActions>
								<CardMenu style={{ color: '#fff' }}>
									<IconButton name="share" />
								</CardMenu>
							</Card>
						</Col>
					</Row>
				</div>
			);

			// HTML/CSS Projects
		} else if (this.state.activeTab === 2) {
			return (
				<div className="container-fluid">
					<Row>
						<Col lg="6" md="12">
							{/* Project 1 */}
							<Card className="projects-width mb-3">
								<CardTitle
									style={{
										color: 'black',
										height: '176px',
										background:
											'url(https://singularityhub.com/wp-content/uploads/2018/03/steal-our-stories-republish-content-singularity-hub-creative-commons-running-holding-colorful-smoke-flare-524175037-1068x601.jpg) center / cover'
									}}
								/>
								<CardTitle>Creative Website</CardTitle>
								<CardText>This project it was soem of my ideas to build some nice websites</CardText>
								<CardActions>
									<Button
										href="https://github.com/amin-bash/Creative-WebSite"
										target="_blank"
										colored
									>
										GitHub
									</Button>
									<Button
										href="https://amin-bash.github.io/Creative-WebSite/"
										target="_blank"
										colored
									>
										See project
									</Button>
								</CardActions>
								<CardMenu style={{ color: '#fff' }}>
									<IconButton name="share" />
								</CardMenu>
							</Card>
						</Col>
						<Col lg="6" md="12">
							{/* Project 2 */}
							<Card className="projects-width mb-3">
								<CardTitle
									style={{
										color: 'black',
										height: '176px',
										background:
											'url(https://evolllution.com/wp-content/uploads/2013/12/Technology-Sergey-Nivens.jpg) center / cover'
									}}
								/>
								<CardTitle>Technology</CardTitle>
								<CardText>This project is about some technology stuff and also creative</CardText>
								<CardActions>
									<Button href="https://github.com/amin-bash/Technology" target="_blank" colored>
										GitHub
									</Button>
									<Button
										href="https://amin-bash.github.io/Technology/#deferent"
										target="_blank"
										colored
									>
										See Project
									</Button>
								</CardActions>
								<CardMenu style={{ color: '#fff' }}>
									<IconButton name="share" />
								</CardMenu>
							</Card>
						</Col>
					</Row>
				</div>
			);
		}
	};
	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>Javascript</Tab>
					<Tab>HTML/CSS</Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
