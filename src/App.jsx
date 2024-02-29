import "./App.css";
import News from "./components/News";
import Menu from "./components/Menu";
import Emphasis from "./components/Emphasis";
import Card from "./components/Card";
import Product from "./components/Product";
import list from "../src/components/Product/list.json";
import SubTitle from "./components/Subtitle";
import Button from "./components/Button";

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
      <div className="subtitle-products">
        <SubTitle subtitle="Farm fresh products" />
        <div className="products-sessions">
          <Button text="All Products" className="pink" />
          <Button text="Fruits" className="transparent" />
          <Button text="Vegetables" className="transparent" />
          <Button text="Bakery" className="transparent" />
          <Button text="Milk" className="transparent" />
        </div>
      </div>
      <div className="products">
        {list.map((item, index) => (
          <Product
            key={index}
            highlight={item.highlight}
            src={item.src}
            title={item.title}
            stars={item.stars}
            session={item.session}
            price={item.price}
            classColor={item.classColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
