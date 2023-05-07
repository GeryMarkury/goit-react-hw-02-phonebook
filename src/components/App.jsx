import { Component } from 'react';
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
    this.state.contacts.push({ id: 1, name: this.state.name });
  }

  render() {
    return (
     <div>
        <Section title="Phonebook">
         <NameForm name={this.state.name} handleNameChange={this.handleNameChange} onAddContact={this.onAddContact}></NameForm>
        </Section>
        <Section title="Contacts">
          <ContactsList></ContactsList>
        </Section>
      </div>
  );
  } 
};
