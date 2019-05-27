import {combineReducers} from 'redux';

const contactListReducer = () => {
  return [
    {
      name: 'Oliver',
      phone: '+1 212-233-6211',
      email: 'oliver@mail.com',
      pic: 'Oliver.png'
    }, {
      name: 'Leo',
      phone: '+1 212-233-6222',
      email: 'leo@mail.com',
      pic: 'Leo.png'
    }, {
      name: 'Charlie',
      phone: '+1 212-233-6233',
      email: 'charlie@mail.com',
      pic: 'Charlie.png'
    }, {
      name: 'Luna',
      phone: '+1 212-233-6244',
      email: 'luna@mail.com',
      pic: 'Luna.png'
    }, {
      name: 'Chloe',
      phone: '+1 212-233-6255',
      email: 'chloe@mail.com',
      pic: 'Chloe.png'
    }, {
      name: 'Bella',
      phone: '+1 212-233-6266',
      email: 'bella@mail.com',
      pic: 'Bella.png'
    }
  ];
};

const selectedContactReducer = (selectedContact = contactListReducer()[0], action) => {
  if (action.type === 'SELECT_CONTACT') {
    return action.payload;
  }
  return selectedContact;
};

export default combineReducers({contacts: contactListReducer, selectedContact: selectedContactReducer});
