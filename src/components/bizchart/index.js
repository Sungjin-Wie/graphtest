import React from 'react';
import {
  LineHistMixed,
  Donut,
  BasicFilled,
  Radar,
  CurvedLine,
} from './example';
import Chart from '../chart';

const BizChart = () => {
  return (
    <>
      <div>
        <div style={{ marginLeft: 30, fontSize: 20 }}>
          <div> BizChart (built with G2.js), 종류가 상당히 많음</div>
          <a href='https://bizcharts.net/product/bizcharts/gallery'>바로가기</a>
        </div>
        <Chart Component={LineHistMixed} name='Histogram with Line Chart' />
        <Chart Component={Donut} name='Donut Chart' />
        <Chart Component={BasicFilled} name='Filled Chart' />
      </div>
      <div style={{ clear: 'both' }}></div>
      <div>
        <Chart Component={Radar} name='Radar Chart' />
        <Chart Component={CurvedLine} name='Curved Line Chart' />
        {/* <Chart Component={PieChart} name='Pie Chart' /> */}
      </div>
      {/* <div style={{ clear: 'both' }}></div>
      <div>
        <Chart Component={RadarChart} name='Radar Chart' />
        <Chart Component={RadialBarChart} name='Radial Bar Chart' />
        <Chart Component={WithToolTip} name='Pie Chart' />
      </div> */}
    </>
  );
};

export default BizChart;
