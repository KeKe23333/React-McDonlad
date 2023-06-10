import React from 'react'
import classes from './Counter.module.css'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
//计数器组件
export default function Counter(props) {
  return (
    <div className={classes.Counter}>
      {
        (props.amount && props.amount > 0) ? 
      <React.Fragment>
      <button className={classes.Sub}>
        <MinusOutlined/>
      </button>
      <span className={classes.Count}>{props.amount}</span>
      </React.Fragment> : null
      }
      <button className={classes.Add}>
        <PlusOutlined />
      </button>
    </div>
  )
}
