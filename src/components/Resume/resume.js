import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from '../../image.JPG';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4} tablet={12} className="text-center">
						<div style={{ textAlign: 'center' }}>
							<img src={Image} alt="Amin" className="resume-img" />
						</div>
						<h2 className="resume-title">Amin Bashanfar</h2>
						<h4 style={{ color: 'grey' }}>Programmer</h4>
						<hr style={{ borderTop: '3px solid #833fb2' }} />
						<p>
							I am passionate about what I do and I take great satisfaction in completing a task or a job
							better than requested
						</p>

						<hr style={{ borderTop: '3px solid #833fb2' }} />

						<h5>Address</h5>
						<p>Romania Bucharest</p>
						<h5>Phone</h5>
						<p>0040 722 805 117</p>
						<h5>Email</h5>
						<p>power.ameen99@gmail.com</p>
						<hr style={{ borderTop: '3px solid #833fb2' }} />
					</Cell>
					<Cell col={8} className="resume-right-col">
						<h2 className="resume-title">Learning Path</h2>

						<Education
							startYear={2017}
							endYear={2018}
							schoolName="I started to learn HTML, CSS, and framework like bootstrap, Jquery
										by watching tutorials on Udemy, YouTube and I
										had created a few responsive projects seeing the designs
										by pictures using HTML, CSS, Bootstrap, Jquery the links are
										attached below:"
							firstProject="https://power-amin.github.io/Technology/"
							secondProject="https://power-amin.github.io/Creative-WebSite/"
						/>

						<Education
							startYear={2017}
							endYear={2019}
							schoolName="I started to learn JavaScript by watch tutorials on YouTube
										and I create small games and calculator using JavaScript"
							firstProject="https://power-amin.github.io/Calculator/"
							secondProject="https://power-amin.github.io/Ball-Game/"
							therdProject="https://power-amin.github.io/Boxes-Game/"
						/>

						<Education
							startYear={2019}
							endYear={2019}
							schoolName="I started to learn React by watching tutorials, some courses, some mentors
                                        and I made some projects the links are attached below:"
							firstProject="​https://new-recipes-app.netlify.com"
							secondProject="https://react-coins.netlify.com/"
							therdProject="https://react-form-with-material.netlify.com/"
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />

						<h2 className="resume-title">experience</h2>
						<Experience
							startYear={2019}
							jobName="Continuous Learning"
							jobDescription="Online web courses about JavaScript and React.
									I also usually attend meetups and conferences about frontend
									development."
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />

						<h2 className="resume-title">Skills</h2>
						<Skills skill="Javascript" progress={60} />
						<Skills skill="React" progress={50} />
						<Skills skill="jquery" progress={40} />
						<Skills skill="Bootstrap" progress={60} />
						<Skills skill="HTML/CSS" progress={55} />
						<hr style={{ borderTop: '3px solid #e22947' }} />

						<h2 className="resume-title">Languages</h2>
						<Skills skill="Arabic" progress={100} />
						<Skills skill="English" progress={80} />
						<Skills skill="Romanian" progress={30} />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
