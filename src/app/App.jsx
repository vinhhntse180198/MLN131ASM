import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import SiteLayout from '../layout/SiteLayout.jsx'
import HomePage from '../pages/HomePage.jsx'
import GamePage from '../pages/GamePage.jsx'
import KhaiNiemPage from '../pages/KhaiNiemPage.jsx'
import LichSuPage from '../pages/LichSuPage.jsx'
import XaHoiChuNghiaPage from '../pages/XaHoiChuNghiaPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/khai-niem" element={<KhaiNiemPage />} />
          <Route path="/lich-su" element={<LichSuPage />} />
          <Route path="/xa-hoi-chu-nghia" element={<XaHoiChuNghiaPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/dan-chu-xhcn" element={<Navigate to="/xa-hoi-chu-nghia" replace />} />
          <Route path="/tien-trinh" element={<Navigate to="/lich-su" replace />} />
          <Route path="/tro-choi" element={<Navigate to="/game" replace />} />
          <Route path="/mo-dau" element={<Navigate to="/khai-niem" replace />} />
          <Route path="/chuong-2" element={<Navigate to="/khai-niem" replace />} />
          <Route path="/chuong-3" element={<Navigate to="/lich-su" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
