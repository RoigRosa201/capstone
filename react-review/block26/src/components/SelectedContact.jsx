export default function SelectedContact({ selectedContact, setSelectedContact }) {
  const { name, email, phone, address, company, username, website } = selectedContact
  return (
    <section>
      <p onClick={() => setSelectedContact(null)}>Go back to Contact List</p>
      <h1>Selected Contact</h1>
      <h2>Name: {name}</h2>
      <h3>Email: <a href={`mailto:${email}`}>{email}</a></h3>
      <h3>Phone: <a href={`tel:${phone}`}>{phone}</a></h3>
      <h3>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</h3>
      <h3>Company: {company.name}</h3>
      <h3>Website: <a href={website}>{website}</a></h3>
    </section>
  )
}