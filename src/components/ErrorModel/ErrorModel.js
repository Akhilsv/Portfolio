import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineCloseSquare } from 'react-icons/ai';


const ErrorModel = ({ state }) => {
	console.log('here');
	const [message, setMessage] = state;
	useEffect(() => {
		setTimeout(() => {
			setMessage();
		}, [2500]);
		return () => {
			clearInterval();
		};
	}, [setMessage]);
	return (
		<>
			<ErrorContainer onClick={() => setMessage()} >
				<p>{message}</p>
				<Close size={24} style={{ color: '#f14646' }} />
			</ErrorContainer>
		</>
	);
};

export default ErrorModel;
const MoveIn = keyframes`
from{
    transform:scale(0) translateY(100%);

}to{
    transform:scale(1) translateY(0%);
}
`;
const ErrorContainer = styled.div`
	width: 235px;
	min-width: 235px;
	max-width: 320px;
	min-height: 50px;
	background-color: ${(prop) => prop.theme.popUpBackground};

	display: flex;
	align-items: center;
	justify-content: space-around;
	border-radius: 5px;
	position: absolute;
	z-index: 555;
	top: -10%;
	left: 40%;

	padding: 5px;
	cursor: pointer;
	animation: 0.8s ${MoveIn} cubic-bezier(0.51, 0.92, 0.24, 1.15);
	@media (max-width: 700px) {
		top:83%;

	}
	p {
		color: ${(prop) => prop.theme.background};
		letter-spacing: 1px;
		font-size: 0.8rem;
		font-family: 'Raleway', sans-serif;
		font-weight: bold;
		width: 290px;
		margin-left: 5px;
	}
`;
const Close = styled(AiOutlineCloseSquare)``;
