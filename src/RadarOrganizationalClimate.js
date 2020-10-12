import React from 'react';
import { Radar, RadarChart, PolarGrid } from 'recharts';
import { Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import { CostumizedRadar } from './CostumizedRadar';
import { organizationalClimate } from './data';
import { ColorConfig } from './ColorConfig';

export const RadarOrganizationalClimate = () => {
  return (
    <RadarChart
      cx={450}
      cy={300}
      outerRadius={240}
      width={1000}
      height={600}
      data={organizationalClimate}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" axisLineType="circle" />
      <Tooltip />
      <PolarRadiusAxis domain={[0, 100]} angle={90} />
      <Radar
        name="Menor o igual a 1 año"
        dataKey="A"
        stroke={ColorConfig.Lead}
        fill={ColorConfig.Lead}
        fillOpacity={0.6}
      />
      <Radar
        name="2 a 3 años"
        dataKey="B"
        stroke={ColorConfig.Junior}
        fill={ColorConfig.Junior}
        fillOpacity={0.6}
      />
      <Radar
        name="4 a 5 años"
        dataKey="C"
        stroke={ColorConfig.Senior}
        fill={ColorConfig.Senior}
        fillOpacity={0.6}
      />
      <Legend verticalAlign="top" height={70} />
    </RadarChart>
  );
};
