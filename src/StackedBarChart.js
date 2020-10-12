import React, { Fragment } from 'react';
import 'fontsource-roboto';

import { BarChart, XAxis, YAxis } from 'recharts';
import { Bar, LabelList } from 'recharts';
import { CartesianGrid, Tooltip, Legend } from 'recharts';

import { Score } from './Score';
import { ColorConfig } from './ColorConfig';
import { headcountData } from './data';

export const StackedBarChart = () => {
  return (
    <Fragment>
      <Score data={headcountData} />
      <BarChart
        width={1000}
        height={600}
        data={headcountData}
        margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          interval={0}
          label={{ value: 'Clients', dy: 60 }}
        />
        <YAxis
          label={{
            value: 'Number of employees',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <Tooltip />
        <Legend verticalAlign="top" height={50} />
        {Object.keys(ColorConfig).map((level) => {
          return (
            <Bar
              key={level}
              dataKey={level}
              stackId="a"
              fill={ColorConfig[level]}
            >
              <LabelList dataKey={level} style={{ fill: '#FFFFFF' }} />
            </Bar>
          );
        })}
      </BarChart>
    </Fragment>
  );
};
