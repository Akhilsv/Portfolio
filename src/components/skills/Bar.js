import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CountUp from 'react-countup';

const Bar = ({ name, percentage }) => {
	const [load, setLoad] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
		}, 400);
		return () => {
			clearTimeout();
		};
	}, []);

	return (
		<>
			<BarBox>
				<Header>
					<h1>{name}</h1>
					<h1>
						<CountUp end={Number(percentage)} duration={3} delay={0.5} />%
					</h1>
				</Header>
				<BarLine>
					<Fill width={percentage} load={load} />
				</BarLine>
			</BarBox>
		</>
	);
};

const BarBox = styled.div`
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 90%;
	@media (max-width: 700px) {
		width: 100%;
	}
	& h1 {
		transition: all 0.5s;
		letter-spacing: 1px;
		color: ${(p) => p.theme.color};

		font-size: 1rem;
		padding: 5px;
	}
`;
const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const BarLine = styled.div`
	width: 100%;
	height: 10px;
	background-color: #000000c1;
	border-radius: 10px;
	display: inline;
`;
const Fill = styled.div`
	width: ${({ width, load }) => (!load ? '0' : width)}%;
	height: 10px;
	background-color: #06ddec;
	border-radius: 10px;
	transition: all 3000ms ease;
`;
export default Bar;
