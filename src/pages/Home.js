function Home() {
  const friendPlays = [1, 2, 3, 4, 5, 6];
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
          {friendPlays.map((item) => (
            <div key={item} className="game__cover">
              <div className="game__cover__image"></div>
              <div className="game__cover__user">vingdao_</div>
              <div className="game__cover__rating">★★★½</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
