import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  }

  render() {
    const { newsSources } = this.props;
    const Options = newsSources.map(source => (
      <option key={source} value={source}>{source}</option>
    ));

    return (
      <div>
        <select name="" id="" value={this.state.value} onChange={this.handleChange}>
          {Options}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  newsSources: PropTypes.array,
};

Select.defaultProps = {
  newsSources: ['Rahul', 'Rex', 'Ray', 'Kai', 'Tyson', 'Ash', 'Mitsy', 'Brock', 'Pikachu', 'Maxx', 'Binny', 'Roger'],
};

export default Select;
