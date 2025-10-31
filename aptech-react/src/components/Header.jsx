import React from 'react';
export default function Header(){
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo"><img src="/public/image/logo.png" alt="logo"/><div><strong>Frontend Web Development with React -SET03</strong></div></div>
        <nav className="nav">
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Booking</a>
          <a href="#">Locations</a>
          <button className="btn">Sign In</button>
          <button className="btn" style={{background:'#fff',color:'#333',border:'1px solid #6b7280'}}>Sign Up</button>
        </nav>
      </div>
    </header>
  )
}
