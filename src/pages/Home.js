function Home() {
  <main className="home">
    <section className="home__greeting">
      <h1 className="home__greeting__message">
        Welcome back, <span className="home__username">sanjevanr_</span>. Here's what your friends have been playing recently...
      </h1>
    </section>

    <section className="home__section"> 
      <div className="home__section__header">
        <h2 className="home__section__title">New from Friends</h2>
      </div>

      <div className="home__grid">
        <div key={item} className="game_cover">
          <div className="game_cover__image"></div>
          <div className="game_cover__user"></div>
          <div className="game_cover__rating"></div>
        </div>
      </div>
    </section>
  </main>
}

export default Home;
