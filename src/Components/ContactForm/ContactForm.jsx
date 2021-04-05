import React, { Component } from 'react';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelector } from '../../redux/contacts';
// import contactsOperations from '../../redux/contacts/contacts-operations';
// import contactsSelector from '../../redux/contacts/contacts-selectors';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

  handleChangeName = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleChangeNumber = e => {
    this.setState({
      number: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    
    if (name.trim() === '' || number.trim() === '') {
      console.log('empty name and number');
      toast.error(`The name and number fields are empty!`);
      return;
    }
   else if (this.props.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      console.log(name);
      toast.error(`${name} is already in your contact list`);
      return;
    }
     this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
    
  };

  render() {
    const { name, number } = this.state;
    const nameId = shortid.generate();
    const telId = shortid.generate();

    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
        <label htmlFor={nameId}> Name </label>
        <input
          className={s.input}
          id={nameId}
          type="text"
          value={name}
          onChange={this.handleChangeName}
        />
        <label htmlFor={telId}> Number </label>
        <input
          className={s.input}
          id={telId}
          type="text"
          value={number}
          onChange={this.handleChangeNumber}
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
        </form>
        </>
      
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelector.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  // fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onSubmit: (nam, tel) => dispatch(contactsOperations.addContact(nam, tel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);