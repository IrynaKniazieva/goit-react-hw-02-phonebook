import React from "react"
import { nanoid } from "nanoid"



class Form extends React.Component {
  state = {
    name: '',
    number: ''
  }

//Уникальные id, библиотека nanoid
  nameInputId = nanoid();
  numberInputId = nanoid();



   // Показывает то что ввожу в инпут
handleChange = evt => {
    const {name, value} = evt.currentTarget;
    this.setState({ [name]: value, });
  }

  //Вызывается при отправке формы
handleSubmit = evt => {
    evt.preventDefault();
    
    this.props.onSubmit(this.state);
    //чищу форму после нажатия на кнопку "add contact"
    this.reset();
  }

    // Очистить форму
reset = () => {
    this.setState({
        name: '',
        number: ''
    })
}
  
render () {
    const {name} = this.state;
    const {number} = this.state;

    return (<form onSubmit={this.handleSubmit}>
      <label htmlFor={this.nameInputId}>
        Name 
        <input
            onChange={this.handleChange}
            value={name}
            type="text"
            name="name"
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
      </label>
      <label htmlFor={this.numberInputId}>
        Number
        <input
            onChange={this.handleChange}
            value={number}
            type="tel"
            name="number"
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>    
    )
}
}

export default Form