import React from 'react'
import logo from '../assets/logo.jpg' // เปลี่ยนเป็นโลโก้จริงของคุณภายหลัง

export default function Navbar(){
  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="สุริย์การ์เด้น" />
        <span className="brandName">สุริย์การ์เด้น รีสอร์ท</span>
      </div>

      <nav className="navMenu" aria-label="เมนูหลัก">
        <ul>
          <li><a href="#">หน้าแรก</a></li>

          <li className="hasDropdown">
            <a href="#">ห้องพัก ▾</a>
            <div className="dropdown" role="menu" aria-label="เมนูห้องพัก">
              <a href="#">Deluxe Double</a>
              <a href="#">Premiere Double Room</a>
              <a href="#">Deluxe Twin</a>
              <a href="#">Superior Double Room</a>
              <a href="#">Deluxe Triple</a>
              <a href="#">Family Suite</a>
              <a href="#">Standard Villa</a>
            </div>
          </li>

          <li><a href="#">สิ่งอำนวยความสะดวก</a></li>
          <li><a href="#">ผู้ดูแลระบบ</a></li>
        </ul>
      </nav>
    </header>
  )
}
