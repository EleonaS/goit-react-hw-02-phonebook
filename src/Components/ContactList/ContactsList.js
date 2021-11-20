import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledList,
  ListItem,
  Button,
} from './ContactsList.styled';

const ContactsList = ({
  contacts,
  onDeleteContact,
}) => (
  <StyledList>
    {contacts.map(
      ({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button
            type="button"
            id={id}
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </Button>
        </ListItem>
      ),
    )}
  </StyledList>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  //onClick: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func,
};

export { ContactsList };
