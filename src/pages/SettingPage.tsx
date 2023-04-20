import { useTranslation } from "react-i18next"
import PagePanel from "~components/Page"
import { getVersion } from '~utils'
function SettingPage() {
    const { t } = useTranslation()
    return (
        <PagePanel title={`${t('Settings')} (v${getVersion()})`}>
            Settings
        </PagePanel>
    )
}

export default SettingPage