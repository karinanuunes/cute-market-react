import "../../App.css";
import News from "../../components/News";
import Menu from "../../components/Menu";
import Emphasis from "../../components/Emphasis";
import Card from "../../components/Card";
import ListsProducts from "../../components/ListsProducts";
import Delivery from "../../components/Delivery";
import Footer from "../../components/Footer/footer";

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
      <Delivery
        title="We ship on the following day from 10:00 AM to 08:00 PM"
        src="https://images.vexels.com/media/users/3/199964/isolated/lists/ae782cab8ae7e722febb5869c09574cc-personagem-de-entregador-feliz.png"
      />
      <Footer />
    </>
  );
}

export default App;
