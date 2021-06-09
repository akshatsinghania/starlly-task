import React, { useEffect } from 'react';
import { CameraAnalysisWrapper } from './CameraAnalysis.style';
import renderHeatMap from './utils/RenderHeatGraph';

//redux
import { useSelector } from 'react-redux';

const CameraAnalysis = () => {
	const attendanceData = useSelector((state) => state.attendance.data);

	const reRender = useSelector((state) => state.reRender);

	useEffect(() => {
		renderHeatMap(attendanceData);
		console.log(attendanceData);
	}, [attendanceData]);
	return (
		<CameraAnalysisWrapper>
			<div id='my_dataviz'></div>
		</CameraAnalysisWrapper>
	);
};

export default CameraAnalysis;
