import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import GlobalNavbar from './components/GlobalNavbar.jsx'
import Container from 'react-bootstrap/esm/Container.js'
import {Row, Col} from 'react-bootstrap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container fluid>
        <Row>
            <GlobalNavbar />
        </Row>
        <Row className='p-2'>
            <App />
        </Row>
    </Container>
  </StrictMode>,
)
