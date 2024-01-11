import { useDispatch, useSelector } from "react-redux";
import "./index.css"


function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state)=>state.cash);
  const exchangedCash = useSelector((state) => state.exchangedCash);

  const addCash = () => {
    dispatch({type:"ADD_CASH", payload: Number(prompt("Введите сумму"))})
  }
  const getCash = () => {
    dispatch({type:"GET_CASH", payload: Number(prompt("Введите сумму"))})
  }

  const exchangeCash = () => {
    const amount = Number(prompt("Введите сумму"));
    dispatch({ type: "EXCHANGE_CASH", payload: amount });
  }

  return (
    <div className="App" >
      <div className="container">
        <h1>Ваш баланс составляет {cash} сум</h1>
        <h2>В долларах: {exchangedCash} $</h2>
        <div className="btnContainer">
          <button onClick={addCash()}>добавить деньги</button>
          <button onClick={getCash()}>снять деньги</button>
          <button onClick={exchangeCash}>конвертировать</button>
        </div>
      </div>
    </div>
  );
}

export default App;