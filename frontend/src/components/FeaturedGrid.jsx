import React from 'react'
import { Link } from 'react-router-dom'
import pond from '../assets/pond.jpg'
import veranda from '../assets/veranda.jpg'
import room from '../assets/room.jpg'

export default function FeaturedGrid(){
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <div>
              <h2 className="h2">ค้นพบสุรีย์การ์เด้น</h2>
              <p className="sub">รีสอร์ทที่สร้างขึ้นเพื่อเพิ่มพูนความสุขและความผ่อนคลายให้คุณทุกช่วงเวลา</p>
            </div>

            {/* ดูทั้งหมด -> หน้ารวม */}
            <Link className="linkAll" to="/browse?page=1" onClick={() => window.scrollTo(0,0)}>
              ดูทั้งหมด <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid">
            {/* รูปซ้าย/ขวาให้กดแล้วไปหน้ารวมเช่นกัน */}
            <Link to="/browse?page=1" onClick={() => window.scrollTo(0,0)}>
              <img src={pond} alt="มุมบ่อน้ำบัว" />
            </Link>
            <Link to="/browse?page=1" onClick={() => window.scrollTo(0,0)}>
              <img src={veranda} alt="เฉลียงไม้วิวสระน้ำ" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--noTopPad">
        <div className="container">
          <div className="roomShot">
            <Link to="/browse?page=1" onClick={() => window.scrollTo(0,0)}>
              <img src={room} alt="ห้องพักกว้างขวาง" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
