import React from 'react'
import classes from './Counter.module.css'
export default function Counter() {
  return (
    <div>
      <button className={classes.Sub}>
        <span>-</span>
      </button>
      <span className={classes.Count}>1</span>
      <button className={classes.Add}>
        <span>+</span>
      </button>
    </div>
  )
}
