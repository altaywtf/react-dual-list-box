import React, { Component } from 'react';
// import style from './style.scss';
import ListBox from '../ListBox';

class DualListBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterKeyword: '',
      selectedValues: [],
      options: [
        {
          value: 'A',
          label: 'Altay',
        },
        {
          value: 'B',
          label: 'Bora',
        },
      ],
    };
  }

  addSelectedValues = (values) => {
    const { selectedValues } = this.state;

    this.setState({
      selectedValues: [...selectedValues, ...values],
    });
  }

  removeSelectedValues = (values) => {
    const { selectedValues } = this.state;

    this.setState({
      selectedValues: selectedValues.filter(value => values.indexOf(value) < 0),
    });
  }

  render() {
    const {
      options,
      selectedValues,
    } = this.state;

    const optionsLeft = options.filter(option => selectedValues.indexOf(option.value) < 0);
    const optionsRight = options.filter(option => selectedValues.indexOf(option.value) !== -1);

    console.log(optionsLeft, optionsRight);

    return (
      <div>
        <ListBox
          options={optionsLeft}
          onTransfer={this.addSelectedValues}
        />

        <ListBox
          options={optionsRight}
          onTransfer={this.removeSelectedValues}
        />
      </div>
    );
  }
}

export default DualListBox;
