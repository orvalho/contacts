import './SelectedContact.css';
import React from 'react';
import {connect} from 'react-redux';

const SelectedContact = ({contact}) => {
  return (<div className="selected-contact ui card">
    <div className="image">
      <img src={`/img/profilePics/${contact.name}.png`} alt={contact.name}/>
    </div>
    <div className="content">
      <div className="header">{contact.name}</div>
      <div className="description">{contact.phone}</div>
      <div className="description">{contact.email}</div>
    </div>
  </div>);
};

const mapStateToProps = state => {
  return {contact: state.selectedContact};
};

export default connect(mapStateToProps)(SelectedContact);
