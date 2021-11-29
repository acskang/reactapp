import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const RandomBeer = () => {
  const [name, setName] = useState(0);
  const [volumeValue, setVolumeValue] = useState(0);
  const [volumeUnit, setVolumeUnit] = useState(0);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(results => results.json())
      .then(data => {
        setName(data[0].name);
        const { volume } = data[0];
        setVolumeValue(volume.value);
        setVolumeUnit(volume.unit);
      });
  }, []); // this [] prevents data being fetched over and over again

  return (
    <div>
      {name}: {volumeValue} {volumeUnit}
    </div>
  );
};

export default RandomBeer;
