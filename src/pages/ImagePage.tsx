import { useTranslation } from "react-i18next"
import PagePanel from "~components/Page"

function ImagePage() {
    const { t } = useTranslation()
    return (
        <PagePanel title={`${t('Image')}`}>
            Image
        </PagePanel>
    )
}

export default ImagePage