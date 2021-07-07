import React from 'react';
import styled from 'styled-components';

const AboutBody = () => {
	return (
		<Body>
			<p>
				I am currently pursuing Computer Science Engineering, I have serious
				passion for web development and creating dynamic user experiences. Most
				of my coding experience were based on HTML, CSS, JavaScript & React JS,
				but I have played in the past with some other things like C, Python.
			</p>
			<p>
				Self-motivated, highly passionate and hardworking fresher looking for an
				opportunity to work in a challenging organization to utilize my skills
				and knowledge to work for the growth of the organization.
			</p>
			<p>
				I'm a hard worker, committed and self learner. Definitely, Interested in
				everything that involves building the web.
			</p>
		</Body>
	);
};

const Body = styled.div`
	padding: 50px;
	height: 70%;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
	font-size: 1rem;
	p {
		font-family: 'Montserrat', sans-serif;
		letter-spacing: 3px;
		opacity: 0.6;
		font-weight: 600;
	}
	@media (max-width: 700px) {
		padding: 30px;
		height: 75%;
		font-size: 0.8rem;
	}
`;
export default AboutBody;
