import React from 'react';
import styled from 'styled-components';

const ContactFrom = () => {
	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<ContactSvg>
				<h1>Let's Talk</h1>
				<BodyHolder>
					<img src='assets/meet.svg'></img>
					<Details>
						<h1>akhilsvbhat@gmail.com</h1>
						<h1>+91 9731990672</h1>
						<h1>Karnataka | India</h1>
					</Details>
				</BodyHolder>
			</ContactSvg>
			<Form onClick={submitHandler}>
				<input type='text' placeholder='Name' autoComplete='off' />
				<input type='email' placeholder='Email' />
				<textarea type='text' placeholder='Enter what you are thinking' />
				<button type='submit'>Send</button>
			</Form>
		</>
	);
};

const ContactSvg = styled.div`
	width: 45%;
	height: 70%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	@media (max-width: 700px) {
		width: 100%;
		height: 35%;
		h1 {
			font-size: 1rem;
		}
	}
	h1 {
		font-family: 'Permanent Marker', cursive;
		letter-spacing: 3px;
	}
`;
const BodyHolder = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	img {
		width: 65%;
		height: 65%;
	}
	
`;
const Details = styled.div`
	width: 70%;
	height: 50%;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
	h1 {
		opacity: 0.8;
		font-family: 'Rubik', cursive;
		font-size: 0.6rem;
	}
	
`;
const Form = styled.form`
	width: 40%;
	height: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	color: ${(p) => p.theme.color};
	@media (max-width: 700px) {
		width: 90%;
		height: 50%;
	}
	input {
		color: ${(p) => p.theme.color};
		font-weight: 700;
		letter-spacing: 3px;
		padding: 5px 0 0 15px;
		width: 100%;
		height: 40px;
		outline: none;
		border: none;
		border-bottom: solid 1px #0000009d;
		border-radius: 10px;
		background: #0000009d;
	}
	textarea {
		color: ${(p) => p.theme.color};
		letter-spacing: 3px;
		font-weight: 700;
		padding: 10px 0 0 15px;
		width: 100%;
		height: 150px;
		outline: none;
		border: none;
		border-radius: 10px;
		background: #0000009d;
		@media (max-width: 700px) {
			height: 90px;
		}
	}
	button {
		color: #808080;
		outline: none;
		border: none;
		width: 100%;
		height: 30px;
		padding: 5px 20px;
		border-radius: 10px;
		background: #0000009d;
		font-weight: 700;
		letter-spacing: 3px;
	}
`;
export default ContactFrom;
