import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import ListBox from '../ListBox';

const { array, func, shape, arrayOf, string, any, node } = PropTypes;
const propTypes = {
  initialValue: array,
  valueType: string,
  options: arrayOf(shape({
    value: any,
    label: node,
  })),
  onChange: func,
};

const defaultProps = {
  initialValue: [],
  valueType: 'string',
};

class DualListBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || [],
      options: props.options || [],
    };
  }

  addSelectedValues = (selectedValues) => {
    const updatedValue = [...this.state.value, ...selectedValues];
    this.setState({ value: updatedValue }, () => this.props.onChange(updatedValue));
  }

  removeSelectedValues = (selectedValues) => {
    const updatedValue = this.state.value.filter(valueItem =>
      selectedValues.indexOf(valueItem) < 0
    );

    this.setState({ value: updatedValue }, () => this.props.onChange(updatedValue));
  }

  render() {
    const {
      options,
      value,
    } = this.state;

    const optionsLeft = options.filter(option => value.indexOf(option.value) < 0);
    const optionsRight = options.filter(option => value.indexOf(option.value) !== -1);

    return (
      <div className={style.Wrapper}>
        <ListBox
          options={optionsLeft}
          onTransfer={this.addSelectedValues}
          buttonText=">"
          valueType={this.props.valueType}
        />

        <ListBox
          options={optionsRight}
          onTransfer={this.removeSelectedValues}
          buttonText="<"
          valueType={this.props.valueType}
        />
      </div>
    );
  }
}

DualListBox.propTypes = propTypes;
DualListBox.defaultProps = defaultProps;

export default DualListBox;
