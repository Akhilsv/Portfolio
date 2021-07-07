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
			</Homeholder>
		</>
	);
};

const Homeholder = styled(motion.div)`
	color: ${(p) => p.theme.color};
	transition: color 0.5s;
	margin: 50px 0px 50px 10px;
	width: 100%;
	height: 70%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 700px) {
		flex-direction: column;
		width: 95vw;
	}
`;
const Holders = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 70px;
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

const BlobHolder = styled.div`
	height: 50%;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 700px) {
		height: 40%;
	}
`;

export default Home;
