import ReactDOM from 'react-dom/client'
import Demo from '~pages/Demo'
import './i18n'
import './base.scss'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<>
    <h2>hello</h2>
    <Demo/>
</>)
