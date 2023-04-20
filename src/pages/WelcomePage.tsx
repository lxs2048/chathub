import { useTranslation } from "react-i18next"
import PagePanel from "~components/Page"

function WelcomePage() {
    const { t } = useTranslation()
    return (
        <PagePanel title={`${t('Welcome')}`}>
            Welcome
        </PagePanel>
    )
}

export default WelcomePage