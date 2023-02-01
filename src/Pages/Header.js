import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className="container-fluid ">
            <div className="container mx-auto my-3">
                <div className="row justify-content-between ">
                    <div className="col-md-6 fs-3" style={{fontWeight:'Bold',color:'#0073FF'}}>
                        Medi<span style={{color:'#FF9F6A'}}>Care<sup>+</sup></span>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                                <ul className='list-unstyled justify-content-evenly d-flex'>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/'>About</Link></li>
                                    <li><Link to='/'>Services</Link></li>
                                    <li><Link to='/'>News</Link></li>
                                    <li><Link to='/' className='p-2 ' style={{borderRadius:'2rem',width:'100px',display:'inline-block' ,background:'blue',color:'white'}}>Contacts</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header