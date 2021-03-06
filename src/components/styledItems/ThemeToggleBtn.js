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
	cursor: pointer;

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
		@media (max-width: 700px) {
			font-size: 1.5rem;
		}
		&:hover {
			transform: rotate(360deg);
		}
	}
	@media (max-width: 700px) {
		width: 45px;
		height: 45px;
	}
`;
