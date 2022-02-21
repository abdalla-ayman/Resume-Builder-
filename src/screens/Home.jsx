import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid page d-flex flex-column justify-content-center align-items-center">
      <h1>Resume Builder</h1>
      <h2>Make Your Resume For Free</h2>
      <Link className="btn btn-warning" to="/build">
        Start Now
      </Link>
    </div>
  );
}

export default Home;
