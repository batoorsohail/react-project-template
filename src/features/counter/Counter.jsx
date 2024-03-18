import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset())
  }

  return (
    <section className="flex flex-col items-center justify-center gap-5 h-screen">
      <p className="text-3xl font-bold">{count}</p>
      <div>
        <button className="px-5 py-2 rounded-md border mr-5" onClick={() => dispatch(increment())}>+</button>
        <button className="px-5 py-2 rounded-md border" onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input type="text" className="px-5 py-2 rounded-md border" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
      </div>
      <div>
        <button className="px-5 py-2 rounded-md border mr-5" onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button className="px-5 py-2 rounded-md border" onClick={() => dispatch(resetAll())}>Reset</button>
      </div>
    </section>
  )
}

export default Counter