import { useTranslation } from 'react-i18next'
import './demo.scss'
function Demo() {
  const { t } = useTranslation()
  return (<>
    <div className='demo' style={{background: 'rgb(var(--color-primary-blue))'}}>
      {t('Save')}
    </div>
    <div className='bg-primary-blue text-light-text'>
      {t('Save')}
    </div>
  </>
  )
}

export default Demo