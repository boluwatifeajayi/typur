import styles from '../styles/Home.module.css'
import {useState, useEffect, useRef} from 'react'

export default function TypeField(props){
     
    return <div>
        {props.status === 'finished' && (
        <div className='mt-4'>
          <hr/>
          <div className="row">
            <div className="col-lg">
              <p className="is-size-5">Total Typed Words</p>
              <h6 className="text-primary fw-bold">
                {props.correct}
              </h6>
            </div>
            <div className="col-lg">
              <p className="is-size-5">Points</p>
              <h6 className="text-primary fw-bold">
                {props.points}
              </h6>
            </div>
            <div className="col-lg">
              <p className="is-size-5">Accuracy</p>
              {props.correct !== 0 ? (
                <h6 className="text-primary fw-bold">
                  {Math.round((props.correct / (props.correct + props.incorrect)) * 100)}%
                </h6>
              ) : (
                <h6 className="text-primary fw-bold">0%</h6>
              )}
            </div>
          </div>
          <hr/>
        </div>
      )}
  
    </div>

}