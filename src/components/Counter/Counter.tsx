import React, { useState } from 'react'
import classes from './Counter.module.scss';
const Counter = () => {
    const [ count, setCount ] = useState(0);
    return (
      <div className={classes.counter}>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={() => setCount(prev => prev += 1)}>Increase</button>
      <button onClick={() => setCount(prev => prev -= 1)}>Decrees</button>
      </div>
    )
}

export default Counter