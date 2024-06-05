import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByX } from '../store/action/counterAction';

function UseOfHooks() {

  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
         <h1>React Redux with hooks</h1>
         <h3>Count : {count}</h3>
         <button onClick={() => dispatch(increment())}>Increment</button>
         <button onClick={() => dispatch(decrement())}>decrement</button>
         <button onClick={() => dispatch(incrementByX(5))}>Increment by 5</button>
    </div>
  );
}

export default UseOfHooks;
