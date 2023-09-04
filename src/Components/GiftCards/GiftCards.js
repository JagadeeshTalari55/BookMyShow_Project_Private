import React, { useState } from "react";
import Gcard from "./GCard";
import "./GiftCards.css";

// const giftCards = [
//   {
//     id: 1,
//     gift: "https://in.bmscdn.com/gv/gift_my_show_24102023031014_480x295.jpg",
//     category: "generic",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_24052023030554_480x295.jpg",
//     catgegory: "festival",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_02402022094010_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_02282022102856_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_02302022103011_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_02302022123034_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_02412022124146_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_02432022124329_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_02442022124437_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_02452022124540_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_02122022101208_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_25412019034153_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_27542019095448_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_27572019095730_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_18532019025324_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_18552019025553_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_18082019040833_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_18312019023126_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_18432019024353_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_18462019024648_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_18482019024856_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_18512019025105_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_18572019025701_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_05542019115440_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_30332019123339_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_30222019022237_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_30192019031956_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_30482019034817_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_05572019115712_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_16092019040918_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_06532019115311_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_22202019042033_480x295.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_30162019031622_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/gv/gift_my_show_06572019115735_480x295.jpg",
//   },

//   {
//     gift: "https://in-aps.bmscdn.com/gv/gift_my_show_04402020084029_480x295.jpg",
//   },

//   {
//     gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_the_beer_cafe_combo_20302018053047.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_tgi_fridays_combo_20042018040430.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_speciality_restaurants_combo_20342018043406.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_vero_moda_combo_08352018123514.jpg",
//   },
//   {
//     gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_levis_combo_07132022031353.jpg",
//   },
// ];

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
    category: "Generic",
  },
  {
    id: 17,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18082019040833_480x295.jpg",
    category: "Generic",
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
    id: 22,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18512019025105_480x295.jpg",
    category: "Occasion",
  },
  {
    id: 23,
    gift: "https://in.bmscdn.com/gv/gift_my_show_18572019025701_480x295.jpg",
    category: "Occasion",
  },
  {
    id: 24,
    gift: "https://in.bmscdn.com/gv/gift_my_show_05542019115440_480x295.jpg",
    category: "Generic",
  },
  {
    id: 25,
    gift: "https://in.bmscdn.com/vouchagram/combo/titan_and_bms_combo_08122018011247.jpg",
    category: "combos",
  },
  {
    id: 26,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_vero_moda_combo_08332018123316.jpg",
    category: "combos",
  },
  {
    id: 27,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_kfc_combo_20392018043903.jpg",
    category: "combos",
  },
  {
    id: 28,
    gift: "https://in.bmscdn.com/vouchagram/combo/peter_england_and_bms_combo_08112018011115.jpg",
    category: "combos",
  },
  {
    id: 29,
    gift: "https://in.bmscdn.com/vouchagram/combo/louis_philippe_and_bms_combo_08072018010721.jpg",
    category: "combos",
  },
  {
    id: 30,
    gift: "https://in.bmscdn.com/vouchagram/combo/fastrack_&_bms_combo_08022018010244.jpg",
    category: "combos",
  },
  {
    id: 31,
    gift: "https://in.bmscdn.com/vouchagram/combo/allen_solly_and_bms_combo_08572018125726.jpg",
    category: "combos",
  },
  {
    id: 32,
    gift: "https://in.bmscdn.com/vouchagram/combo/hidesign_and_bms_combo_08552018125551.jpg",
    category: "combos",
  },
  {
    id: 33,
    gift: "https://in.bmscdn.com/gv/gift_my_show_30162019031622_480x295.jpg",
    category: "occasion",
  },
  {
    id: 34,
    gift: "https://in.bmscdn.com/vouchagram/combo/bata_and_bms_combo_08152018011512.jpg",
    category: "combos",
  },
  {
    id: 35,
    gift: "https://in.bmscdn.com/vouchagram/combo/united_colors_of_benetton_and_bms_combo_08432018124326.jpg",
    category: "combos",
  },
  {
    id: 36,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_the_beer_cafe_combo_20302018053047.jpg",
    category: "combos",
  },
  {
    id: 37,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_tgi_fridays_combo_20042018040430.jpg",
    category: "combos",
  },
  {
    id: 38,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_speciality_restaurants_combo_20342018043406.jpg",
    category: "combos",
  },
  {
    id: 39,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_vero_moda_combo_08352018123514.jpg",
    category: "combos",
  },
  {
    id: 40,
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_levis_combo_07132022031353.jpg",
    category: "combos",
  },
];

function GiftCards() {
  const [activeBtn, setActiveBtn] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const [newGiftCardsArray, setNewGiftCardsArray] = useState(giftCards);

  function mulitpleStates(index) {
    // activeBtn = [ false, false, false, false, false ]
    const newActiveBtn = activeBtn.map((ele, i) => {
      //ele = false
      //i = 3
      //index = 3
      if (index === i) {
        return !ele; //ele = true
      }
      return false;
    });
    console.log(`NewActiveBtn : ${newActiveBtn}`); //newActiveBtn = [true, false, ]
    setActiveBtn(newActiveBtn);
  }

  function filterFunction(x) {
    // x = "Generic"
    const a = giftCards.filter((ele) => ele.category == x);

    setNewGiftCardsArray(a);
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

        <section className="btns-Section">
          <button
            className={
              activeBtn[0] ? `giftCardBtns giftBtnActive` : `giftCardBtns  `
            }
            onClick={() => {
              mulitpleStates(0); //btn active or not
              setNewGiftCardsArray(giftCards);
            }}
          >
            All
          </button>
          <button
            className={
              activeBtn[1] ? `giftCardBtns giftBtnActive` : `giftCardBtns  `
            }
            onClick={() => {
              mulitpleStates(1);
              filterFunction("Generic");
            }}
          >
            Generic
          </button>
          <button
            className={
              activeBtn[2] ? `giftCardBtns giftBtnActive` : `giftCardBtns  `
            }
            onClick={() => {
              mulitpleStates(2);
              filterFunction("Occasion");
            }}
          >
            Occasion
          </button>
          <button
            className={
              activeBtn[3] ? `giftCardBtns giftBtnActive` : `giftCardBtns  `
            }
            onClick={() => {
              mulitpleStates(3);
              filterFunction("Festival");
            }}
          >
            Festival
          </button>
          <button
            className={
              activeBtn[4] ? `giftCardBtns giftBtnActive` : `giftCardBtns  `
            }
            onClick={() => {
              mulitpleStates(4);
              filterFunction("combos");
            }}
          >
            Combos
          </button>
        </section>
      </div>
      <div className="f-row">
        {newGiftCardsArray.map((giftcd) => {
          return <Gcard gtcard={giftcd.gift}></Gcard>;
        })}
      </div>
    </div>
  );
}

export default GiftCards;
