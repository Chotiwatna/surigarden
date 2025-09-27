// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedGrid from "./components/FeaturedGrid.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import AdminLogin from "./pages/AdminLogin.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminRooms from "./pages/AdminRooms.jsx";
import AdminBookings from "./pages/AdminBookings.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

import HomeFull from "./pages/HomeFull.jsx";
import RoomType from "./pages/RoomType.jsx";
import BanquetList from "./pages/BanquetList.jsx";
import AllRooms from "./pages/AllRooms.jsx";

function PublicHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedGrid />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<PublicHome />} />

      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <HomeFull />
            <Footer />
          </>
        }
      />

      {/* ห้องพักตามประเภท (หน้า type) */}
      <Route path="/rooms/:slug" element={<RoomType />} />
      
      {/* หน้า “รวมทั้งหมด” */}
      <Route path="/browse" element={<AllRooms />} />
      
      {/* ห้องจัดเลี้ยง */}
      <Route
        path="/banquet"
        element={
          <>
            <Navbar />
            <BanquetList />
            <Footer />
          </>
        }
      />

      {/* Admin Auth */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin Area */}
      <Route path="/admin" element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          {/* Dashboard เป็น index */}
          <Route index element={<AdminDashboard />} />
          <Route path="rooms" element={<AdminRooms />} />
          <Route path="bookings" element={<AdminBookings />} />
        </Route>
      </Route>

      {/* 404 -> home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
