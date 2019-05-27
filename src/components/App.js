import './App.css';
import React from 'react';
import ContactList from './ContactList';
import SelectedContact from './SelectedContact';

export default() => {
  return (<div className="app ui container">
    <h1>Contacts</h1>
    <div className="ui grid stackable container">
      <div className="row">
        <div className="nine wide column">
          <SelectedContact/>
        </div>
        <div className="seven wide column">
          <ContactList/>
        </div>
      </div>
    </div>

    <div className="attribution">Icons made by&#8287;
      <a href="https://www.freepik.com/?__hstc=57440181.b298675a16b168f6cfe39cc3bd32c9ee.1558266364035.1558291793545.1558904742467.5&__hssc=57440181.6.1558904742467&__hsfp=1449348762" title="Freepik">Freepik</a>
      &#8287;from&#8287;
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      &#8287;is licensed by&#8287;
      <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
    </div>

  </div>);
}
