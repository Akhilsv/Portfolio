import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Progress from '../components/skills/Progress';
const Skills = ({ framer, transition }) => {
	return (
		<SkillsHolder
			as={motion.div}
			initial='initial'
			animate='in'
			exit='out'
			variants={framer}
			transition={transition}>
			<Progress />
		</SkillsHolder>
	);
};

const SkillsHolder = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-top: 30px;

	@media (max-width: 700px) {
	
	}
`;
export default Skills;
