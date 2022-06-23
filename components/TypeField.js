import styles from '../styles/Home.module.css'
import {useState, useEffect, useRef} from 'react'

export default function TypeField(props){

    return <div>
        <div className="input-group">
          <span className="input-group-text">Type Here..</span>
          <input className="form-control" 
            aria-label="With textarea"
            ref={props.textInput} 
            disabled={props.status !== "started"} 
            onKeyDown={props.handleKeyDown}
            value={props.currInput} 
            onChange={
              (e) => props.setCurrInput(e.target.value)
            }
          />
        </div>
        {props.status != 'started' && (
        <button classNameName="btn btn-dark w-100 mt-3" onClick={props.start}>Begin Typing</button>
        )}  
    </div>

}