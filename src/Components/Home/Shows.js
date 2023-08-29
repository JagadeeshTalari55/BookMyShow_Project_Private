import React from "react";
import MovieCards from "./MovieCards";
import "./Shows.css";

const MoviesList = [
  {
    MovieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE2LjVLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-qfgbsaxudm-portrait.jpg",
    MovieName: "King Of Kotha",
    MovieCategory: "Action/Drama/Crime",
  },
  {
    MovieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OS42SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367150-xaabdbsawm-portrait.jpg",
    MovieName: "Ramachandra Boss and Co",
    MovieCategory: "Action/Comedy/Thriller",
  },
  {
    MovieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjIuNUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364397-vtjczctwmn-portrait.jpg",
    MovieName: "RDX",
    MovieCategory: "Action/Drama/Family",
  },
  {
    MovieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMTguNUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
    MovieName: "Jailer",
    MovieCategory: "Action/Drama/Thriller",
  },
  {
    MovieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTM2LjlLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
    MovieName: "Dream Girl 2",
    MovieCategory: "Comedy/Drama/Romantic",
  },
  {
    MovieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni42LzEwICA0LjZLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361640-cenlrrtbdu-portrait.jpg",
    MovieName: "Gandeevadhari Arjuna",
    MovieCategory: "Action/Thriller",
  },
  {
    MovieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICAyMzVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
    MovieName: "Gadar 2: The Katha Continues",
    MovieCategory: "Action/Drama/Period",
  },
  {
    MovieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjIuNUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364397-vtjczctwmn-portrait.jpg",
    MovieName: "RDX",
    MovieCategory: "Action/Drama/Family",
  },
  {
    MovieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjIuNUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364397-vtjczctwmn-portrait.jpg",
    MovieName: "RDX",
    MovieCategory: "Action/Drama/Family",
  },
  {
    MovieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjIuNUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364397-vtjczctwmn-portrait.jpg",
    MovieName: "RDX",
    MovieCategory: "Action/Drama/Family",
  },
];

function Shows() {
  return (
    <>
      <button
        className="movieBtn1"
        onClick={() => {
          document.getElementsByClassName("shows")[0].scrollLeft -= 200;
        }}
      >
        Prev
      </button>
      <div className="shows">
        {MoviesList.map((movie) => {
          return (
            <MovieCards
              img={movie.MovieimgLink}
              name={movie.MovieName}
              para={movie.MovieCategory}
            ></MovieCards>
          );
        })}
      </div>
      <button
        className="movieBtn2"
        onClick={() => {
          document.getElementsByClassName("shows")[0].scrollLeft += 200;
        }}
      >
        Next
      </button>
    </>
  );
}

export default Shows;
