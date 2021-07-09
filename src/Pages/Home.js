import React from 'react';
import styled from 'styled-components';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Home = ({ framer, transition }) => {
	return (
		<>
			<Homeholder
				as={motion.div}
				initial='initial'
				animate='in'
				exit='out'
				variants={framer}
				transition={transition}>
				<Holders>
					<H1>Hi,I am Akhil</H1>
					<P>Frontend Developer</P>
					<IconHolder>
						<li>
							<AiOutlineGithub />
						</li>
						<li>
							<AiFillLinkedin />
						</li>
					</IconHolder>
				</Holders>
				<TvHolder>
					<svg
						width='360'
						height='336'
						viewBox='0 0 360 336'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							x='2'
							y='58'
							width='356'
							height='250'
							rx='30'
							fill='#202020d6'
							stroke='white'
							strokeWidth='3'
						/>
						<rect x='37' y='89' width='284' height='179' rx='30' fill='white' />
						<path
							id='path-leg'
							d='M37 308H62V326C62 331.523 57.5228 336 52 336H37V308Z'
							fill='white'
						/>
						<path
							id='path-leg'
							d='M296 308H321V336H306C300.477 336 296 331.523 296 326V308Z'
							fill='white'
						/>
						<ellipse
							cx='150.5'
							cy='287'
							rx='10.5'
							ry='7'
							fill='white'
							id='tv-on-button'
						/>
						<ellipse cx='207.5' cy='287' rx='10.5' ry='7' fill='white' />
						<line
							x1='134.125'
							y1='4.00806'
							x2='180.416'
							y2='56.5169'
							stroke='white'
							strokeWidth='3'
						/>
						<line
							y1='-1.5'
							x2='50'
							y2='-1.5'
							transform='matrix(-0.661295 0.750126 0.750126 0.661295 212.065 20)'
							stroke='white'
							strokeWidth='3'
						/>
						<ellipse cx='182' cy='58.5' rx='31' ry='7.5' fill='white' />
						<circle id='circle1' cx='135' cy='5' r='5' fill='#E8E8E8' />
						<circle cx='213' cy='15' r='5' fill='#C4C4C4' />
					</svg>
				</TvHolder>
			</Homeholder>
		</>
	);
};

const Homeholder = styled(motion.div)`
	color: ${(p) => p.theme.color};
	transition: color 0.5s;

	width: 100%;
	height: 70%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	@media (max-width: 700px) {
		flex-direction: column;
		width: 95vw;
		height:80%;
	}
`;
const Holders = styled.div`
	
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 700px) {
		padding-left: 20px;
	}
`;
const H1 = styled.h1`
	font-size: 5rem;
	font-weight: 600;
	padding-bottom: 10px;
	@media (max-width: 700px) {
		font-size: 3.5rem;
	}
	@media (max-width: 400px) {
		font-size: 3rem;
	}
`;
const P = styled.p`
	font-size: 2rem;
	font-weight: 400;
	padding-bottom: 20px;
	@media (max-width: 700px) {
		font-size: 1.7rem;
	}
`;
const IconHolder = styled.ul`
	width: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;

	& li {
		text-decoration: none;
		font-size: 3rem;
		transition: color 0.5s ease;
		&:hover {
			color: #6d6d6d;
		}
	}
`;
const TvHolder = styled.div`
	height: 350px;
	width: 350px;
	position: relative;
	z-index: -2;
	pointer-events: all;
	@media (max-width: 700px) {
		height: 200px;
		width: 200px;
	}
	svg {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;
export default Home;
