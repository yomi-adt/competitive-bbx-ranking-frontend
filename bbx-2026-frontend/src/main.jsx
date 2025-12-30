import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import GlobalNavbar from './components/common/GlobalNavbar.jsx'
import Container from 'react-bootstrap/esm/Container.js'
import { HashRouter } from 'react-router-dom';
import {Row} from 'react-bootstrap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container fluid>
        <Row>
            <GlobalNavbar />
        </Row>
        <Row className='p-2'>
            <HashRouter>
                <App />
            </HashRouter>
        </Row>
    </Container>
  </StrictMode>,
)
