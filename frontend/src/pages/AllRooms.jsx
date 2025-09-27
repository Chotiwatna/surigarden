// src/pages/AllRooms.jsx
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

// รูป hero สำหรับหัวหน้าเพจนี้
import heroImg from "../assets/hero.jpg";

// รูปที่มีอยู่แล้วในโปรเจกต์ (การ์ดตัวอย่าง)
import DeluxeDoubleHero   from "../assets/DeluxeDouble.jpg";
import PremierDoubleHero  from "../assets/PremierDoubleRoom.jpg";
import DeluxeTwinHero     from "../assets/DeluxeTwin.jpg";
import SuperiorDoubleHero from "../assets/SuperiorDoubleRoom.jpg";
import DeluxeTripleHero   from "../assets/DeluxeTriple.jpg";
import StandardVillaHero  from "../assets/StandardVilla.jpg";
import FamilySuiteHero    from "../assets/FamilySuite.jpg";

import room1  from "../assets/room1.jpg";
import room3  from "../assets/room3.jpg";
import room4  from "../assets/room4.jpg";
import room12 from "../assets/room12.jpg";

import BanquetList2  from "../assets/BanquetList2.jpg";
import BanquetList3  from "../assets/BanquetList3.jpg";
import BanquetList4  from "../assets/BanquetList4.jpg";

const CATALOG = [
  // page 1
  { title:"ห้องเลขที่ 0", en:"Deluxe Triple", img:DeluxeTripleHero, price:650, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่ 1 เตียงเล็ก","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องเลขที่ 1", en:"Deluxe Double", img:room1, price:550, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องเลขที่ 2", en:"Deluxe Twin", img:DeluxeTwinHero, price:550, unit:"คืน",
    facts:["เตียง : 2 เตียงเล็ก","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องเลขที่ 3", en:"Deluxe Triple", img:room3, price:550, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },

  // page 2
  { title:"ห้องเลขที่ 4", en:"Deluxe Triple", img:room4, price:550, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องเลขที่ 5", en:"Superior Double Room", img:SuperiorDoubleHero, price:450, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องเลขที่ 6", en:"Superior Double Room", img:SuperiorDoubleHero, price:450, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องเลขที่ 7", en:"Superior Double Room", img:SuperiorDoubleHero, price:450, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },

  // page 3
  { title:"ห้องเลขที่ 8", en:"Deluxe Triple", img:SuperiorDoubleHero, price:450, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่ 1 เตียงเล็ก","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องเลขที่ 9", en:"Deluxe Double", img:SuperiorDoubleHero, price:450, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องเลขที่ 10", en:"Family Suite", img:FamilySuiteHero, price:1500, unit:"คืน",
    facts:["เตียง : 2 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องเลขที่ 11", en:"Standard Villa", img:StandardVillaHero, price:450, unit:"คืน",
    facts:["เตียง : 2 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },

  // page 4
  { title:"ห้องเลขที่ 12", en:"Deluxe Triple", img:room12, price:450, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องเลขที่ 21", en:"Deluxe Double", img:PremierDoubleHero, price:550, unit:"คืน",
    facts:["เตียง : 1 เตียงใหญ่","ขนาดห้อง: 20 ตารางเมตร","วิว: พื้นที่กลางแจ้ง","ห้องน้ำ: ห้องน้ำส่วนตัว"] },
  { title:"ห้องจัดเลี้ยง", en:"ขนาดเล็ก", img:BanquetList2, price:200, unit:"ชั่วโมง",
    facts:["โต๊ะสำหรับวางอาหาร","ผู้ใช้สูงสุด 10 คน","คาราโอเกะ"] },
  { title:"ห้องจัดเลี้ยง", en:"ขนาดกลาง", img:BanquetList3, price:250, unit:"ชั่วโมง",
    facts:["โต๊ะสำหรับวางอาหาร","ผู้ใช้สูงสุด 25 คน","คาราโอเกะ"] },

  // page 5
  { title:"ห้องจัดเลี้ยง", en:"ขนาดใหญ่", img:BanquetList4, price:500, unit:"ชั่วโมง",
    facts:["โต๊ะสำหรับวางอาหาร","ผู้ใช้สูงสุด 50 คน","คาราโอเกะ"] },
];

const PAGE_SIZE = 4;

export default function AllRooms(){
  const [sp, setSp] = useSearchParams();
  const page = Math.max(
    1,
    Math.min(
      parseInt(sp.get("page") || "1", 10),
      Math.ceil(CATALOG.length / PAGE_SIZE)
    )
  );

  const totalPages = Math.ceil(CATALOG.length / PAGE_SIZE);

  const data = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return CATALOG.slice(start, start + PAGE_SIZE);
  }, [page]);

  const goto = (p) => {
    setSp({ page: String(p) });
    // เลื่อนขึ้นบนสุดให้ผู้ใช้เห็นการ์ดชุดใหม่ทันที
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <main className="typePage allRoomsPage">
        {/* hero */}
        <section className="typeHero" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="typeHeroVeil" />
          <div className="typeHeroTitle">
            <div>
              <h1>ห้องพัก & ห้องจัดเลี้ยง</h1>
              <div className="typeHeroSub">Rooms & Banquet</div>
            </div>
          </div>
        </section>

        {/* cards */}
        <section className="container bGrid">
          {data.map((item, i) => {
            const isBanquet = item.unit === "ชั่วโมง";
            return (
              <article key={i} className="bCard">
                <div className="bPic">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="bBody">
                  <div className="bTitle">
                    <h3>{item.title}</h3>
                    {item.en && <div className="en">{item.en}</div>}
                  </div>

                  {/* ใช้คลาส bFacts--room / bFacts--banquet เพื่อดึงไอคอนจาก global.css */}
                  <ul className={`bFacts ${isBanquet ? "bFacts--banquet" : "bFacts--room"}`}>
                    {item.facts.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>

                  <div className="bActions">
                    <button className="priceBtn" type="button">
                      <span className="baht">฿</span>
                      <strong>{item.price.toLocaleString()}</strong>
                      <span className="per">บาท / {item.unit}</span>
                    </button>

                    <a className="detailBtn" href="#">
                      <span>รายละเอียด</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Pagination */}
        <section
          className="container"
          style={{ display: "flex", justifyContent: "center", gap: 10, alignItems: "center", padding: "8px 0 46px" }}
        >
          <span style={{ color: "#666" }}>Page {page} of {totalPages}</span>
          {Array.from({ length: totalPages }, (_, idx) => {
            const p = idx + 1;
            const active = p === page;
            return (
              <button
                key={p}
                onClick={() => goto(p)}
                style={{
                  minWidth: 44,
                  height: 38,
                  border: "1px solid var(--line)",
                  borderRadius: 6,
                  background: active ? "var(--accent-700)" : "#fff",
                  color: active ? "#fff" : "#222",
                  fontWeight: 800,
                  cursor: "pointer"
                }}
              >
                {p}
              </button>
            );
          })}
        </section>

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

        {/* footer */}
        <footer className="bottomBar">
          <div className="container">© 2025 สุรีย์การ์เด้น รีสอร์ท. สงวนสิทธิ์ทั้งหมด</div>
        </footer>
      </main>
    </>
  );
}
