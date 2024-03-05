import SubTitle from "../Subtitle";
import Button from "../Button";
import Product from "../Product";
import list from "../Product/list.json";
import { useState } from "react";

const ListsProducts = () => {
  const [products, setProducts] = useState(list);

  const filterSession = (session) => {
    if (session === "All Products") {
      setProducts(list);
    } else {
      const filteredProducts = list.filter((item) => item.session === session);
      setProducts(filteredProducts);
    }
  };

  const [shopping, setShopping] = useState(0);

  const handleShopping = () => {
    setShopping(shopping + 1);
    console.log("Clicou: " + shopping);
  };

  return (
    <>
      <div className="subtitle-products">
        <SubTitle subtitle="🥗Farm fresh products" />
        <div className="products-sessions">
          <Button
            text="All Products"
            className="pink"
            onClick={() => filterSession("All Products")}
          />
          <Button
            text="Fruits"
            className="transparent"
            onClick={() => filterSession("Fruits")}
          />
          <Button
            text="Vegetables"
            className="transparent"
            onClick={() => filterSession("Vegetables")}
          />
          <Button
            text="Bakery"
            className="transparent"
            onClick={() => filterSession("Bakery")}
          />
          <Button
            text="Milk"
            className="transparent"
            onClick={() => filterSession("Milk")}
          />
        </div>
      </div>
      <div className="products">
        {products.map((item, index) => (
          <Product
            key={index}
            highlight={item.highlight}
            src={item.src}
            title={item.title}
            stars={item.stars}
            session={item.session}
            price={item.price}
            classColor={item.classColor}
            handleShopping={handleShopping}
          />
        ))}
      </div>
    </>
  );
};

export default ListsProducts;
