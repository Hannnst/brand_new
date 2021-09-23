import React, { useState } from 'react';
import './style.css';
import Converter from './Converter.js';

// Create a euro to dollar (and viceversa) convertor. It needs to take the input from one component and then render the converted value from a child component.

// It is up to you which component does the actual conversion...

// Extra:
// - Use an external API to get real exchanges rates, you can use this one: https://currencylayer.com/
// (they will ask you to register and will give you a free plan and an api key)

// > Use js fetch to get the data from the API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// ```
// fetch(`http://www.apilayer.net/api/live?access_key=${your_api_key_here}`)
// .then( res => res.json())
// .then( response => console.log(response))
// .catch( error => console.log(error))
// ```
// > In case of errors about CORS , check this link : https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

function App() {
  let exampleData = {
    success: true,
    terms: 'https://currencylayer.com/terms',
    privacy: 'https://currencylayer.com/privacy',
    timestamp: 1632384544,
    source: 'USD',
    quotes: { USDUSD: 1, USDEUR: 0.85357 },
  };
  const access_key = '81576e1d5392a99806d7bc17e927f7e7';
  const fullURL =
    'http://api.currencylayer.com/live?access_key=81576e1d5392a99806d7bc17e927f7e7&currencies=USD,EUR';
  const testURL =
    'http://www.apilayer.net/api/live?access_key=81576e1d5392a99806d7bc17e927f7e7';
  const URL = `http://www.apilayer.net/api/live? access_key=${access_key} &currencies=USD,EUR`;
  //const [data, setData] = useState(exampleData);

  /*fetch(URL)
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch((error) => console.log(error));*/

  console.log(exampleData);
  return (
    <div>
      <div>Welcome to converter</div>
      <div>Welcome to converter</div>
      <Converter />
    </div>
  );
}
export default App;
