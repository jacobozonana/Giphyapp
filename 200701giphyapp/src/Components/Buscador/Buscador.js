import React, { useState, useEffect } from "react";
import axios from "axios";

function Buscador() {
  const [gif, setGif] = useState(``);
  const[toFind, setToFind] = useState(`giphy`);
  useEffect(() => {
   console.log(`Hubo un cambio`)
   getGif()

      },[toFind])
    
  const APY_KEY = "iJ3SDO5dmn9ZxFNfv5HiESnNX58aMJLG";

  const getGif = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&q=${toFind}&limit=5`
      )
      .then((response) => {
        let r = response.data.data[0].images.downsized_large.url;
        console.log(r);
        setGif(r);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <input
        placeholder="Busca un gif"
        onChange={(event) => {
          setToFind(event.target.value)
        }}
      />
      {/* <button onClick={getGif}>Busca un Gif</button> */}
      <img src={gif} alt="Gif" />
    </div>
  );
}

export default Buscador;
