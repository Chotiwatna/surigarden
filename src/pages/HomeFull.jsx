import React from "react";
import pond from "../assets/pond.jpg";
import veranda from "../assets/veranda.jpg";
import room from "../assets/room.jpg";

const ROOMS = [
  {
    id: 1,
    img: room,
    tags: ["ห้องพัก", "ห้องดีลักซ์เตียงใหญ่"],
    title: "ห้องดีลักซ์เตียงใหญ่",
    desc:
      "ห้องดีลักซ์เตียงใหญ่ เหมาะกับคู่รัก/เพื่อน 1 คู่ บรรยากาศ เงียบสงบ เหมาะแก่การพักผ่อน มีสิ่งอำนวยความสะดวกครบครัน และทำเลที่ตั้งรายล้อมด้วยบรรยากาศธรรมชาติบ่อบัวและสวนสไตล์ไทย",
  },
  {
    id: 2,
    img: veranda,
    tags: ["ห้องพัก", "ห้องพรีเมียมเตียงใหญ่"],
    title: "ห้องพรีเมียมเตียงใหญ่",
    desc:
      "ห้องพรีเมียมเตียงใหญ่ กว้างขวาง โปร่งสบาย เหมาะกับนักท่องเที่ยวและครอบครัวขนาดเล็ก เน้นความเป็นส่วนตัว พร้อมพื้นที่นั่งเล่นหน้าห้องและหน้าต่างบานใหญ่",
  },
  {
    id: 3,
    img: pond,
    tags: ["ห้องพัก", "ห้องดีลักซ์เตียงแฝด"],
    title: "ห้องดีลักซ์เตียงแฝด",
    desc:
      "เหมาะสำหรับเพื่อน 2 คนที่อยากได้เตียงแยก วิวด้านหน้าเป็นสระบัวและสวนสวย อากาศถ่ายเทดี ให้ความรู้สึกสบายในทุกช่วงเวลา",
  },
  {
    id: 4,
    img: room,
    tags: ["ห้องพัก", "ซูพีเรีย เตียงใหญ่"],
    title: "ซูพีเรีย เตียงใหญ่",
    desc:
      "ห้องซูพีเรียเตียงใหญ่ ให้ความสะดวกสบายครบครัน เหมาะกับผู้เข้าพักที่ต้องการความเรียบง่ายแต่ครบเครื่อง",
  },
  {
    id: 5,
    img: veranda,
    tags: ["ห้องพัก", "ห้องดีลักซ์สำหรับ 3 ท่าน"],
    title: "ห้องดีลักซ์สำหรับ 3 ท่าน",
    desc:
      "เตียงใหญ่ + เตียงเล็ก เหมาะกับเพื่อน/ครอบครัว 3 ท่าน พักผ่อนสบายในบรรยากาศเงียบสงบ ติดธรรมชาติ",
  },
  {
    id: 6,
    img: pond,
    tags: ["ห้องพัก", "ห้องพักบ้านเดี่ยว"],
    title: "ห้องพักบ้านเดี่ยว",
    desc:
      "บ้านเดี่ยวเป็นหลัง เป็นส่วนตัว มีเฉลียงหน้าบ้านให้รับลมชมสวน เหมาะกับครอบครัวเล็ก ๆ",
  },
  {
    id: 7,
    img: room,
    tags: ["ห้องพัก", "ห้องพักสำหรับครอบครัว"],
    title: "ห้องพักสำหรับครอบครัว",
    desc:
      "ห้องกว้าง จุคนได้หลายท่าน เตียงใหญ่ 2 เตียง + ฟูกเสริม เหมาะกับการพักผ่อนแบบกลุ่มหรือครอบครัว",
  },
  {
    id: 8,
    img: veranda,
    tags: ["ห้องนั่งเล่น", "ส่วนรวม"],
    title: "ห้องนั่งเล่น",
    desc:
      "มุมรวมตัวของผู้เข้าพัก บรรยากาศโปร่งโล่ง เหมาะกับการนั่งคุย/ทำกิจกรรมร่วมกัน พร้อมวิวสวนด้านนอก",
  },
];

export default function HomeFull() {
  return (
    <main className="homeFull">
      
      <section className="homeHero">
        <img src={veranda} alt="บรรยากาศรีสอร์ท" />
        <div className="homeHeroShade" />
      </section>

      <section className="container homeIntro">
        <h1 className="homeTitle">สุรีย์การ์เด้นรีสอร์ท</h1>

        <div className="introGrid">
          <div className="introPic">
            <img src={pond} alt="บรรยากาศรีสอร์ท" />
          </div>
          <div className="introText">
            <div className="chipRow">
              <span className="chip">บรรยากาศ</span>
              <span className="chip">วิวด้านหน้า</span>
            </div>
            <h3 className="h3">บรรยากาศ</h3>
            <p>
              สุรีย์การ์เด้นรีสอร์ทให้บรรยากาศธรรมชาติรายล้อมด้วยสระบัว
              โค้งสะพานไม้และศาลาไม้ริมน้ำ
              เหมาะสำหรับผู้ที่ต้องการความผ่อนคลายจากความวุ่นวาย
              และชอบซึมซับบรรยากาศแบบไทยร่วมสมัย
            </p>
          </div>
        </div>
      </section>

      <section className="container homeRooms">
        {ROOMS.map((r) => (
          <article className="roomCard" key={r.id}>
            <div className="roomImg">
              <img src={r.img} alt={r.title} />
            </div>
            <div className="roomInfo">
              <div className="chipRow">
                {r.tags.map((t, i) => (
                  <span className="chip" key={i}>{t}</span>
                ))}
              </div>
              <h3 className="roomTitle">{r.title}</h3>
              <p className="roomDesc">{r.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
