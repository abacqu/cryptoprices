import { useState, useEffect } from 'react';

const Price = (props) => {
  // Our api key from coinapi.io
  const apiKey = "A349203B-8E0E-4AE0-9807-E2F7132AE227";
  // Grabbing the Currency symbol from the URL Param
  const symbol = props.match.params.symbol;
  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data once received from the API
  const [coin, setCoin] = useState(null);

  //function to fetch coin data via ajax which uses js to make http request
  const getCoin = async () => {
    const response = await fetch(url);  // get data from api
    const data = await response.json(); // conver json data into js
    setCoin(data);
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading();
};

export default Price;