const calculate = (data) => {
	// Labels of row and columns
	var officerNames = [];
	var Times = [];

	var status = data.map((v) => {
		return v.status.map(({ value, time }) => {
			var hours = new Date(time).getHours();
			hours = hours + 1 > 12 ? `${hours - 12}pm` : `${hours}am`;
			Times.push(hours);
			officerNames.push(v.officerName);
			return {
				time: hours,
				officerName: v.officerName,
				value,
			};
		});
	});
	status = status.flat();
	return {
		status,
		times: Times,
		officerNames: officerNames,
	};
};
export default calculate;
