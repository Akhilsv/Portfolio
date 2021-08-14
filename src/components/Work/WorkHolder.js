import React from 'react';
import styled from 'styled-components';
import { FaLink } from 'react-icons/fa';

const WorkHolder = ({ data }) => {
	return (
		<Card>
			<h1>{data.name}</h1>
			<img src={data.img} alt={data.name} />
			<a href={data.link} target='_blank' rel='noreferrer'>
				<FaLink />
			</a>
		</Card>
	);
};
const Card = styled.div`
	position: relative;
	width: 40%;
	height: 350px;
	margin: 30px;
	transition: all 0.5s ease;
	border-radius: 20px;

	@media (max-width: 700px) {
		min-width: 90%;
		height: 250px;
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 20px;

	}
	h1 {
		width: fit-content;
		position: absolute;
		letter-spacing: 2px;
		font-size: 1rem;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	a {
		display: none;
	}
	&:hover {
		transform: scale(1.02);
		h1 {
			width: fit-content;
			position: absolute;
			font-size: 1rem;
			top: 10%;
			z-index: 55;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		a {
			display: grid;
			place-items: center;
			position: absolute;
			font-size: 1rem;
			top: 50%;
			z-index: 55;
			left: 50%;
			transform: translate(-50%, -50%);
			text-decoration: none;
			color: #0e0d0d;
			font-size: 1.7rem;
			background: #3e8ef7;
			width: 60px;
			height: 60px;
			border-radius: 50%;
		}
		img {
			filter: blur(5px) grayscale(1);
		}
	}
`;
export default WorkHolder;
