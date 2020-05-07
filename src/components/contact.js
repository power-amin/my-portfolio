import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from '../image.JPG';
import "../App.css";

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Amin Bashanfar</h2>
						<img src={Image} className="contact-img" alt="Amin" />
						<p className="contact-text">
							I am passionate about what I do and I take great satisfaction in completing a task or a job
							better than requested
						</p>
						<hr style={{ borderTop: '3px solid #833fb2', marginTop: '2rem' }} />
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />
						<div className="contact-list">
							<div className="contact-info">
								<i className="fa fa-phone-square" aria-hidden="true" />
								(0040) 722 805 117
							</div>
							<div className="contact-info">
								<i className="fa fa-linkedin-square" aria-hidden="true" />
								www.linkedin.com/in/power-amin/
							</div>
							<div className="contact-info">
								<i className="fa fa-envelope" aria-hidden="true" />
								power.ameen99@gmail.com
							</div>
							<div className="contact-info">
								<i className="fa fa-skype" aria-hidden="true" />
								power.ameen99@gmail.com
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
