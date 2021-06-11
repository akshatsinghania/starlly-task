import React, { useEffect } from 'react';
import { renderGraph } from './util/renderGraph';

const Status = (row) => {
	useEffect(() => {
		renderGraph(
			row.row.original.status,
			row.row.original.officerName,
			`#status-graph-${row.row.index}`,
		);
	}, [row]);

	return (
		<div id={`status-graph-${row.row.index}`}>
			<svg></svg>
		</div>
	);
};

export default Status;
