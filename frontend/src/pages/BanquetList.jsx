// src/pages/BanquetList.jsx
import React from "react";
import hero from "../assets/BanquetList1.jpg";   // รูปแบนเนอร์ใหญ่ด้านบน
import imgSmall from "../assets/BanquetList2.jpg";
import imgMedium from "../assets/BanquetList3.jpg";
import imgLarge from "../assets/BanquetList4.jpg";

export default function BanquetList() {
  // ข้อมูลสแตติกตามแบบ
  const CARDS = [
    {
      id: 1,
      title: "ห้องจัดเลี้ยง",
      size: "ขนาดเล็ก",
      img: imgSmall,
      features: ["โต๊ะสำหรับทานอาหาร", "ผู้ใช้สูงสุด 10 คน", "คาราโอเกะ"],
      price: 200,
    },
    {
      id: 2,
      title: "ห้องจัดเลี้ยง",
      size: "ขนาดกลาง",
      img: imgMedium,
      features: ["โต๊ะสำหรับทานอาหาร", "ผู้ใช้สูงสุด 25 คน", "คาราโอเกะ"],
      price: 250,
    },
    {
      id: 3,
      title: "ห้องจัดเลี้ยง",
      size: "ขนาดใหญ่",
      img: imgLarge,
      features: ["โต๊ะสำหรับทานอาหาร", "ผู้ใช้สูงสุด 50 คน", "คาราโอเกะ"],
      price: 500,
    },
  ];

  return (
    <main className="banquetPage typePage">
      {/* HERO */}
      <section
        className="typeHero"
        style={{ backgroundImage: `url(${hero})` }}
        aria-label="Banquet hero"
      >
        <div className="typeHeroVeil" />
        <div className="typeHeroTitle">
          <h1>ห้องจัดเลี้ยง</h1>
          <div className="typeHeroSub">Banquet room</div>
        </div>
      </section>

      {/* GRID */}
      <div className="container">
        <div className="banquetGrid">
          {CARDS.map((c) => (
            <article key={c.id} className="bCard">
              <div className="bImgWrap">
                <img src={c.img} alt="" />
              </div>

              <div className="bBody">
                {/* หัวการ์ด (ชื่อ + ขนาด) */}
                <div className="bHead">
                  <div className="bTitle">{c.title}</div>
                  <div className="bSub">{c.size}</div>
                </div>

                {/* รายการคุณสมบัติ */}
                <ul className="bFacts">
                  <li>
                    <UtensilsIcon />
                    <span>โต๊ะสำหรับทานอาหาร</span>
                  </li>
                  <li>
                    <UsersIcon />
                    <span>
                      {c.features[1] /* เขียนทับข้อความให้เหมือนดีไซน์ */}
                    </span>
                  </li>
                  <li>
                    <MicIcon />
                    <span>คาราโอเกะ</span>
                  </li>
                </ul>

                {/* ปุ่ม */}
                <div className="bActions">
                  <button className="priceBtn" type="button">
                    <span className="baht">฿</span>
                    <strong>{c.price.toLocaleString()}</strong>
                    <span className="per">บาท / ชั่วโมง</span>
                  </button>

                  <a className="detailBtn" href="#" onClick={(e) => e.preventDefault()}>
                    รายละเอียด
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer (เหมือนเดิม) */}
        <section className="contact">
          <div className="container">
            <h3 className="contactTitle">ติดต่อเรา</h3>
            <ul className="contactList">
              <li>
                <span className="ic" aria-hidden>
                  <svg viewBox="0 0 24 24"><path d="M12 2C8.7 2 6 4.7 6 8c0 5 6 12 6 12s6-7 6-12c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 5.5 12 5.5 14.5 6.6 14.5 8 13.4 10.5 12 10.5z" fill="currentColor"/></svg>
                </span>
                123 หมู่6 ใกล้แยก รร การบิน ถนน บางเลน ตำบล ห้วยขวาง อำเภอกำแพงแสน นครปฐม 73180
              </li>
              <li>
                <span className="ic" aria-hidden>
                  <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C12.8 21 3 11.2 3 2c0-.6.4-1 1-1h2.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" fill="currentColor"/></svg>
                </span>
                082 466 6689
              </li>
            </ul>
          </div>
        </section>
    </main>
  );
}
/* ===== ไอคอนเล็ก ๆ ===== */
function UtensilsIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 2a1 1 0 0 1 1 1v6a3 3 0 0 1-2 2.83V22H5V11.83A3 3 0 0 1 3 9V3a1 1 0 0 1 2 0v4h1V3a1 1 0 0 1 2 0v4h1V3a1 1 0 0 1 1-1ZM17 2a3 3 0 0 1 3 3v6h-2v11h-2V11h-2V5a3 3 0 0 1 3-3Z"/>
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 2c-3.33 0-6 1.67-6 4v1h12v-1c0-2.33-2.67-4-6-4Zm-8 0c-2.65 0-5 1.34-5 3v2h6v-2c0-1.19.56-2.23 1.47-3.03A8.5 8.5 0 0 0 8 13Z"/>
    </svg>
  );
}
function MicIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21H9v2h6v-2h-2v-3.08A7 7 0 0 0 19 11Z"/>
    </svg>
  );
}
function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
