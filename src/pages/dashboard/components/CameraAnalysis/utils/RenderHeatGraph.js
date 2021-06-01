import * as d3 from 'd3';
import CalculateGraphData from './CalculateGraphData';

const renderHeatMap = (data) => {
	const { officerNames, status, times } = CalculateGraphData(data);

	let margin = { top: 30, right: 100, bottom: 30, left: 100 },
		width = window.innerWidth - margin.left - margin.right,
		height = window.innerHeight / 4 - margin.top - margin.bottom;

	//clear before re-rendering
	d3.select('#my_dataviz').selectAll('*').remove();

	var svg = d3
		.select('#my_dataviz')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	var x = d3.scaleBand().range([0, width]).domain(times).padding(0.01);
	svg

		.append('g')
		.attr('transform', 'translate(0,' + height + ')')
		.call(d3.axisBottom(x));

	var y = d3.scaleBand().range([height, 0]).domain(officerNames).padding(0.01);
	svg.append('g').call(d3.axisLeft(y));

	var myColor = d3.scaleLinear().range(['aqua', 'darkblue']).domain([1, 100]);

	svg
		.selectAll()
		.data(status)
		.enter()
		.append('rect')
		.attr('x', (d) => {
			return x(d.time);
		})
		.attr('y', (d) => {
			return y(d.officerName);
		})
		.attr('width', x.bandwidth())
		.attr('height', y.bandwidth())
		.style('fill', function (d) {
			return myColor(d.value);
		});
};
export default renderHeatMap;
