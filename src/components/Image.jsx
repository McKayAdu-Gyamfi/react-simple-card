import React from 'react'

export default function Image(props) {
  return (
    <div>
        <img src={props.pic} alt='' style={{height: 400, width: 400}}/>
    </div>
  )
}
