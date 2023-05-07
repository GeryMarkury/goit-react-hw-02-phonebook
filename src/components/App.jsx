import { Component } from 'react';
import { nanoid } from 'nanoid'
import { Section } from './Section/Section';
import { NameForm } from './Section/NameForm/NameForm';
import { ContactsList } from './Section/ContactsList/ContactsList';

export class App extends Component {
  
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value })
  };

  onAddContact = () => {
    const newContact = { id: nanoid(), name: this.state.name, number: this.state.number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
      filter: '',
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
        <Section title="Phonebook">
          <NameForm name={this.state.name} number={this.state.number} handleChange={this.handleChange} onAddContact={this.onAddContact}></NameForm>
        </Section>
        <Section title="Contacts">
          <ContactsList contacts={visibleContacts} value={this.state.filter} changeFilter={this.changeFilter}></ContactsList>
        </Section>
      </div>
  );
  } 
};
