import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { MainTitle, SecondTitle, Container } from './App.styled';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    if (JSON.parse(localStorage.getItem('contacts'))) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  handleFormSubmit = values => {
    const subName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (subName) {
      return alert(`${values.name} is already in contacts`);
    }

    this.setState(prevState => {
      return {
        contacts: prevState.contacts.concat({ ...values, id: nanoid() }),
      };
    });
  };
  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  handleFilterChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  handleFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.handleFormSubmit} />
        <SecondTitle>Contacts</SecondTitle>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.handleFilter()}
          onDeleteContact={this.handleDelete}
        />
      </Container>
    );
  }
}
export default App;
