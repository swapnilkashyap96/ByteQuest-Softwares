import React from 'react'

function Card(props) {
    return (
        <>
            <div className="col-sm-6 my-2">
                <div className={props.className} style={props.style}>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">{props.para}</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card