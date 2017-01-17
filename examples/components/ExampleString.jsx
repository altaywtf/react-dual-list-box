import React, { Component } from 'react';

import DualListBox from '../../dist';
import '../../dist/style.css';

class ExampleNumber extends Component {
  state = {
    value: ['ist'],
  };

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    const options = [
      {
        label: 'Istanbul',
        value: 'ist',
      },
      {
        label: 'Antalya',
        value: 'ant',
      },
      {
        label: 'Ankara',
        value: 'ank',
      },
    ];

    return (
      <div>
        <h4>Example: valueType = string</h4>

        <span>
          Selected Values:
          {this.state.value.map((item, index) => (
            <span key={index} style={{ paddingLeft: 5, paddingRight: 5 }}>
              {item}
              {(index !== this.state.value.length - 1) && ','}
            </span>
          ))}
        </span>

        <br /> <br />

        <form>
          <DualListBox
            options={options}
            initialValue={this.state.value}
            valueType="string"
            onChange={this.onChange}
            leftButtonContent={<b>Custom Left Button Text</b>}
            rightButtonContent={<b>Custom Right Button Text</b>}
          />
        </form>
      </div>
    );
  }
}

export default ExampleNumber;
