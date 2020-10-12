import React, { Fragment } from 'react';

import { RadarOrganizationalClimate } from './RadarOrganizationalClimate';
import { StackedBarChart } from './StackedBarChart';

export const App = () => {
  return (
    <Fragment>
      <StackedBarChart />
      <RadarOrganizationalClimate />
    </Fragment>
  );
};
