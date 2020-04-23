import React from 'react';
import {
  LineChart,
  AreaChart,
  BarChart,
  ComposedChart,
  ScatterChart,
  PieChart,
  RadarChart,
  RadialBarChart,
  WithToolTip,
} from './example';
import Chart from '../chart';

const ReCharts = () => {
  return (
    <>
      <div>
        <div style={{ marginLeft: 30, fontSize: 20 }}>
          <div>Rechart.js (built with D3.js), 애니메이션 기본 탑재</div>
          <a href='http://recharts.org/en-US/examples'>바로가기</a>
        </div>
        <Chart Component={LineChart} name='Line Chart' />
        <Chart Component={AreaChart} name='Area Chart' />
        <Chart Component={BarChart} name='Bar Chart' />
      </div>
      <div style={{ clear: 'both' }}></div>
      <div>
        <Chart Component={ComposedChart} name='Composed Chart' />
        <Chart Component={ScatterChart} name='Scatter Chart' />
        <Chart Component={PieChart} name='Pie Chart' />
      </div>
      <div style={{ clear: 'both' }}></div>
      <div>
        <Chart Component={RadarChart} name='Radar Chart' />
        <Chart Component={RadialBarChart} name='Radial Bar Chart' />
        <Chart Component={WithToolTip} name='Pie Chart' />
      </div>
    </>
  );
};

export default ReCharts;
