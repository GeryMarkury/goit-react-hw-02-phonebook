import { Component } from 'react';
import { nanoid } from 'nanoid'
import { Section } from './Section/Section';
import { NameForm } from './Section/NameForm/NameForm';
import { ContactsList } from './Section/ContactsList/ContactsList';

export class App extends Component {
  
  state = {
    contacts: [],
    name: '',
  };
  
  handleNameChange = (event) => {
  this.setState({name: event.currentTarget.value})
  };

  onAddContact = () => {
    const newContact = { id: nanoid(), name: this.state.name };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
  };

  render() {
    return (
     <div>
        <Section title="Phonebook">
         <NameForm name={this.state.name} handleNameChange={this.handleNameChange} onAddContact={this.onAddContact}></NameForm>
        </Section>
        <Section title="Contacts">
          <ContactsList contacts={this.state.contacts}></ContactsList>
        </Section>
      </div>
  );
  } 
};
