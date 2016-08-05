import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import React from 'react';
import { render } from 'react-dom';

import ViewModel from 'viewmodel-react';

App({
  render(){
	<div>  
		<h1>Hello World</h1>
		<Person />
	</div>
  }
});