function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>Hub for all things academia 📖</h1>

        <p>
          Simple Studies helps students
          organize and manage study resources.
        </p>

        <input
          type="text"
          placeholder="Search resources..."
        />

        <button>Search</button>
      </div>

      <div className="hero-image">
        <img
          src="https://via.placeholder.com/200"
          alt="study"
        />
      </div>

    </section>
  )
}

export default Hero