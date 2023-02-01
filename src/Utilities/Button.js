import React from 'react'

function Button(props) {
  return (
    <>
        <button className={props.className} style={props.style}>{props.value}</button>
    </>
  )
}

export default Button