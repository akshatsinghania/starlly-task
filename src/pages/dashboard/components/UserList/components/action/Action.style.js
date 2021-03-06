import styled from 'styled-components';
export const ActionWrapper = styled.div`
	display: flex;
	.button {
		outline: none;
		border-width: 0;
		border-radius: 5px;
		padding: 2% 4%;
		margin: 1%;
		color: white;
		font-size: medium;
	}
	button:hover {
		filter: brightness(90%);
	}
	.red-button {
		background-color: #ef0065;
	}
	.blue-button {
		background-color: #0052cc;
	}
	.gray-button {
		background-color: #ebecf0;
		color: #354664;
	}
	.more-button {
		display: flex;
	}
	.more-button:hover {
		.more {
			display: flex;
			flex-direction: column;
		}
	}
	.more {
		display: none;
		position: absolute;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		padding: 10%;
		background-color: rgba(0, 0, 0, 0.2);
		.more__button {
			padding: 1em;
			margin: 1%;
			font-size: medium;
			border-width: 0;
			border-radius: 5px;
		}
	}
`;
