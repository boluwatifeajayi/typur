import styles from '../styles/Home.module.css'
import {useState, useEffect, useRef} from 'react'

export default function SetUp(props){

      function oneMinute(){
        props.setTime(60)
      }
    
      function twoMinute(){
        props.setTime(120)
      }
    
      function fiveMinute(){
        props.setTime(300)
      }
      
    return <div className='mb-4'>
        
        {props.status != 'started' && (
          <div className='mt-3'>
          <h5 className='m-2'> Set Timer</h5>
          
          <div className='d-flex flex-row bd-highlight mb-3'>
            <button onClick={oneMinute} className="m-2 btn btn-dark btn-sm">One Minute</button>
            <button onClick={twoMinute} className="m-2 btn btn-dark btn-sm">Two Minutes</button>
            <button onClick={fiveMinute} className="m-2 btn btn-dark btn-sm">five Minute</button> 
            <p className='m-2 fw-bold'> Or {" "}</p>
            <input type="number" placeholder='Enter Time In Seconds' className={styles.input}  onChange={(e) => props.setTime(e.target.value)} />
          </div>
          <hr/>
        </div> 
        
        )}

        <div className='row'>
          <h5 className='col-lg text-secondary'>Time: {props.time}s</h5>
          <h5 className='col-lg text-success'>Words: {props.wordsLenght}</h5>
          <h5 className='col-lg text-warning'>Points: {props.points}</h5>
          <hr className='m-2'/>
        </div>
  
       
    </div>

}