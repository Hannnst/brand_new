import React, { useState } from 'react';
import './style.css';

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
  const access_key = '81576e1d5392a99806d7bc17e927f7e7';
  const fullURL =
    'http://www.apilayer.net/api/live?access_key=81576e1d5392a99806d7bc17e927f7e7';
    const testURL = 'http://www.apilayer.net/api/live?access_key=81576e1d5392a99806d7bc17e927f7e7'
  const [data, setData] = useState('');
  const URL = `https://api.currencylayer.com/convert ? access_key=${access_key} & from = GBP & to = USD & amount = 10`;

  /*fetch(URL)
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch((error) => console.log(error));*/

  fetch(testURL)
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  return (
    <div>
      <div>{data}</div>
    </div>
  );
}
export default App;
