import ContactRow from "./ContactRow";

export default function ContactList({ contacts, setSelectedContact }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contacts</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map(contact => <ContactRow key={contact.id} contact={contact} setSelectedContact={setSelectedContact} />)
        }
      </tbody>
    </table>
  )
}