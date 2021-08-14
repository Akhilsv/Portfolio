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
							className='out-rect'
						/>
						<rect
							x='37'
							y='89'
							width='284'
							height='179'
							rx='30'
							fill='#8b8b8b'
						/>
						<path
							id='path-leg'
							d='M37 308H62V326C62 331.523 57.5228 336 52 336H37V308Z'
							fill='#858585'
						/>
						<path
							id='path-leg'
							d='M296 308H321V336H306C300.477 336 296 331.523 296 326V308Z'
							fill='#858585'
						/>
						<ellipse
							cx='150.5'
							cy='287'
							rx='10.5'
							ry='7'
							fill='#E8E8E8'
							id='tv-on-button'
						/>
						<ellipse cx='207.5' cy='287' rx='10.5' ry='7' fill='#E8E8E8' />
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
						<ellipse cx='182' cy='58.5' rx='31' ry='7.5' fill='#858585' />
						<circle id='circle1' cx='135' cy='5' r='5' fill='#E8E8E8' />
						<circle cx='213' cy='15' r='5' fill='#E8E8E8' />
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
		flex-direction: column-reverse;
		width: 95vw;
		height: 80%;
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
	@media (max-width: 700px) {
		width: 100px;
	}
	& li {
		text-decoration: none;
		font-size: 3rem;
		transition: color 0.5s ease;
		@media (max-width: 700px) {
			font-size: 2rem;
		}
		&:hover {
			color: #6d6d6d;
		}
	}
`;
const TvHolder = styled.div`
	height: 300px;
	width: 300px;
	position: relative;
	pointer-events: all;

	@media (max-width: 700px) {
		height: 280px;
		width: 280px;
	}
	svg {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	& .out-rect {
		fill: ${(p) => p.theme.tvOutRect};
	}
	img {
		position: absolute;
		left: 50%;
		top: 53%;
		opacity: 0.9;
		z-index: 12;
		transform: translate(-50%, -50%);
		border-radius: 20px;
		width: 80%;
		height: 50%;
	}
`;
// const noise = keyframes`
// 0%{
//     background-position: 0 0;
//   }
//   100%{
//     background-position: 100% 100%;
//   }

// `;
// const Noise = styled.div`
// 	position: absolute;
// 	left: 50%;
// 	top: 53%;
// 	opacity: 1;
// 	transform: translate(-50%, -50%);
// 	border-radius: 20px;
// 	width: 80%;
// 	height: 50%;
// 	background-image: url(${'assets/noise.jpeg'});
// 	animation: ${noise} 2.5s linear infinite;
// `;

// const Glitch__layers = styled.div`
// 	position: absolute;
// 	z-index: 2;
// 	left: 0;
// 	right: 0;
// 	top: 0;
// 	bottom: 0;
// `;
// const Glitch__layer = styled.div`
// 	position: absolute;
// 	left: 0;
// 	right: 0;
// 	top: 0;
// 	bottom: 0;
// 	background-repeat: no-repeat;
// 	background-position: 0 0;
// `;

export default Home;
