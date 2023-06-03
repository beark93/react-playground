import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Link to={"/card-game"}>
        <div class="icon"></div>
      </Link>
    </>
  );
};

export default Home;