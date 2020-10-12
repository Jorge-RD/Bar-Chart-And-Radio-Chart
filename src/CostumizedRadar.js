import React from 'react';
import { Radar } from 'recharts';

export const CostumizedRadar = ({ name, dataKey, color }) => {
  console.log({ name, dataKey, color });
  return (
    <Radar
      name={name}
      dataKey={dataKey}
      stroke={color}
      fill={color}
      fillOpacity={0.6}
    />
  );
};
