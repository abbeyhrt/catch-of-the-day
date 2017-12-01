// let's go!

import React from 'react';
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';

//create a component
//render(<component you created/>, what dom element it should render out to)
render(<StorePicker />, document.querySelector('#main'));
