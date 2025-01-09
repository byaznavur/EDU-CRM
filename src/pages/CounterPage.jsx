import useCounter from "../hooks/CustomCounter";

const CounterPage = () => {
  const { dec, inc, count } = useCounter();
  const { dec: dec2, inc: inc2, count: count2 } = useCounter(2);
  return (
    <div className="container">
      <h2 className="text-center">CounterPage</h2>

      <div className="text-center">
        <button onClick={dec} className="btn btn-danger px-2">
          -
        </button>
        <span className="mx-3">{count}</span>
        <button onClick={inc} className="btn px-2 btn-primary">
          +
        </button>
      </div>
      <div className="text-center">
        <button onClick={dec2} className="btn btn-danger px-2">
          -
        </button>
        <span className="mx-3">{count2}</span>
        <button onClick={inc2} className="btn px-2 btn-primary">
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
