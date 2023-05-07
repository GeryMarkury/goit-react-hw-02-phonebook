export const NameForm = ({ name, handleNameChange, onAddContact }) => (
    <form>
        <label>Name <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleNameChange}
        required
        /></label>
        <button type="button" onClick={onAddContact}>Add contact</button>
    </form> 
)
    
   
