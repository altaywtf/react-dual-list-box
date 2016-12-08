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
        <h4>Example: valueType = number</h4>

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
            valueType="number"
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default ExampleNumber;
