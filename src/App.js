import {useSelector,useDispatch} from 'react-redux';
import {login,decrement,increment,incrementByAmount,reset} from './redux/actions';

function App() {
  const { counter ,logged } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {logged ? 
      <>
      <h1>Hello you are logged, counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>

      <button onClick={() => dispatch(incrementByAmount(5))}> Increment by 5 </button>
      <button onClick={()=>dispatch(login())}>Logout</button>

      </> 
      : <button onClick={()=>{
        dispatch(login());
        dispatch(reset());
      }}>Login</button>
      }
    </div>
  );
}

export default App;
