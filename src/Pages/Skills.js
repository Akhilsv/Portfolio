import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
const Skills = ({ framer, transition }) => {
	return (
		<SkillsHolder
			as={motion.div}
			initial='initial'
			animate='in'
			exit='out'
			variants={framer}
			transition={transition}>
			<h1>Skills</h1>
		</SkillsHolder>
	);
};

const SkillsHolder = styled(motion.div)`
	color: var(--fontColor);
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export default Skills;
