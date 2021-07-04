import React from 'react';
import styled from 'styled-components';
import Bar from './Bar';

const Progress = () => {
	return (
		<>
			<ProgressHolder>
				<ProgressBar>
					<Bar name='React js' percentage='50' />
					<Bar name='Node js' percentage='30' />
					<Bar name='JavaScript' percentage='60' />
					<Bar name='Html' percentage='80' />
					<Bar name='Css (SASS)' percentage='90' />
				</ProgressBar>
				
			</ProgressHolder>
		</>
	);
};
const ProgressHolder = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 700px) {
		flex-direction: column;

		overflow: scroll;
	}
`;
const ProgressBar = styled.div`
	width: 45%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 700px) {
		width: 90%;
	
	}
`;

export default Progress;
