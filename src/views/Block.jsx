import PropTypes from "prop-types";


function Block({ value, currency, onChangeValue, onChangeCurrency }) {

  const defaultCurrency = ["KZT", "RUB", "USD"];
  const currencyStyle = "p-2 border-r-2 border-l-2 border-white cursor-pointer ";

  return (
    <section className="w-[50%] p-4 sm:w-full">
      <nav className="flex justify-evenly flex-wrap border-2 border-white rounded-t-lg">
        {
          defaultCurrency.map((cur) => (
            <article key={cur} 
              onClick={() => onChangeCurrency(cur)} 
              className={currency === cur ?  
                (currencyStyle + "bg-white") 
                : 
                (currencyStyle + "text-white")
              }
            >
              {cur}
            </article>
          ))
        }
      </nav>
      <input type="number"
        value={value} 
        onChange={(event) => onChangeValue(event.target.value)}
        placeholder="0" 
        className="w-full h-12 p-2 border-2 border-white rounded-b-lg overflow-scroll" 
      />
    </section>
  )
}

Block.propTypes = {
  value: PropTypes.number,
  currency: PropTypes.string,
  onChangeValue: PropTypes.func,
  onChangeCurrency: PropTypes.func
}

export default Block