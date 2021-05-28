import styled from 'styled-components';

export const UserListWrapper = styled.div`
	table {
		border-collapse: collapse;
		width: 100%;

		td {
			border: 2px solid #e4e5ea;
			text-align: center;
			font-size: 110%;
			* {
				padding: 1.5%;
			}
		}

		tr {
			color: #354664;
			font-weight: 500;
		}
		tr:hover {
			background-color: #ddd;
		}

		th {
			border: 2px solid #e4e5ea;
			text-decoration: none;
			font-weight: 900;
			color: #354664;
			font-size: 125%;
			padding: 1.5%;
		}
	}
`;

export const UserActionWrapper = styled.div`
	.button {
		outline: none;
		border-width: 0;
		border-radius: 5px;
		padding: 2.5% 5%;
		margin: 1%;
		color: white;
		font-size: medium;
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
`;
