import { useTranslation } from "react-i18next"
import PagePanel from "~components/Page"

function ChatPage() {
    const { t } = useTranslation()
    return (
        <PagePanel title={`${t('Chat')}`}>
            Chat
        </PagePanel>
    )
}

export default ChatPage