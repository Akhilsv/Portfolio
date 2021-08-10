import React from 'react';
import styled from 'styled-components';

const WorkHolder = ({ data }) => {
	return (
		<Card>
			<h1>{data.name}</h1>
			<img src={data.img} alt={data.name} />
		</Card>
	);
};
const Card = styled.div`
	position: relative;
	width: 40%;
	height: 350px;
	margin: 30px;
	transition: all 0.5s ease;
	@media (max-width: 700px) {
		min-width: 90%;
		height: 250px;
	}
	img {
		width: 100%;
		height: 100%;
		
	}
	h1 {
		width: fit-content;
		position: absolute;
		font-size: 1rem;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	&:hover {
		transform: scale(1.02);
		filter: grayscale(0.5);
	}
	
`;
export default WorkHolder;
