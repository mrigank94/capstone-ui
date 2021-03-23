import { useEffect, useState } from "react";
import axios from "axios";

const FuncComponent = (props) => {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState('');

    useEffect(() => {
        async function fetchData() {
            const {data} = await axios.get('http://localhost:3001');
            setResponse(data);
        }

        fetchData();
    }, [])


    return ( 
            <>
                <div>{count}</div>
                <button onClick={() => setCount(count+1)}>Increment</button>
                <button onClick={() => setCount(count-1)}>Decrement</button>

                <button onClick={() => setShow(!show)}>Toggle</button>
                {show && <span>I am visible now</span>}
                {response}
            </>
         );
}
 
export default FuncComponent;