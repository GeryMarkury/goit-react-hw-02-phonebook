import { Filter } from './Filter/Filter';

export const ContactsList = ({ contacts, value, changeFilter, onDeleteContact }) => (
<div>
    <Filter value={value} changeFilter={changeFilter} />
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);