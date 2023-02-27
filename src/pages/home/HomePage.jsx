import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-page">
      <header>
        <h1>Home</h1>
      </header>
      <section className="home-page-options">
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/register">Register</Link>
        </button>
      </section>
    </div>
  );
}
