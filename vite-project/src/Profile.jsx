function Profile() {
  const name = "Michael";
  const image = "https://placekitten.com/200/200";
  const email = "gatorpazz@gmail.com"
  return (
    <div>
      <p>{name}</p>
      <img src={image} />
      <p><a href={`mailto:${email}`}>email</a></p>
    </div>
  )
}

export default Profile;