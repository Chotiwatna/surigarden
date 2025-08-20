import React from 'react'
import pond from '../assets/pond.jpg'
import veranda from '../assets/veranda.jpg'
import room from '../assets/room.jpg'

export default function FeaturedGrid(){
  return (
    <>
      <section className="section">
        <div className="container">
          {/* หัวข้อซ้าย + ดูทั้งหมดขวา */}
          <div className="sectionHeader">
            <div>
              <h2 className="h2">ค้นพบสุรีย์การ์เด้น</h2>
              <p className="sub">รีสอร์ทที่ดีสร้างเพื่อเพิ่มพูนความสุขและความผ่อนคลายให้คุณ…</p>
            </div>
            <a className="linkAll" href="#">
              ดูทั้งหมด <span aria-hidden>→</span>
            </a>
          </div>

          <div className="grid">
            <img src={pond} alt="มุมบ่อน้ำบัว" />
            <img src={veranda} alt="เฉลียงไม้วิวสระน้ำ" />
          </div>
        </div>
      </section>

      <div className="roomShot">
        <img src={room} alt="ห้องพักกว้างขวาง" />
      </div>
    </>
  )
}
