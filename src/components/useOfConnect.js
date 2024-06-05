import { connect } from "react-redux";
import { decrement, increment, incrementByX } from "../store/action/counterAction";

const UseofConnect = ({count, name, increment, decrement, incrementByX }) => {
    
    return (
        <div class="App">
            <h1>React Redux with connect wrapper</h1>
            <h4>Count: {count}</h4>
            <h3>Name : {name}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={() => incrementByX(5)}>Increment by 5</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.counter.count,
    name: state.user.name
});

const mapDispatchToProps = ({
    increment,
    decrement,
    incrementByX,
})


export default connect(mapStateToProps, mapDispatchToProps)(UseofConnect);
