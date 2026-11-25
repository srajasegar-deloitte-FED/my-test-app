import "../styles/profile.css";

function Profile() {
  return (
    <main className="profile">
      <section className="profile__header"></section>

      <section className="profile__navigation"></section>

      <section className="profile__content">
        <div className="profile__main">
          <section className="profile__favourites"></section>
          <section className="profile__activity"></section>
        </div>

        <aside className="profile__sidebar">
          <section className="profile__advertisement"></section>
          <section className="profile__diary"></section>
        </aside>
      </section>
    </main>
  );
}

export default Profile;
