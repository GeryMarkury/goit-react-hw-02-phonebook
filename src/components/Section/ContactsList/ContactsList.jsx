import { Filter } from './Filter/Filter';

export const ContactsList = ({ contacts, value, changeFilter }) => (
    <div>
        <Filter value={value} changeFilter={changeFilter}></Filter>
        <ul>
        {contacts.map(({ id, name, number }) => <li key={id}>{name}: {number}</li>)}
        </ul>
    </div>
);