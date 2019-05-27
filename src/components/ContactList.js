import React from 'react';
import {connect} from 'react-redux';
import {onContactSelect} from '../actions';

const ContactList = ({contacts, onContactSelect}) => {
  const renderList = () => {
    return contacts.map(contact => {
      return (<div className="item" key={contact.name} onClick={() => {
          onContactSelect(contact)
        }}>
        <img className="ui avatar image" src={`/img/profilePics/${contact.name}.png`} alt={contact.name}/>
        <div className="content">
          <div className="header">{contact.name}</div>
        </div>
      </div>);
    });
  };
  return <div className="ui big middle aligned divided selection list">{renderList()}</div>;
};

const mapStateToProps = state => {
  return {contacts: state.contacts};
};

export default connect(mapStateToProps, {onContactSelect})(ContactList);
