import { Typography } from '@material-ui/core';
import React, { Fragment } from 'react';

const numberOfLevel = (data) => {
  const result = data.reduce((accumulator, currentValue) => {
    const keysValues = Object.entries(currentValue);
    keysValues.map(([currentValueName, currentValueCount]) => {
      delete accumulator.name;
      if (!accumulator[currentValueName]) {
        accumulator[currentValueName] = 0;
      }
      accumulator[currentValueName] += currentValueCount;
    });
    return accumulator;
  }, {});

  return Object.entries(result);
};

export const Score = ({ data }) => {
  const datos = numberOfLevel(data);
  return (
    <Fragment>
      {datos.map(([key, value]) => (
        <Typography
          key={key}
          variant="h5"
          color="primary"
          style={{
            marginLeft: '20px',
          }}
        >
          - {key}: {value}
        </Typography>
      ))}
    </Fragment>
  );
};
