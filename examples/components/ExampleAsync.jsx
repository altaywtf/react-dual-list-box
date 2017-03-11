import React, { Component } from 'react';

import DualListBox from '../../dist';
import '../../dist/style.css';

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

class ExampleAsync extends Component {
  state = {
    options: [],
    value: [],
  };

  onLoad = () => {
    this.setState({
      options,
      value: ['ist'],
    });
  }

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <h4>Example: valueType = string || Async Loaded</h4>

        <button type="button" onClick={() => this.onLoad()}>
          Load Data
        </button>

        <br />
        <br />

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
            options={this.state.options}
            initialValue={this.state.value}
            valueType="string"
            onChange={this.onChange}
            texts={{
              item: 'Kayıt',
              items: 'Kayıt',
              search: 'Ara...',
              noItem: 'Hiç Kayıt Yok',
            }}
          />
        </form>
      </div>
    );
  }
}

export default ExampleAsync;
