import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "~components/Button"
import PagePanel from "~components/Page"
import KDB from "~components/Settings/KDB"
import { getKeys, getVersion, createShortcuts } from '~utils'
function SettingPage() {
    const { t } = useTranslation()
    const [shortcuts, setShortcuts] = useState<string[]>([])
    useEffect(()=>{
        // 快捷键
        getKeys().then(shortcuts=>{
            setShortcuts(shortcuts)
        })
    },[])
    return (
        <PagePanel title={`${t('Settings')} (v${getVersion()})`}>
            <div className="flex flex-col gap-8 mt-3 pr-3">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <p className="font-bold mb-2 text-xl">{t('Shortcut to open this app')}</p>
                        <div className="flex flex-row gap-1">
                            {shortcuts.length ? shortcuts.map((s) => <KDB key={s} text={s} />) : 'Not set'}
                        </div>
                    </div>
                    <div>
                        <Button text={t('Change shortcut')} size="normal" onClick={createShortcuts} />
                    </div>
                </div>
            </div>
        </PagePanel>
    )
}

export default SettingPage