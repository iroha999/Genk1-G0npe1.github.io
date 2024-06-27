// Home.tsx
import { useAppSelector, useAppDispatch } from '../Store/hooks';
import { increment, decrement } from '../Store/Slices/CounterSlice';

function Home() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Home;