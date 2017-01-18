import React from 'react'
import styles from './App.css'

const App = ({who}) => (
  <div className={styles.app}>
    <h2>Hello, {who}!</h2>
  </div>
)

export default App
