import "../styles/profile.css";

function Profile() {
  return (
    <main className="profile">
      <section className="profile__header">
        <div className="profile__user">
          <div className="profile__avatar"></div>

          <div className="profile__info">
            <h1 className="profile__username">sanjevanr_</h1>
            <p className="profile__bio">sanjevan plays games before GTA VI</p>
          </div>
        </div>

        <div className="profile__stats">
          <div className="profile__stat">Games</div>
          <div className="profile__stat">This Year</div>
          <div className="profile__stat">Following</div>
          <div className="profile__stat">Followers</div>
        </div>
      </section>

      <section className="profile__navigation">
        <nav className="profile__nav">
          <ul className="profile__nav__list">
            <li>Profile</li>
            <li>Activity</li>
            <li>Games</li>
            <li>Diary</li>
            <li>Reviews</li>
            <li>Watchlist</li>
            <li>Likes</li>
            <li>Network</li>
          </ul>
        </nav>
      </section>

      <section className="profile__content">
        <div className="profile__main">
          <section className="profile__favourites">
            <h2>Favourite Games</h2>
          </section>
          <section className="profile__activity">
            <h2>Recent Activity</h2>
          </section>
        </div>

        <aside className="profile__sidebar">
          <section className="profile__advertisement"></section>
          <section className="profile__diary">
            <h2>Diary</h2>
          </section>
        </aside>
      </section>
    </main>
  );
}

export default Profile;
