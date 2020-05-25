import React from 'react';
import Toggle from './Toggle.jsx';

function Sem (props) {
  return(
      <div>
          <Toggle semst={props.sm}>
               <h2 style={ {display: !props.sub1 && "none" }, {borderBottom: "3px solid rgb(212, 212, 212)", paddingLeft: "10px"}}>  {props.sub1}</h2> < br / >
                 <h2 style={ {display: !props.sub2 && "none" } , {borderBottom: "3px solid rgb(212, 212, 212)", paddingLeft: "10px"}}> {props.sub2}</h2> < br / >
                 <h2 style={ {display: !props.sub3 && "none" } , {borderBottom: "3px solid rgb(212, 212, 212)", paddingLeft: "10px"}}> {props.sub3}</h2> < br / >
                 <h2 style={ {display: !props.sub4 && "none" } , {borderBottom: "3px solid rgb(212, 212, 212)", paddingLeft: "10px"}}> {props.sub4}</h2> < br / >
                 <h2 style={ {display: !props.sub5 && "none" } , {borderBottom: "3px solid rgb(212, 212, 212)", paddingLeft: "10px"}}> {props.sub5}</h2> < br / >
          </Toggle>
      </div>
    )
}
export default Sem
