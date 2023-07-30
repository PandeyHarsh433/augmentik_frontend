import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardGroup from "../components/CardGroup";

const Home = () => {
  const [heroData, setHeroData] = useState({});
  const [cardData, setCardData] = useState([]);

  const getHeroData = async () => {
    const response = await axios.get("http://localhost:8000/app/about");
    const data = await response.data;
    setHeroData(data);
  };

  const getCardData = async () => {
    const response = await axios.get("http://localhost:8000/cards");
    const data = await response.data;
    setCardData(data);
  };

  useEffect(() => {
    getHeroData();
    getCardData();
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero data={heroData} />
      <div className="pt-40 mb-40">
        <CardGroup data={cardData} />
      </div>
    </div>
  );
};

export default Home;
