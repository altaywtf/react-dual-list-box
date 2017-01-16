import React, { Component, PropTypes } from 'react';
import style from './style.scss';

const { array, func, node, string, bool } = PropTypes;
const propTypes = {
  options: array,
  onTransfer: func,
  buttonText: node,
  valueType: string,
  disabled: bool,
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

    // Using a for loop here because map does not work on HTML Collection 🤓
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
    const { disabled, options, buttonText } = this.props;

    const filteredOptions = options
      .filter(option => (option.label).toLowerCase().includes(filterKeyword));

    return (
      <div className={style.Wrapper}>
        <input
          value={filterKeyword}
          onChange={this.onFilterKeywordChange}
          placeholder="Search..."
          disabled={disabled}
        />

        <button
          type="button"
          onClick={this.handleTransfer}
          disabled={options.length === 0 || disabled}
        >
          {buttonText}
        </button>

        <select
          multiple
          value={selectedValues}
          onChange={this.onChange}
          disabled={disabled}
        >
          {filteredOptions.map((option, index) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </select>

        <span className={style.ItemCount}>
          {filteredOptions.length > 0 ? `${filteredOptions.length} items` : 'No Item'}
        </span>
      </div>
    );
  }
}

ListBox.propTypes = propTypes;

export default ListBox;
