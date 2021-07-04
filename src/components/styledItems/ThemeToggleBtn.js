import styled, { keyframes } from 'styled-components';
const iconAnimation = keyframes`
from{
	transform:scale(0.5) rotate(0deg);
}
to{
	transform:scale(1)  rotate(360deg);
}
`;

export const Toggle = styled.div`
	user-select: none;
	cursor: pointer;
	position: absolute;
	top: 8%;
	left: 5%;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: solid 3px ${(p) => p.theme.border};
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	& svg {
		color: ${(p) => p.theme.color};
		font-size: 1.7rem;
		transition: all 0.5s;
		animation: ${iconAnimation} 1s ease-in-out;
		&:hover {
			transform: rotate(360deg);
		}
	}
	@media (max-width: 700px) {
		top: 2%;
		left: 85%;
		width: 50px;
		height: 50px;
	}
`;
