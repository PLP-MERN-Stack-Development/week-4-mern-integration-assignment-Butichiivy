function Home() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <header>
        <h1 id="main-heading">CHRONICARE</h1>
        <p>Empowering chronic disease management through integrated care.</p>
      </header>

      <section>
        <h2>Healthcare Provider</h2>
        <p id="status-text">Loading...</p>
        <button id="change-text-btn" className="animated-button">Request Records</button>
        <button id="secret-btn">Long Press Me</button>
      </section>

      <section>
        <h2>New Patient</h2>
        <button id="Register-btn">Register Patient</button>
        <button id="Cancel-btn">Cancel Registration</button>
        <div id="box"></div>
      </section>

      <section>
        <h2>Form Validation</h2>
        <form id="signup-form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <small id="email-feedback"></small>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required minLength="8" />
          <small id="password-feedback"></small>

          <label htmlFor="theme">Theme Color:</label>
          <select id="theme-selector">
            <option value="default">Default</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>© 2025 ChronicareLtd - Kenya</p>
      </footer>
    </div>
  );
}

export default Home;
