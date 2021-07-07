import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = ({ framer, transition }) => {
	return (
		<ContactHolder
			as={motion.div}
			initial='initial'
			animate='in'
			exit='out'
			variants={framer}
			transition={transition}>
			<h1>Let's talk</h1>
			<img src='assets/meet.svg'></img>
		</ContactHolder>
	);
};
const ContactHolder = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	color: ${(p) => p.theme.color};
	img {
		width:300px;
		height:300px;
	}
	@media (max-width: 700px) {
		padding-top: 30px;
	}
`;
export default Contact;
