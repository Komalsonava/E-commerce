import React, {useEffect, useRef, useState} from 'react'

const LearnHooks = () => {
    const btnRef = useRef();

    const [count, setCount] = useState(0);

        useEffect(() => {
            console.log("count");
        },[count]);



return (
    <div>
        <button style={{display:"none"}} ref={btnRef} onClick={() => setCount((prev) => prev + 1)}>ADD count</button>
        <br/>
        <br/>
        <button onClick={() => {btnRef.current.click()
             btnRef.current.style.display = "block"}}>tigger count</button>
    </div>
);
};
export default LearnHooks