import React from "react";
import Card from "./Card";

export default function CardGroup({ data }) {
  return (
    <>
      <section className="cards-wrapper">
        {data &&
          Array.isArray(data) &&
          data.map((card) => <Card key={card.cardNum} {...card} />)}
      </section>
    </>
  );
}
