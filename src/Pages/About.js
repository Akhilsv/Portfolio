import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
		</AboutHolder>
	);
};
const AboutHolder = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: red;
`;
export default About;
