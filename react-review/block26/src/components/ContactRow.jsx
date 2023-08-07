export default function ContactRow({ contact, setSelectedContact }) {
  const { name, email, phone } = contact
  return (
    <tr onClick={() => setSelectedContact(contact)}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  )
}