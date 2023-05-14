import { Component } from 'react';
import { nanoid } from 'nanoid'
import { NameForm } from './NameForm/NameForm';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

onAddContact = (name, number) => {
  const contactExists = this.state.contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (contactExists) {
    alert(`${name} is already in contacts.`);
    return;
  }
  const newContact = { id: nanoid(), name: name, number: number };
  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
    filter: '',
  }));
};

  onDeleteContact = (id) => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id)
  }));
};
  
  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
     <div>
        <h1>Phonebook</h1>
          <NameForm onAddContact={this.onAddContact}></NameForm>
        <h2>Contacts</h2>
          <ContactsList contacts={visibleContacts} value={this.state.filter} changeFilter={this.changeFilter} onDeleteContact={this.onDeleteContact}></ContactsList>
      </div>
  );
  } 
};
