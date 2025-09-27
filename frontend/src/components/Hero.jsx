import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/hero.jpg' 

export default function Hero(){
  return (
    <section className="hero">
      <img src={hero} alt="บรรยากาศรีสอร์ท" />
      <div className="heroOverlay" />
      <div className="heroContent">
        <h1 className="heroTitle">สุรีย์การ์เด้น</h1>
        <p className="heroSubtitle">
          ความเงียบสงบ… คือของขวัญที่แท้จริง<br/>
          สัมผัสบรรยากาศส่วนตัวท่ามกลางธรรมชาติ
        </p>
        {/* ไปที่หน้ารวม + เริ่มหน้าที่ 1 */}
        <Link to="/browse?page=1" className="heroBtn" onClick={() => window.scrollTo(0,0)}>
          จองเลย
        </Link>
      </div>
    </section>
  )
}
