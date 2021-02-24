import React from 'react';

class SearchBar extends React.Component{

  state = {term:''};

  onInputChange = (evt) => {
    this.setState({term:evt.target.value})
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();

    this.props.onTermSubmit(this.state.term)
  }

  render(){
    return (
      <div className='ui segment'>
      <form className='ui form'  onSubmit={this.onFormSubmit}>
        <div className='field'>
          <label>video Search</ label>
          <input
          type="text"
          placeholder="search"
          onChange={this.onInputChange}
          value={this.state.term}
        />
        </ div>
      </ form>
      </ div>
    );
  }


}

export default SearchBar;
