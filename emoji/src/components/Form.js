import React, { Component } from 'react';
import emojiList from './emojiList.json';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: emojiList
    };
    this.mapEmoji = this.mapEmoji.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const filtered = emojiList.filter((emoji) => {
      if (emoji.keywords.toLowerCase().indexOf(value.toLowerCase()) >= 0 || emoji.title.toLowerCase().indexOf(value.toLowerCase()) >= 0){
        return emoji.title;
      }
      // return emoji.title.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    });
    this.setState({ filtered });
  }

  mapEmoji(emoji, id) {
    
    // if (emojiList.length > 15) {
    //   emojiList.length = 15;
    // }
    return <li key={id}><span>{emoji.symbol}</span> {emoji.title}</li>
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} />
        <ul>
          {this.state.filtered.map(this.mapEmoji)}
        </ul>
      </div>
    );
  }
}

export default Form;
