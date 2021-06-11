import * as d3 from 'd3';

export const renderGraph = (status, officerName, id) => {
	const officerNames = [officerName];
	const times = status.map((d) => d.value);
	d3.select(id).selectAll('*').remove();
	var margin = { top: 0, right: 0, bottom: 0, left: 0 },
		width = 300 - margin.left - margin.right,
		height = 25 - margin.top - margin.bottom;

	var svg = d3
		.select(id)
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	var x = d3.scaleBand().range([0, width]).domain(times).padding(0.01);

	var y = d3.scaleBand().range([height, 0]).domain(officerNames).padding(0.01);

	var myColor = d3.scaleLinear().range(['white', '#69b3a2']).domain([1, 100]);

	svg
		.selectAll()
		.data(status)
		.enter()
		.append('rect')
		.attr('x', function (d) {
			return x(d.value);
		})
		.attr('y', function (d) {
			return y(officerName);
		})
		.attr('width', x.bandwidth())
		.attr('height', y.bandwidth())
		.style('fill', function (d) {
			return myColor(d.value);
		});
};
