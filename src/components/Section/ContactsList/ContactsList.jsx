export const ContactsList = ({contacts}) => (
    <ul>
        {contacts.map(({ id, name }) => <li key={id}>{ name }</li>)}
  </ul>
);