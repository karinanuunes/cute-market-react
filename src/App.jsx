import "./App.css";
import News from "./components/News";
import Menu from "./components/Menu";
import Emphasis from "./components/Emphasis";
import Card from "./components/Card";
import ListsProducts from "./components/ListsProducts";

function App() {
  return (
    <>
      <News />
      <Menu />
      <Emphasis />
      <div className="cards">
        <Card
          title="Everyday fresh & clean with our products"
          src="https://images.vexels.com/media/users/3/295125/isolated/lists/18401bc1719a282a86a582639cfb4df9-bagas-frutas-kawaii.png"
          alt="Kawaii Grapes"
          classColor="blue"
          classButtonColor="yellow"
        />
        <Card
          title="Make your breakfast healthy and easy"
          src="https://images.vexels.com/media/users/3/295123/isolated/lists/d95cb8b88f754d47800f01844fe0717a-legumes-de-banana-kawaii.png"
          alt="Kawaii Banana"
          classColor="orange"
          classButtonColor="purple"
        />
      </div>
      <ListsProducts />
    </>
  );
}

export default App;
