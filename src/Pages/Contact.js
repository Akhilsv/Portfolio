import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactFrom from '../components/contact/ContactFrom';

const Contact = ({ framer, transition }) => {
	return (
		<ContactHolder
			as={motion.div}
			initial='initial'
			animate='in'
			exit='out'
			variants={framer}
			transition={transition}>
			<ContactFrom />
		</ContactHolder>
	);
};
const ContactHolder = styled(motion.div)`
	width: 80%;
	height: 100vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: ${(p) => p.theme.color};
	@media (max-width: 700px) {
		width: 98%;
		padding-top: 30px;
		flex-direction: column;
		justify-content: flex-start;
		overflow: scroll;
		padding-bottom: 30px;
	}
`;
export default Contact;
