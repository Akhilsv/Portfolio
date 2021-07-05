import styled from 'styled-components';

export const Logo = styled.div`
	

	svg {
		width: 50px;
		height: 50px;
		@media (max-width: 700px) {
			width: 40px;
			height: 40px;
		}
	}
	path {
		transition: fill 0.5s;

		fill: ${(p) => p.theme.color};
	}
`;
