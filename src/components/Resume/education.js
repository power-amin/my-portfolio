import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
	render() {
		return (
			<Grid>
				<Cell col={4}>
					<p>
						{this.props.startYear} - {this.props.endYear}
					</p>
				</Cell>
				<Cell col={8}>
					<h4 style={{ marginTop: '0px' }}>{this.props.schoolName}</h4>
					<p>
						<a href={this.props.firstProject} target="_blank">
							{this.props.firstProject}
						</a>
					</p>
					<p>
						<a href={this.props.secondProject} target="_blank">
							{this.props.secondProject}
						</a>
					</p>
					<p>
						<a href={this.props.therdProject} target="_blank">
							{this.props.therdProject}
						</a>
					</p>
				</Cell>
			</Grid>
		);
	}
}

export default Education;
