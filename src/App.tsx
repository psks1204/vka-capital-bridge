import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ScrollToTop } from './components/common/ScrollToTop'
import whatsappIcon from './assets/whatsapp_icon.png'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { InsuranceRiskPage } from './pages/services/InsuranceRiskPage'
import { InfrastructureAdvisoryPage } from './pages/services/InfrastructureAdvisoryPage'
import { SuretyBondsPage } from './pages/services/SuretyBondsPage'
import { UsAccountingTaxCompliancePage } from './pages/services/UsAccountingTaxCompliancePage'
import { UsAccountingPage } from './pages/services/UsAccountingPage'
import { HedgeAccountingPage } from './pages/services/HedgeAccountingPage'
import { DubaiRealEstatePage } from './pages/services/DubaiRealEstatePage'
import { ManagementConsultancyPage } from './pages/services/ManagementConsultancyPage'
import { WhyVKAPage } from './pages/WhyVKAPage'
import { ContactPage } from './pages/ContactPage'

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-vka" element={<WhyVKAPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Main Service Pages */}
        <Route path="/services/insurance-risk-management" element={<InsuranceRiskPage />} />
        <Route path="/services/infrastructure-advisory" element={<InfrastructureAdvisoryPage />} />
        <Route path="/services/surety-bonds-bg-advisory" element={<SuretyBondsPage />} />
        <Route path="/services/us-accounting-tax-compliance-advisory" element={<UsAccountingTaxCompliancePage />} />
        <Route path="/services/dubai-real-estate-capital-bridge" element={<DubaiRealEstatePage />} />
        <Route path="/services/advisory-management-consultancy" element={<ManagementConsultancyPage />} />

        {/* Sub-Service Pages under U.S. Accounting & Compliance */}
        <Route path="/services/us-accounting-compliance" element={<UsAccountingPage />} />
        <Route path="/services/us-investment-hedge-accounting" element={<HedgeAccountingPage />} />

        {/* Fallback Dynamic Route */}
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <a
        href="https://wa.me/919618211000?text=Hello%20VKA%20Capital%20Bridge,%20I%20would%20like%20to%20discuss%20an%20advisory%20requirement."
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          style={{ width: '38px', height: '38px', objectFit: 'contain' }}
        />
      </a>
    </BrowserRouter>
  )
}

export default App
