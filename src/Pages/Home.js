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
	position: absolute;
	margin: 50px 0px 50px 10px;
	width: 600px;
	height: 80%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	@media (max-width: 700px) {
		display: none;
	}
`;
const Holders = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 70px;
`;
const H1 = styled.h1`
	font-size: 5rem;
	font-weight: 600;
	padding-bottom: 10px;
`;
const P = styled.p`
	font-size: 2rem;
	font-weight: 400;
	padding-bottom: 20px;
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
		&:hover {
			color: red;
		}
	}
`;

const BlobHolder = styled.div`
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Blob = styled.img`
	width: 500px;
	height: 500px;
`;
export default Home;
