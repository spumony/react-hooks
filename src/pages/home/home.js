import React from 'react';
import Search from "../../components/search/search";
import Card from "../../components/card/card";

const Home = () => {
  const cards = new Array(15)
    .fill('')
    .map((_, idx) => idx)

  return (
    <>
      <Search />

      <div className="row">

        {cards.map(card => {
          return (
            <div className="col-sm-4 mb-4" key={card}>
              <Card />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Home;
