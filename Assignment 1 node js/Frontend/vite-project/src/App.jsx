import React, { useState } from 'react'
import {
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import React, { useState } from 'react'
// import {
//   CCollapse,
//   CContainer,
//   CNavbar,
//   CNavbarBrand,
//   CNavbarNav,
//   CNavbarToggler,
//   CNavItem,
//   CNavLink,
// } from '@coreui/react'

// export const NavbarExample = () => {
//   const [visible, setVisible] = useState(false)

//   return (
//     <CNavbar expand="lg" className="bg-body-tertiary px-3">
//       <CContainer fluid>
        
//         {/* Logo + Text */}
//         <CNavbarBrand href="#" className="d-flex align-items-center">
//           <img
//             src="img.webp"   //
//             alt="Logo"
//             width="40"
//             height="40"
//             className="me-2"
//           />
//           <strong>Home Work</strong>
//         </CNavbarBrand>

//         <CNavbarToggler onClick={() => setVisible(!visible)} />

//         <CCollapse className="navbar-collapse" visible={visible}>
//           <CNavbarNav className="ms-auto">
//             <CNavItem>
//               <CNavLink href="#" active>
//                 Home
//               </CNavLink>
//             </CNavItem>
//           </CNavbarNav>
//         </CCollapse>

//       </CContainer>
//     </CNavbar>
//   )
// }

CCollapse,
CContainer,
CNavbar,
CNavbarBrand,
CNavbarNav,
CNavbarToggler,
CNavItem,
CNavLink,
} from '@coreui/react'

const Home = () => <div><h1>ABES</h1></div>
const Work = () => <div><h1>Work Page</h1></div>

export default function App() {
const [visible, setVisible] = useState(false)

return (
  <Router>
    <CNavbar expand="lg" className="bg-body-tertiary px-3">
      <CContainer fluid>
        <CNavbarBrand href="/" className="d-flex align-items-center">
          <img src="img.webp" alt="Logo" width="40" height="40" className="me-2" />
          <strong>Home Work</strong>
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="ms-auto">
            <CNavItem>
              <CNavLink href="/">Home</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/work">Work</CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  </Router>
)
}