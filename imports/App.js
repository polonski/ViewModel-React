import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import React from 'react';
import { render } from 'react-dom';

import ViewModel from 'viewmodel-react';

App({
  render(){
    <h1>Hello World</h1>
    <Person />
  }
});