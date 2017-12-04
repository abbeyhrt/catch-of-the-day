import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

//remember that you can't put two parent elements into a react component
//stay away from touching the DOM in React
//use a ref instead
//constructore
class StorePicker extends React.Component {
  //This is one way to bind the Store Picker to a method using constructors
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    //first grab the text from the box
    // const value = $('input').val();
    console.log(this.storeInput.value);
    //second we are goin to transition to /store/storeid
    const storeId = this.storeInput.value;

    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={e => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object,
};

export default StorePicker;
