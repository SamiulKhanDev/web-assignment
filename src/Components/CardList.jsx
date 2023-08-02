import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { useStateValue } from "../State/StateProvider";
const CardList = ({ category, subcategory }) => {
  const [{ products }] = useStateValue();
  const [value, setValue] = useState(products);

  useEffect(() => {
    setValue(() => [...products]);
  }, [products]);

  useEffect(() => {
    if (category) {
      const filteredProducts = products?.filter((p) => {
        if (
          p.category.trim().split(" ").join("").toLowerCase() === category &&
          (!subcategory || p.subcategory === subcategory)
        )
          return true;
      });

      setValue(filteredProducts);
    }
  }, [products, category, subcategory]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {value.map((p) => {
        return (
          <Card
            id={p._id}
            name={p.name}
            desc={p.desc}
            price={p.price}
            discount={p.discount}
            currentPrice={p.currentPrice}
            category={p.category.trim().split(" ").join("").toLowerCase()}
          />
        );
      })}
    </div>
  );
};

export default CardList;
