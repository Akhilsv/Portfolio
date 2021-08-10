import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import WorkHolder from '../components/Work/WorkHolder';
import { ProjectData } from '../components/Work/ProjectData';

const Work = ({ framer, transition }) => {
	console.log(ProjectData);
	return (
		<WorkPage
			as={motion.div}
			initial='initial'
			animate='in'
			exit='out'
			variants={framer}
			transition={transition}>
			{ProjectData.map((data) => {
				return <WorkHolder key={data.id} data={data} />;
			})}
		</WorkPage>
	);
};

const WorkPage = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	overflow-y: scroll;
	margin-top: 20px;
	padding-bottom: 150px;
	
`;
export default Work;
