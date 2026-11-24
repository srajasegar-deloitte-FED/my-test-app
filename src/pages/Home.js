import "../styles/home.css";
import advertisement from "../assets/images/advertisement.webp";
import botw from "../assets/images/botw.webp";
import gta6 from "../assets/images/gta-6.webp";
import residentEvil from "../assets/images/resident_evil.webp";
import spiderman2 from "../assets/images/spiderman_2.webp";
import wolverine from "../assets/images/wolverine.webp";
import zelda from "../assets/images/zelda.webp";

function Home() {
  const friendPlays = [
    { id: 1, username: "vingdao_", rating: "★★★★½", image: zelda },
    { id: 2, username: "crank17_", rating: "★★★★", image: gta6 },
    { id: 3, username: "samuel", rating: "★★★½", image: residentEvil },
    { id: 4, username: "rh1176", rating: "★★★★★", image: gta6 },
    { id: 5, username: "sehajkaur", rating: "★★★", image: wolverine },
    { id: 6, username: "quang_ak47", rating: "★★★★★", image: zelda },
  ];
  const popularAmongFriends = [
    { id: 1, image: zelda },
    { id: 2, image: spiderman2 },
    { id: 3, image: residentEvil },
    { id: 4, image: gta6 },
    { id: 5, image: botw },
    { id: 6, image: wolverine },
  ];
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
              <img
                className="game__cover__image"
                src={play.image}
                alt={play.username}
              />
              <div className="game__cover__user">{play.username}</div>
              <div className="game__cover__rating">{play.rating}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="home__ad">
        <img
          className="ad__banner"
          src={advertisement}
          alt="Advertisement"
        />
      </section>

      <section className="popular__section">
        <div className="home__section__header">
          <h2 className="home__section__title">POPULAR AMONG FRIENDS</h2>
        </div>

        <div className="home__grid">
          {popularAmongFriends.map((item) => (
              <img
                className="game__cover__image"
                src={item.image}
                alt="Popular game"
              />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
