import React, { useCallback, useState, useEffect } from 'react';
import { PieChart, Pie, Sector ,Cell } from 'recharts';

const data = [
	{ name: 'Frontend', value: 600 },
	{ name: 'Backend', value: 300 },
	{ name: 'Communication', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const renderActiveShape = (props) => {
	const RADIAN = Math.PI / 180;
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
		percent,
		value,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 7) * cos;
	const sy = cy + (outerRadius + 7) * sin;
	const mx = cx + (outerRadius + 27) * cos;
	const my = cy + (outerRadius + 27) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fill}
				fill='none'
			/>
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 10}
				y={ey}
				dy={10}
				textAnchor={textAnchor}
				fill='#777777'>
				{` ${(percent * 100).toFixed(0)}%`}
			</text>
		</g>
	);
};

export default function App() {
	const [activeIndex, setActiveIndex] = useState(0);

	const onPieEnter = useCallback(
		(_, index) => {
			setActiveIndex(index);
		},
		[setActiveIndex],
	);
	const [responsive, setResponsive] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 700) {
			setResponsive(true);
		} else {
			setResponsive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<PieChart width={400} height={420}>
			<Pie
				activeIndex={activeIndex}
				activeShape={renderActiveShape}
				data={data}
				cx={200}
				cy={200}
				innerRadius={100}
				outerRadius={120}
				paddingAngle={5}
				fill='#0ab1db'
				dataKey='value'
				onMouseEnter={onPieEnter}>
			{data.map((entry, index) => (
								<Cell
									stroke='none'
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
            </Pie>
		</PieChart>
	);
}
