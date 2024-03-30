import News from "../../components/News";
import Menu from "../../components/Menu";
import Delivery from "../../components/Delivery";
import Footer from "../../components/Footer/footer";

const DeliveryPage = () => {
  return (
    <>
      <News />
      <Menu />
      <Delivery
        title="We ship on the following day from 10:00 AM to 08:00 PM"
        src="https://images.vexels.com/media/users/3/199964/isolated/lists/ae782cab8ae7e722febb5869c09574cc-personagem-de-entregador-feliz.png"
      />
      <Footer />
    </>
  );
};

export default DeliveryPage;
