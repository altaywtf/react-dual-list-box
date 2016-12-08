import React, { Component } from 'react';

import DualListBox from '../../dist';
import '../../dist/style.css';

class ExampleNumber extends Component {
  state = {
    value: [1],
  };

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    const options = [
      {
        label: 'Istanbul',
        value: 1,
      },
      {
        label: 'Antalya',
        value: 2,
      },
      {
        label: 'Ankara',
        value: 3,
      },
    ];

    return (
      <div>
        <h4>Example: Disabled</h4>

        <form>
          <DualListBox
            disabled
            options={options}
            initialValue={this.state.value}
            valueType="number"
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default ExampleNumber;
