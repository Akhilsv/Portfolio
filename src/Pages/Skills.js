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
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;

	@media (max-width: 700px) {
		padding: 30px 0 100px 0;
	}
`;
export default Skills;
