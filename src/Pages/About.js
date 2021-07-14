import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AboutBody from '../components/About/AboutBody';
const About = ({ framer, transition }) => {
	return (
		<AboutHolder
			as={motion.div}
			initial='initial'
			animate='in'
			exit='out'
			variants={framer}
			transition={transition}>
			<h1>About</h1>
			<AboutBody />
		</AboutHolder>
	);
};
const AboutHolder = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;

	color: ${(p) => p.theme.color};
	@media (max-width: 700px) {
		margin-top: 20px;
		padding-bottom: 50px;
		overflow: scroll;
	}
`;
export default About;
