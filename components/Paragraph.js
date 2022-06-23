import styles from '../styles/Home.module.css'
import {useState, useEffect, useRef} from 'react'

export default function TypeField(props){

     
      
    return <div>

    {props.status === 'started' && (
        <div className="card mt-3">
        <div className="card-body">
        <h5 className="card-title">Type these</h5>
          <p className="card-text">
          {props.words.map((word, i) => (
                  <span key={i}>
                    <span>
                      {word.split("").map((char, idx) => (
                        <span className={props.getCharClass(i, idx, char)} key={idx}>{char}</span>
                      )) }
                    </span>
                    <span> </span>
                  </span>
                ))}
          </p> 
        </div>
      </div>
      )}


        </div>

}