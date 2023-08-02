import React, { useState, useEffect } from "react";
import { useStateValue } from "../State/StateProvider";
import { useParams } from "react-router-dom";
import Button from "../Components/Button";
import CardList from "../Components/CardList";
import SmallCard from "../Components/SmallCard";
import BottomBanner from "../Components/BottomBanner";

const Product = () => {
  const { category, identifyer } = useParams();
  const [initialState] = useStateValue();
  const value = initialState[category];
  const [buttonFiilter, setButtonFilter] = useState("");
  const [product, setProduct] = useState();

  useEffect(() => {
    if (identifyer) {
      const filtered = initialState.products.filter(
        (p) => p._id === identifyer
      );
      setProduct(...filtered);
    }
    setButtonFilter("");
  }, [category, initialState.products, identifyer]);

  return (
    <div className="h-fit w-screen">
      {!identifyer ? (
        <>
          <div className="h-fit w-full bg-slate-800 text-white p-10">
            <h1 className="font-bold text-4xl my-10">{value.title}</h1>
            <p className="text-lg leading-7 text-left ">{value.desc}</p>
          </div>
          <div className="mt-5 h-fit w-fit">
            <div className="overflow-x-scroll">
              <div className="flex h-fit w-full justify-around items-center overflow-x-scroll m-5">
                {value.sub.map((s) => {
                  return <Button text={s} click={setButtonFilter} />;
                })}
              </div>
            </div>

            <CardList category={category} subcategory={buttonFiilter} />
          </div>
        </>
      ) : (
        <div className="w-screen h-fit">
          <div className="h-fit w-full bg-slate-800 text-white p-10 mb-5">
            <h1 className="font-bold text-4xl my-10">{product?.name}</h1>
            <p className="text-lg leading-7 text-left ">{product?.desc}</p>
          </div>
          <h1 className="font-bold text-3xl m-5">Reviews</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {product?.reviews?.map((r) => {
              return <SmallCard name={r.name} desc={r.review} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
