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
