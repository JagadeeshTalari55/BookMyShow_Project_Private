import "./BuyTickets.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiDeviceMobileLight } from "react-icons/pi";
import {
  AiFillHeart,
  // AiOutlineHeart,
  AiOutlineInfoCircle,
} from "react-icons/ai";

function BuyTickets({ movieTicketsArray, movieName }) {
  return (
    <div className="buyTicketsPage">
      <section className="MovieName">
        <div className="movieContentWrapper">
          <h1>{movieName}</h1>
          <article className="movieCategory">
            <button>Action</button>
            <button>Drama</button>
            <button>Thriller</button>
          </article>
        </div>
      </section>
      <section className="buyTicketsContent">
        <div className="buyTicketsWrapper">
          <h1>BuyTickets</h1>
          {/* <div className="icons"> */}
          {/* <AiOutlineHeart className="heart"></AiOutlineHeart> */}
          {/* AVAILABLE FAST FILLING LAN SUBTITLES LANGUAGE Asian CineSquare
              Multiplex: Uppal
            </div> */}
          {/* <div><div className="dotCircle greenDot"></div>AVAILABLE</div>
          <div><div className="dotCircle orangeDot"></div>FAST FILLING</div> */}
          {/* <div>LAN</div> */}
          {/* <div>SUBTITLES LANGUAGE</div> */}

          {/* Movie Theater is a component */}

          {/* <JawanTickets
            JawanHindi_2D_Theaters={movietheaters.JawanHindi_2D_Theaters}
          ></JawanTickets> */}
          {/* <JailerTickets
            JailerTelugu_2D_Theaters={movietheaters.JailerTelugu_2D_Theaters}
          ></JailerTickets> */}
          {movieTicketsArray.map((movie, i) => {
            return (
              <article key={i} className="movieTheater">
                <div className="movieTheaterContent">
                  <div>
                    <AiFillHeart className="heartSymbol"></AiFillHeart>
                  </div>

                  <div className="movieTheaterDetails">
                    <div className="movieTheaterName">
                      {movie.movieTheaterContent.TheaterName}
                    </div>
                    <div className="movieTheaterFacilities">
                      {movie.movieTheaterContent.TheaterFacilities.mTicket && (
                        <div className="mTicket">
                          <PiDeviceMobileLight className="movieFacilityIcon"></PiDeviceMobileLight>
                          <span>M-Ticket</span>
                        </div>
                      )}

                      {movie.movieTheaterContent.TheaterFacilities
                        .foodAndBeverages && (
                        <div className="foodBeverage">
                          <IoFastFoodOutline className="movieFacilityIcon"></IoFastFoodOutline>
                          <span>Food & Beverage</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <AiOutlineInfoCircle className="infoIcon"></AiOutlineInfoCircle>
                    <span>INFO</span>
                  </div>
                </div>

                <div className="movieTheaterTimingBtn-Section">
                  <div className="TheaterTimingBtns">
                    {movie.movieTheaterTiming.map((show, i) => {
                      return (
                        <button key={i}>
                          <div> {show.showTiming}</div>
                          {/* <div> {show.screenType}</div> */}
                          <span class="tooltiptext">
                            {show.tickets.map((showTimings, i) => {
                              return (
                                <div key={i}>
                                  <span>{showTimings.ticketPrice}</span>
                                  <span>{showTimings.class}</span>
                                  <span>Sold Out</span>
                                </div>
                              );
                            })}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="legend">
                    <div className="dotCircle yellowDot"></div>
                    {movie.cancellation ? (
                      <div>Cancellation Available</div>
                    ) : (
                      <div>Non-cancellable</div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default BuyTickets;
