import React, { useEffect } from 'react';
import { CameraAnalysisWrapper } from './CameraAnalysis.style';
import renderHeatMap from './utils/RenderHeatGraph';

//redux
import { useSelector } from 'react-redux';

const CameraAnalysis = () => {
	const attendanceData = useSelector((state) => state.attendance.data);

	useEffect(() => {
		renderHeatMap(attendanceData);
	}, [attendanceData]);
	return (
		<CameraAnalysisWrapper>
			<div id='my_dataviz'></div>
		</CameraAnalysisWrapper>
	);
};

export default CameraAnalysis;
