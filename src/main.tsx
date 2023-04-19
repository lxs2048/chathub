import ReactDOM from 'react-dom/client'
import './i18n'
import './base.scss'
import Router from '~Router'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<>
    <Router />
</>)
