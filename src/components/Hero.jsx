import React from 'react'
// ใส่รูปของคุณเองใน src/assets แล้วแก้ชื่อไฟล์ด้านล่าง
import hero from '../assets/hero.jpg'

export default function Hero(){
  return (
    <section className="hero">
      <img src={hero} alt="บ้านพักท่ามกลางธรรมชาติ" />
      <div className="heroOverlay" />
      <div className="heroContent">
        <h1 className="heroTitle">สุริย์การ์เด้น</h1>
        <p className="heroSubtitle">
          ความเงียบสงบ… คือของขวัญที่แท้จริง<br/>
          สัมผัสบรรยากาศส่วนตัวท่ามกลางธรรมชาติ
        </p>
        <button className="heroBtn">จองเลย</button>
      </div>
    </section>
  )
}
