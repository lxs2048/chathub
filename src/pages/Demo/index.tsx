import { useTranslation } from 'react-i18next'
function Demo() {
  const { t } = useTranslation()
  return (
    <div>{t('Save')}</div>
  )
}

export default Demo