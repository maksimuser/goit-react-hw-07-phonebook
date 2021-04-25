import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { changeFilter, getFilter } from '../../redux/contacts';

import styles from './Filter.module.scss';

class Filter extends Component {
  filterId = shortid.generate();
  render() {
    const { filter, onChange } = this.props;

    return (
      <div className={styles.Filter}>
        <label className={styles.Filter__label} htmlFor={this.filterId}>
          Find contacts by name{' '}
        </label>
        <input
          className={styles.Filter__input}
          type="text"
          value={filter}
          id={this.filterId}
          onChange={onChange}
          placeholder="Type name contact"
        />
      </div>
    );
  }
}

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: evt => dispatch(changeFilter(evt.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
