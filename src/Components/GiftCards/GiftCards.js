import React, { useState } from "react";
import Gcard from "./GCard";
import "./GiftCards.css";

const giftCards = [
  {
    id: 1,
    gift: "https://in.bmscdn.com/gv/gift_my_show_24102023031014_480x295.jpg",
    category: "Occasion",
  },
  {
    id: 2,
    gift: "https://in.bmscdn.com/gv/gift_my_show_24052023030554_480x295.jpg",
    category: "Festival",
  },
  {
    id: 3,
    gift: "https://in.bmscdn.com/gv/gift_my_show_02402022094010_480x295.jpg",
    category: "Generic",
  },
  {
    id: 4,
    gift: "https://in.bmscdn.com/gv/gift_my_show_02282022102856_480x295.jpg",
    category: "Generic",
  },
  {
    id: 5,
    gift: "https://in.bmscdn.com/gv/gift_my_show_02302022103011_480x295.jpg",
    category: "Generic",
  },
  {
    id: 6,
    gift: "https://in.bmscdn.com/gv/gift_my_show_02302022123034_480x295.jpg",
    category: "Generic",
  },
  {
    id: 7,
    gift: "https://in.bmscdn.com/gv/gift_my_show_02412022124146_480x295.jpg",
    category: "Generic",
  },
  {
    id: 8,
    gift: "https://in.bmscdn.com/gv/gift_my_show_02432022124329_480x295.jpg",
    category: "Generic",
  },
  {
    id: 9,
    gift: "https://in.bmscdn.com/gv/gift_my_show_02442022124437_480x295.jpg",
    category: "Generic",
  },

  {
    id: 10,
    gift: "https://in.bmscdn.com/gv/gift_my_show_02452022124540_480x295.jpg",
    category: "Generic",
  },

  {
    id: 11,
    gift: "https://in.bmscdn.com/gv/gift_my_show_02122022101208_480x295.jpg",
    category: "Generic",
  },

  {
    id: 12,
    gift: "https://in.bmscdn.com/gv/gift_my_show_25412019034153_480x295.jpg",
    category: "Generic",
  },
  {
    id: 13,
    gift: "https://in.bmscdn.com/gv/gift_my_show_27542019095448_480x295.jpg",
    category: "Generic",
  },

  {
    id: 14,
    gift: "https://in.bmscdn.com/gv/gift_my_show_27572019095730_480x295.jpg",
    category: "Generic",
  },

  {
    id: 15,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18532019025324_480x295.jpg",
    category: "Generic",
  },

  {
    id: 16,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18552019025553_480x295.jpg",
    category: "Occasion",
  },
  {
    id: 17,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18082019040833_480x295.jpg",
    category: "Occasion",
  },

  {
    id: 18,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18312019023126_480x295.jpg",
    category: "Occasion",
  },

  {
    id: 19,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18432019024353_480x295.jpg",
    category: "Occasion",
  },

  {
    id: 20,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18462019024648_480x295.jpg",
    category: "Occasion",
  },
  {
    id: 21,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18482019024856_480x295.jpg",
    category: "Occasion",
  },

  {
    id: 21,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18512019025105_480x295.jpg",
    category: "Generic",
  },

  {
    id: 22,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18572019025701_480x295.jpg",
    category: "Generic",
  },

  {
    id: 23,
    gift: "https://in.bmscdn.com/gv/gift_my_show_05542019115440_480x295.jpg",
    category: "Generic",
  },
  {
    id: 24,
    gift: "https://in.bmscdn.com/gv/gift_my_show_30332019123339_480x295.jpg",
    category: "Generic",
  },

  {
    id: 25,
    gift: "https://in.bmscdn.com/gv/gift_my_show_30222019022237_480x295.jpg",
    category: "Generic",
  },

  {
    id: 26,
    gift: "https://in.bmscdn.com/gv/gift_my_show_30192019031956_480x295.jpg",
    category: "Generic",
  },

  {
    id: 27,
    gift: "https://in.bmscdn.com/gv/gift_my_show_30482019034817_480x295.jpg",
    category: "Generic",
  },
  {
    id: 28,
    gift: "https://in.bmscdn.com/gv/gift_my_show_05572019115712_480x295.jpg",
    category: "Generic",
  },

  {
    id: 29,
    gift: "https://in.bmscdn.com/gv/gift_my_show_16092019040918_480x295.jpg",
    category: "Generic",
  },

  {
    id: 30,
    gift: "https://in.bmscdn.com/gv/gift_my_show_06532019115311_480x295.jpg",
    category: "Generic",
  },

  {
    id: 31,
    gift: "https://in.bmscdn.com/gv/gift_my_show_22202019042033_480x295.jpg",
    category: "Generic",
  },
  {
    id: 32,
    gift: "https://in.bmscdn.com/gv/gift_my_show_30162019031622_480x295.jpg",
    category: "Generic",
  },

  {
    id: 33,
    gift: "https://in.bmscdn.com/gv/gift_my_show_06572019115735_480x295.jpg",
    category: "Generic",
  },

  {
    id: 34,
    gift: "https://in-aps.bmscdn.com/gv/gift_my_show_04402020084029_480x295.jpg",
    category: "Generic",
  },

  {
    id: 35,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_the_beer_cafe_combo_20302018053047.jpg",
    category: "Combos",
  },
  {
    id: 36,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_tgi_fridays_combo_20042018040430.jpg",
    category: "Combos",
  },
  {
    id: 37,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_speciality_restaurants_combo_20342018043406.jpg",
    category: "Combos",
  },
  {
    id: 38,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_vero_moda_combo_08352018123514.jpg",
    category: "Combos",
  },
  {
    id: 39,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_levis_combo_07132022031353.jpg",
    category: "Combos",
  },
];

