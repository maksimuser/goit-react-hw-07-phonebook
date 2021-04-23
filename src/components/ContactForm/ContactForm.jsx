import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { addContact } from '../../redux/contacts/contacts-operations';
import styles from './ContactForm.module.scss';

class ContactForm extends Component {
  state = { name: '', number: '' };

  nameId = shortid.generate();
  numberId = shortid.generate();

  findName = name => {
    const { contacts } = this.props;
    const normalizedName = name.toLowerCase();
    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedName,
    );
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { onSubmit } = this.props;

    const checkName = this.findName(name);

    if (checkName) {
      alert(`${name} is already in contacts`);
      this.resetForm();
      return;
    }

    onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        className={styles.Form}
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <label className={styles.Form__label} htmlFor={this.nameId}>
          Name{' '}
        </label>
        <input
          className={styles.Form__name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Type name"
          value={name}
          onChange={this.handleChange}
          id={this.nameId}
        />

        <label className={styles.Form__label} htmlFor={this.numberId}>
          Number{' '}
        </label>
        <input
          className={styles.Form__tel}
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          placeholder="Type number"
          id={this.numberId}
          value={number}
          onChange={this.handleChange}
        />

        <button className={styles.Form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
