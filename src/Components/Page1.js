import React, { useState } from "react";
import "./Page1.css";

let initialSelected = [false, false, false, false, false];

function Page1() {
  const [giftCardsArray, setGiftCardsArray] = useState("");
  const [selected, setSelected] = useState(initialSelected);

  function handleIncrementClick(index) {
    const nextSelected = selected.map((e, i) => {
      if (i === index) {
        // Increment the clicked counter
        return !e;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    setSelected(nextSelected);
  }
  return (
    <div>
      <section className="btnsSection">
        <button
          className={selected[0] ? `btnTag btnTagActive` : `btnTag`}
          onClick={() => {
            handleIncrementClick(0);
            setGiftCardsArray("giftCards");
          }}
        >
          All
        </button>
        <button
          className={selected[1] ? `btnTag btnTagActive` : `btnTag`}
          onClick={() => {
            handleIncrementClick(1);
            setGiftCardsArray("giftCards");
          }}
        >
          Generic
        </button>
        <button
          className={selected[2] ? `btnTag btnTagActive` : `btnTag`}
          onClick={() => {
            handleIncrementClick(2);
            setGiftCardsArray("giftCards");
          }}
        >
          Occasion
        </button>
        <button
          className={selected[3] ? `btnTag btnTagActive` : `btnTag`}
          onClick={() => {
            handleIncrementClick(3);
            setGiftCardsArray("giftCards");
          }}
        >
          Festival
        </button>

        <button
          className={selected[4] ? `btnTag btnTagActive` : `btnTag`}
          onClick={() => {
            handleIncrementClick(4);
            setGiftCardsArray("giftCards");
          }}
        >
          Combos
        </button>
      </section>
    </div>
  );
}

export default Page1;
