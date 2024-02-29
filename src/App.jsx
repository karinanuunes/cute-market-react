import "./App.css";
import News from "./components/News";
import Menu from "./components/Menu";
import Emphasis from "./components/Emphasis";
import Card from "./components/Card";

function App() {
  return (
    <>
      <News />
      <Menu />
      <Emphasis />
      <div className="cards">
        <Card
          title="Everyday fresh & clean with our products"
          src="https://images.vexels.com/media/users/3/295123/isolated/lists/d95cb8b88f754d47800f01844fe0717a-legumes-de-banana-kawaii.png"
          alt="Banana Kawaii"
          classColor="green"
          classButtonColor="peach"
        />
        <Card
          title="Make your breakfast healthy and easy"
          src="https://images.vexels.com/media/users/3/295127/isolated/lists/fbb7a506340ecbfd3e2f61d5383c13f5-legumes-de-abacate-kawaii.png"
          alt="Abacate Kawaii"
          classColor="orange"
          classButtonColor="yellow"
        />
      </div>
    </>
  );
}

export default App;
