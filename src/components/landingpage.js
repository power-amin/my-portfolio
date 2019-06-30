import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from '../image.JPG';
class LandingPage extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img src={Image} alt="Amin" className="avatar-img" />
						<div className="banner-text">
							<h1>Frontend Web Developer</h1>
							<hr />
							<p>HTML/CSS | Bootstrap | Javascript | Jquery | React </p>

							<div className="social-links">
								{/* LinkedIn */}
								<a
									href="https://www.linkedin.com/in/power-amin/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
								{/* Github */}
								<a href="https://github.com/power-amin" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github" aria-hidden="true" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default LandingPage;
