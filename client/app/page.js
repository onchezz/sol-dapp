'use client'
 
import { useState } from 'react';
import styles from './page.module.css'

export default function Home() {
  const [count, setCount ] = useState(0);
  const inc =()=> {
    
    console.log('incrementing');
  }
  const  dec =()=> {
    console.log('decrementing')
  }
  return (
    <main className={styles.main}>
      <div>
      <div className={styles.Home}>
        <h1>Counter dapp</h1>
      </div>
      <div className={styles.counterContainer}>
      <p className={styles.counter}>curent count : {count}</p>
      </div>
      <div>
      <button className={styles.card}  onClick={inc}>increment</button>
      <button className={styles.card} onClick={dec}>decrement</button>
      </div>
      </div>
    </main>
  )
}
