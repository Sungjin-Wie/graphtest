import React from 'react';
import { Line, Bar, HeatMap, Pie, Radar, Waffle, AreaBump } from './example';
import Chart from '../chart';

const Nivo = () => {
  return (
    <>
      <div>
        <div style={{ marginLeft: 30, fontSize: 20 }}>
          <div>Nivo.js (built with D3.js)</div>
          <a href='https://nivo.rocks/'>바로가기</a>
        </div>
        <Chart Component={Bar} name='Bar Chart' />
        <Chart Component={HeatMap} name='Heat map Chart' />
        <Chart Component={Line} name='Line Chart' />
      </div>
      <div style={{ clear: 'both' }}></div>
      <div>
        <Chart Component={Pie} name='Pie Chart' />
        <Chart Component={Radar} name='Radar Chart' />
        <Chart Component={Waffle} name='Waffle Chart' />
      </div>
      <div style={{ clear: 'both' }}></div>
      <div>
        <Chart Component={AreaBump} name='AreaBump Chart' />
      </div>
    </>
  );
};

export default Nivo;
