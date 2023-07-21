'use client'
 
import styles from './page.module.css'

export default function Home() {
  function inc(){
    console.log('incrementing');
  }
  function dec (){
    console.log('decrementing')
  }
  return (
    <main className={styles.main}>
      <div className={styles.Home}>
        
        <h1>Counter dap</h1>
        <h1>2</h1>
      
      <div className={styles.grid} >
      <button className={styles.card}  onClick={inc}>increment</button>
      <button className={styles.card} onClick={dec}>decrement</button>
      </div>
      </div>
    </main>
  )
}
