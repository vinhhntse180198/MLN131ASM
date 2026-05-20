import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import SiteLayout from '../layout/SiteLayout.jsx'
import HomePage from '../pages/HomePage.jsx'
import KhaiNiemPage from '../pages/KhaiNiemPage.jsx'
import LichSuPage from '../pages/LichSuPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/khai-niem" element={<KhaiNiemPage />} />
          <Route path="/lich-su" element={<LichSuPage />} />
          <Route path="/tien-trinh" element={<Navigate to="/lich-su" replace />} />
          <Route path="/tro-choi" element={<Navigate to="/lich-su" replace />} />
          <Route path="/game" element={<Navigate to="/lich-su" replace />} />
          <Route path="/mo-dau" element={<Navigate to="/khai-niem" replace />} />
          <Route path="/chuong-2" element={<Navigate to="/khai-niem" replace />} />
          <Route path="/chuong-3" element={<Navigate to="/lich-su" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
