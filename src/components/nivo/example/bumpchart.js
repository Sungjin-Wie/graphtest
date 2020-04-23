import React from 'react';
import { ResponsiveAreaBump } from '@nivo/bump';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const _data = [
  {
    id: 'JavaScript',
    data: [
      {
        x: 2000,
        y: 20,
      },
      {
        x: 2001,
        y: 27,
      },
      {
        x: 2002,
        y: 24,
      },
      {
        x: 2003,
        y: 26,
      },
      {
        x: 2004,
        y: 23,
      },
      {
        x: 2005,
        y: 17,
      },
    ],
  },
  {
    id: 'ReasonML',
    data: [
      {
        x: 2000,
        y: 30,
      },
      {
        x: 2001,
        y: 22,
      },
      {
        x: 2002,
        y: 13,
      },
      {
        x: 2003,
        y: 27,
      },
      {
        x: 2004,
        y: 11,
      },
      {
        x: 2005,
        y: 26,
      },
    ],
  },
  {
    id: 'TypeScript',
    data: [
      {
        x: 2000,
        y: 27,
      },
      {
        x: 2001,
        y: 25,
      },
      {
        x: 2002,
        y: 18,
      },
      {
        x: 2003,
        y: 21,
      },
      {
        x: 2004,
        y: 14,
      },
      {
        x: 2005,
        y: 22,
      },
    ],
  },
  {
    id: 'Elm',
    data: [
      {
        x: 2000,
        y: 11,
      },
      {
        x: 2001,
        y: 25,
      },
      {
        x: 2002,
        y: 23,
      },
      {
        x: 2003,
        y: 15,
      },
      {
        x: 2004,
        y: 19,
      },
      {
        x: 2005,
        y: 15,
      },
    ],
  },
  {
    id: 'CoffeeScript',
    data: [
      {
        x: 2000,
        y: 24,
      },
      {
        x: 2001,
        y: 22,
      },
      {
        x: 2002,
        y: 24,
      },
      {
        x: 2003,
        y: 10,
      },
      {
        x: 2004,
        y: 10,
      },
      {
        x: 2005,
        y: 28,
      },
    ],
  },
];

const ResponsiveAreaBumpExample = (props) => {
  const data = _data;
  return (
    <ResponsiveAreaBump
      data={data}
      margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
      spacing={8}
      colors={{ scheme: 'nivo' }}
      blendMode='multiply'
      startLabel='id'
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -36,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
    />
  );
};

export default ResponsiveAreaBumpExample;
