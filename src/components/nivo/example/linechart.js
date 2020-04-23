import React from 'react';
import { ResponsiveLine } from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const _data = [
  {
    id: 'japan',
    color: 'hsl(74, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 232,
      },
      {
        x: 'helicopter',
        y: 117,
      },
      {
        x: 'boat',
        y: 115,
      },
      {
        x: 'train',
        y: 87,
      },
      {
        x: 'subway',
        y: 5,
      },
      {
        x: 'bus',
        y: 234,
      },
      {
        x: 'car',
        y: 58,
      },
      {
        x: 'moto',
        y: 20,
      },
      {
        x: 'bicycle',
        y: 280,
      },
      {
        x: 'horse',
        y: 234,
      },
      {
        x: 'skateboard',
        y: 220,
      },
      {
        x: 'others',
        y: 214,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(345, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 55,
      },
      {
        x: 'helicopter',
        y: 11,
      },
      {
        x: 'boat',
        y: 260,
      },
      {
        x: 'train',
        y: 130,
      },
      {
        x: 'subway',
        y: 282,
      },
      {
        x: 'bus',
        y: 218,
      },
      {
        x: 'car',
        y: 206,
      },
      {
        x: 'moto',
        y: 193,
      },
      {
        x: 'bicycle',
        y: 290,
      },
      {
        x: 'horse',
        y: 184,
      },
      {
        x: 'skateboard',
        y: 73,
      },
      {
        x: 'others',
        y: 203,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(127, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 191,
      },
      {
        x: 'helicopter',
        y: 156,
      },
      {
        x: 'boat',
        y: 43,
      },
      {
        x: 'train',
        y: 275,
      },
      {
        x: 'subway',
        y: 23,
      },
      {
        x: 'bus',
        y: 108,
      },
      {
        x: 'car',
        y: 297,
      },
      {
        x: 'moto',
        y: 30,
      },
      {
        x: 'bicycle',
        y: 78,
      },
      {
        x: 'horse',
        y: 282,
      },
      {
        x: 'skateboard',
        y: 279,
      },
      {
        x: 'others',
        y: 19,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(318, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 250,
      },
      {
        x: 'helicopter',
        y: 51,
      },
      {
        x: 'boat',
        y: 159,
      },
      {
        x: 'train',
        y: 27,
      },
      {
        x: 'subway',
        y: 11,
      },
      {
        x: 'bus',
        y: 24,
      },
      {
        x: 'car',
        y: 79,
      },
      {
        x: 'moto',
        y: 78,
      },
      {
        x: 'bicycle',
        y: 258,
      },
      {
        x: 'horse',
        y: 33,
      },
      {
        x: 'skateboard',
        y: 119,
      },
      {
        x: 'others',
        y: 117,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(338, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 281,
      },
      {
        x: 'helicopter',
        y: 109,
      },
      {
        x: 'boat',
        y: 217,
      },
      {
        x: 'train',
        y: 84,
      },
      {
        x: 'subway',
        y: 160,
      },
      {
        x: 'bus',
        y: 282,
      },
      {
        x: 'car',
        y: 187,
      },
      {
        x: 'moto',
        y: 221,
      },
      {
        x: 'bicycle',
        y: 160,
      },
      {
        x: 'horse',
        y: 278,
      },
      {
        x: 'skateboard',
        y: 20,
      },
      {
        x: 'others',
        y: 242,
      },
    ],
  },
];

const ResponsiveLineExample = (props) => {
  const data = _data;
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'nivo' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel='y'
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default ResponsiveLineExample;
