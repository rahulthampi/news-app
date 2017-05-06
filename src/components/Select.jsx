import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/Select.scss';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    const targetValue = e.target.value;
    this.setState(prevProps => ({
      value: targetValue !== prevProps.value ? targetValue : prevProps.value,
    }));
    this.props.onChangeHandler(targetValue);
  }

  render = () => {
    const { newsSources } = this.props;
    const Options = newsSources.map(source => (
      <option key={source.id} value={source.id}>{source.name}</option>
    ));

    return (
      <div className="select-wrapper">
        <select name="" id="" value={this.state.value} onChange={this.handleChange}>
          {Options}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  newsSources: PropTypes.array,
  onChangeHandler: PropTypes.func.isRequired,
};

Select.defaultProps = {
  newsSources: [],
};

export default Select;
