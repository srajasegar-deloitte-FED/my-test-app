import "../styles/home.css";

function Home() {
  const friendPlays = [
    { id: 1, username: "vingdao_", rating: "★★★½" },
    { id: 2, username: "crank17_", rating: "★★★★" },
    { id: 3, username: "samuel", rating: "★★½" },
    { id: 4, username: "rh1176", rating: "★★★" },
    { id: 5, username: "sehajkaur", rating: "★★★★★" },
    { id: 6, username: "quang_ak47", rating: "★★★½" },
  ];
  const popularAmongFriends = [1, 2, 3, 4, 5, 6];
  return (
    <main className="home">
      <section className="home__greeting">
        <h1 className="home__greeting__message">
          Welcome back, <span className="home__username">sanjevanr_</span>.
          Here's what your friends have been playing recently...
        </h1>
      </section>

      <section className="home__section">
        <div className="home__section__header">
          <h2 className="home__section__title">NEW FROM FRIENDS</h2>
        </div>

        <div className="home__grid">
          {friendPlays.map((play) => (
            <div key={play.id} className="game__cover">
              <div className="game__cover__image"></div>
              <div className="game__cover__user">{play.username}</div>
              <div className="game__cover__rating">{play.rating}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="home__ad">
        <div className="ad__banner"></div>
      </section>

      <section className="popular__section">
        <div className="home__section__header">
          <h2 className="home__section__title">POPULAR AMONG FRIENDS</h2>
        </div>

        <div className="home__grid">
          {popularAmongFriends.map((item) => (
            <div key={item} className="game__cover">
              <div className="game__cover__image"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
