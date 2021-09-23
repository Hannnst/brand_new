import React, { useState } from 'react';
import './style.css';

function Converter(props) {
  // props will say true if we convert to USD, or false if we convert to EUR
  const [convertedAmount, setConverted] = useState(0);

  useEffect(() => {}, [props.test]);

  const convert = () => {
    if (props.conversion === true) {
      setConverted(props.amount * props.eur);
    } else {
      setConverted(props.amount * props.usd);
    }
  };

  console.log(props);
  return (
    <div>
      <div>{convertedAmount}</div>
    </div>
  );
}
export default Converter;
