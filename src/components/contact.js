import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Image from '../image.JPG';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2 >Amin Bashanfar</h2>
						<img src={Image} className="contact-img" alt="Amin" />
						<p className="contact-text">
                            I am passionate about what I do and I take great satisfaction in completing a task or a job
							better than requested
						</p>
						<hr style={{ borderTop: '3px solid #833fb2', marginTop: '2rem' }} />
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>2rrem
						<hr />

						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent className="contact-fonts">
										<i className="fa fa-phone-square" aria-hidden="true" />
										(0040) 722 805 117
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent className="contact-fonts">
										<i className="fa fa-linkedin-square" aria-hidden="true" />
										www.linkedin.com/in/power-amin/
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent className="contact-fonts">
										<i className="fa fa-envelope" aria-hidden="true" />
										power.ameen99@gmail.com
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent className="contact-fonts">
										<i className="fa fa-skype" aria-hidden="true" />
										power.ameen99@gmail.com
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
