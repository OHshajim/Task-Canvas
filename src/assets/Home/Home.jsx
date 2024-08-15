import Canvas from "../Components/Canvas";
import Nav from "../Components/Nav";

const Home = () => {

  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-5">
        <Canvas />
      </div>
    </div>
  );
};
export default Home;
