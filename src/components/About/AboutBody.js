import React from 'react';
import styled from 'styled-components';

const AboutBody = () => {
	return (
		<Body>
			<p>
				I am currently pursuing Computer Science Engineering, Along with my
				acadamics i acquired skill in forntend web technologies like html css
				javascript git and also familiar with react framework ,with react i have
				built some personal projects to enhance my skills and gain some expernices in this filed and i
				also played with node js ,firebase and sql for backend development.since
				my major is computer science so have knowledge on c c++ python.
			</p>
			<p>
				Self-motivated, highly passionate and hardworking fresher looking for an
				opportunity to work in a challenging organization to utilize my skills
				and knowledge to work for the growth of the organization.
			</p>
			<Resume>
				<button>Download</button>
				<img src='assets/qr-scanner.png' />
			</Resume>
		</Body>
	);
};

const Body = styled.div`
	padding-top: 30px;
	width: 90%;
	height: 80%;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
	font-size: 1rem;
	p {
		width: 100%;
		font-family: 'Montserrat', sans-serif;
		letter-spacing: 3px;
		opacity: 0.6;
		font-weight: 600;
		padding-bottom: 5px;
	}
	@media (max-width: 700px) {
		justify-content: space-around;
		width: 100%;
		overflow: scroll;
		min-height: 85vh;
		padding-bottom: 150px;
		padding: 0 30px;
		font-size: 0.8rem;
	}
`;
const Resume = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	button{
		outline:none;
		border:none;
		background: yellow;
		width:150px;
		height:40px;
		border-radius: 50px;
		font-weight: 600;
	}
	img {
		width: 100px;
	}
`;
export default AboutBody;
