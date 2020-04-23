import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const _data = [
  {
    country: 'AD',
    'hot dog': 35,
    'hot dogColor': 'hsl(142, 70%, 50%)',
    burger: 188,
    burgerColor: 'hsl(38, 70%, 50%)',
    sandwich: 132,
    sandwichColor: 'hsl(295, 70%, 50%)',
    kebab: 58,
    kebabColor: 'hsl(207, 70%, 50%)',
    fries: 60,
    friesColor: 'hsl(234, 70%, 50%)',
    donut: 9,
    donutColor: 'hsl(291, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 76,
    'hot dogColor': 'hsl(40, 70%, 50%)',
    burger: 134,
    burgerColor: 'hsl(73, 70%, 50%)',
    sandwich: 169,
    sandwichColor: 'hsl(281, 70%, 50%)',
    kebab: 139,
    kebabColor: 'hsl(291, 70%, 50%)',
    fries: 196,
    friesColor: 'hsl(308, 70%, 50%)',
    donut: 11,
    donutColor: 'hsl(339, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 110,
    'hot dogColor': 'hsl(33, 70%, 50%)',
    burger: 84,
    burgerColor: 'hsl(176, 70%, 50%)',
    sandwich: 196,
    sandwichColor: 'hsl(303, 70%, 50%)',
    kebab: 147,
    kebabColor: 'hsl(264, 70%, 50%)',
    fries: 26,
    friesColor: 'hsl(116, 70%, 50%)',
    donut: 184,
    donutColor: 'hsl(154, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 56,
    'hot dogColor': 'hsl(139, 70%, 50%)',
    burger: 107,
    burgerColor: 'hsl(327, 70%, 50%)',
    sandwich: 134,
    sandwichColor: 'hsl(177, 70%, 50%)',
    kebab: 64,
    kebabColor: 'hsl(318, 70%, 50%)',
    fries: 57,
    friesColor: 'hsl(297, 70%, 50%)',
    donut: 88,
    donutColor: 'hsl(227, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 193,
    'hot dogColor': 'hsl(218, 70%, 50%)',
    burger: 186,
    burgerColor: 'hsl(32, 70%, 50%)',
    sandwich: 53,
    sandwichColor: 'hsl(196, 70%, 50%)',
    kebab: 47,
    kebabColor: 'hsl(154, 70%, 50%)',
    fries: 129,
    friesColor: 'hsl(185, 70%, 50%)',
    donut: 60,
    donutColor: 'hsl(220, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 99,
    'hot dogColor': 'hsl(105, 70%, 50%)',
    burger: 100,
    burgerColor: 'hsl(356, 70%, 50%)',
    sandwich: 140,
    sandwichColor: 'hsl(35, 70%, 50%)',
    kebab: 169,
    kebabColor: 'hsl(217, 70%, 50%)',
    fries: 40,
    friesColor: 'hsl(4, 70%, 50%)',
    donut: 168,
    donutColor: 'hsl(356, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 116,
    'hot dogColor': 'hsl(288, 70%, 50%)',
    burger: 12,
    burgerColor: 'hsl(132, 70%, 50%)',
    sandwich: 21,
    sandwichColor: 'hsl(31, 70%, 50%)',
    kebab: 155,
    kebabColor: 'hsl(318, 70%, 50%)',
    fries: 105,
    friesColor: 'hsl(161, 70%, 50%)',
    donut: 107,
    donutColor: 'hsl(198, 70%, 50%)',
  },
];

const ResponsiveBarExample = (props) => {
  const data = _data;
  return (
    <ResponsiveBar
      data={data}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy='country'
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default ResponsiveBarExample;
