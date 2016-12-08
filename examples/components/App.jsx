import React from 'react';

import ExampleNumber from './ExampleNumber';
import ExampleString from './ExampleString';
import ExampleDisabled from './ExampleDisabled';

export default () => (
  <div style={{ width: '640px', margin: 'auto', textAlign: 'center' }}>
    <ExampleNumber />

    <hr style={{ opacity: 0.3, marginTop: 50, marginBottom: 50 }} />

    <ExampleString />

    <hr style={{ opacity: 0.3, marginTop: 50, marginBottom: 50 }} />

    <ExampleDisabled />
  </div>
);
