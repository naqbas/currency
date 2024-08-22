import { useRef, useState } from "react"
import Block from "./views/Block"
import { useEffect } from "react";

function App() {
  
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KZT");
  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(0);
  const dataRef = useRef({});

  function onChangeFromValue(value) {
    const result = (value / dataRef.current[fromCurrency]["value"]) * dataRef.current[toCurrency]["value"];

    setToValue(result.toFixed(2));
    setFromValue(value);
  }

  function onChangeToValue(value) {
    const result = value * (dataRef.current[fromCurrency]["value"] / dataRef.current[toCurrency]["value"]);

    setFromValue(result.toFixed(2));
    setToValue(value);
  }

  useEffect(() => {
    fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_TCT1QmjqPjCKvC7Q9J9oJFoB9WoLGUPSk3OKaWE4")
      .then((res) => res.json())
      .then((json) => {
        dataRef.current = json.data;
        onChangeFromValue(1);
      })
      .catch(err => {
        console.error(`Error: ${err}`);
      })
  }, []);

  useEffect(() => {
    if(Object.keys(dataRef.current).length > 0) {
      onChangeToValue(toValue);
    }
  }, [fromCurrency]);

  useEffect(() => {
    if(Object.keys(dataRef.current).length > 0) {
      onChangeFromValue(fromValue);
    }
  }, [toCurrency]);


  return (
    <main className="text-green font-bold text-lg flex my-0 mx-auto bg-green items-center flex-wrap h-[100vh] max-w-[1024px]">
      <Block value={Number(fromValue)} 
        currency={fromCurrency} 
        onChangeValue={onChangeFromValue} 
        onChangeCurrency={setFromCurrency}
      />
      <Block value={Number(toValue)} 
        currency={toCurrency} 
        onChangeValue={onChangeToValue} 
        onChangeCurrency={setToCurrency} 
      />
    </main>
  )
}

export default App