const initialSelected = [false, false, false, false, false];

function GiftCards() {
  const [giftCardsArray, setGiftCardsArray] = useState(giftCards);
  const [allSelectedOptions, setAllSelectedOptions] = useState(initialSelected);

  function handleClickSelected(index) {
    const newAllSelectedOptions = allSelectedOptions.map((ele, i) => {
      if (i == index) {
        return !ele;
      } else {
        return ele;
      }
    });
    setAllSelectedOptions(newAllSelectedOptions);
  }

  function newArray(text, index) {
    let newx = []
    allSelectedOptions.map((bol, i) => { 
    if(bol){
      newx = newx + giftCards.filter((x) => x.category === text);
    }
  })
    
    setGiftCardsArray(newx);
  }

  return (
    <div className="GiftCards">
      <div className="f-picture">
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692874595339_fdf.jpg"
          alt=""
          style={{ width: "95%", margin: "25px" }}
        />
        <p>Pick a card from one of our themes</p>
        <section className="btnsSection">
          <button
            className={allSelectedOptions[0] ? `btnTag btnTagActive` : `btnTag`}
            onClick={() => {
              handleClickSelected(0);
              setGiftCardsArray(giftCards);
            }}
          >
            All
          </button>
          <button
            className={allSelectedOptions[1] ? `btnTag btnTagActive` : `btnTag`}
            onClick={() => {
              handleClickSelected(1);
              newArray("Generic");
            }}
          >
            Generic
          </button>
          <button
            className={allSelectedOptions[2] ? `btnTag btnTagActive` : `btnTag`}
            onClick={() => {
              handleClickSelected(2);
              newArray("Occasion");
            }}
          >
            Occasion
          </button>
          <button
            className={allSelectedOptions[3] ? `btnTag btnTagActive` : `btnTag`}
            onClick={() => {
              handleClickSelected(3);
              newArray("Festival");
            }}
          >
            Festival
          </button>
          <button
            className={allSelectedOptions[4] ? `btnTag btnTagActive` : `btnTag`}
            onClick={() => {
              handleClickSelected(4);
              newArray("Combos");
            }}
          >
            Combos
          </button>
        </section>
      </div>
      <div className="f-row">
        {giftCardsArray.map((giftcd, i) => {
          return <Gcard key={i} gtcard={giftcd.gift}></Gcard>;
        })}
      </div>
    </div>
  );
}

export default GiftCards;
