import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();

    // TODO: เปลี่ยนเป็นเรียก API จริงของคุณ
    const ok = form.email === "admin@example.com" && form.password === "123456";
    if (!ok) return setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");

    // เดโม: เก็บ token ไว้ก่อน (ของจริงควรใช้ httpOnly cookie)
    localStorage.setItem("admin_token", "demo-token");
    navigate("/admin", { replace: true });
  }

  return (
    <div className="container" style={{ maxWidth: 420, padding: "64px 16px" }}>
      <h2 style={{ marginBottom: 12 }}>เข้าสู่ระบบผู้ดูแล</h2>
      <p style={{ color: "#666", marginBottom: 24 }}>
        ใส่อีเมลและรหัสผ่านสำหรับผู้ดูแลระบบ
      </p>

      <form onSubmit={onSubmit} className="card">
        <div style={{ marginBottom: 12 }}>
          <label>อีเมล</label>
          <input
            name="email"
            type="email"
            placeholder="admin@example.com"
            value={form.email}
            onChange={onChange}
            className="input"
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>รหัสผ่าน</label>
          <input
            name="password"
            type="password"
            placeholder="••••••"
            value={form.password}
            onChange={onChange}
            className="input"
            required
          />
        </div>

        {error && (
          <div style={{ color: "#b00020", marginBottom: 12 }}>{error}</div>
        )}

        <button type="submit" className="heroBtn" style={{ width: "100%" }}>
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}
