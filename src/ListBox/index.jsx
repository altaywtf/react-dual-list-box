import React, { Component, PropTypes } from 'react';
import style from './style.scss';

// PropTypes
const { array, func, node, string } = PropTypes;
const propTypes = {
  options: array,
  onTransfer: func,
  buttonText: node,
  valueType: string,
};

class ListBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterKeyword: '',
      selectedValues: [],
    };
  }

  onChange = (event) => {
    const { options } = event.target;
    const selectedValues = [];

    // Using a for loop here becase map does not work on HTML Collection 🤓
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].selected) {
        const value = options[i].value;

        if (this.props.valueType === 'number') {
          selectedValues.push(parseInt(value, 10));
        } else {
          selectedValues.push(value);
        }
      }
    }

    this.setState({ selectedValues });
  }

  onFilterKeywordChange = (event) => {
    const filterKeyword = event.target.value;
    this.setState({ filterKeyword });
  }

  handleTransfer = () => {
    this.props.onTransfer(this.state.selectedValues);
    this.setState({
      selectedValues: [],
    });
  }

  render() {
    const { selectedValues, filterKeyword } = this.state;
    const { options, buttonText } = this.props;

    return (
      <div className={style.Wrapper}>
        <input
          value={filterKeyword}
          onChange={this.onFilterKeywordChange}
          placeholder="Search..."
        />

        <button
          type="button"
          onClick={this.handleTransfer}
          disabled={options.length === 0}
        >
          {buttonText}
        </button>

        <select
          multiple
          value={selectedValues}
          onChange={this.onChange}
        >
          {options
            .filter(option => (option.label).toLowerCase().includes(filterKeyword))
            .map((option, index) => (
              <option value={option.value} key={index}>
                {option.label}
              </option>
            ))
          }
        </select>
      </div>
    );
  }
}

ListBox.propTypes = propTypes;

export default ListBox;
