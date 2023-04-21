import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import toast, { Toaster } from 'react-hot-toast'
import Button from "~components/Button"
import PagePanel from "~components/Page"
import Select from "~components/Select"
import KDB from "~components/Settings/KDB"
import { ChatGPTMode, StartupPage, UserConfig, getUserConfig, updateUserConfig } from "~services/user-config"
import { getKeys, getVersion, createShortcuts } from '~utils'
function SettingPage() {
    const { t } = useTranslation()
    const [shortcuts, setShortcuts] = useState<string[]>([])
    const [userConfig, setUserConfig] = useState<UserConfig | undefined>(undefined)
    const [dirty, setDirty] = useState(false)//是否修改过数据
    useEffect(() => {
        // 快捷键
        getKeys().then(shortcuts => {
            setShortcuts(shortcuts)
        })
        getUserConfig().then((config) => setUserConfig(config))
    }, [])
    const updateConfigValue = useCallback(
        (update: Partial<UserConfig>) => {
            setUserConfig({ ...userConfig!, ...update })
            setDirty(true)
        },
        [userConfig],
    )
    const save = useCallback(async () => {
        await updateUserConfig({ ...userConfig })
        toast.success(t('Saved'))
        setTimeout(() => location.reload(), 500)
    }, [userConfig])
    if (!userConfig) return null
    return (
        <PagePanel title={`${t('Settings')} (v${getVersion()})`}>
            <div className="flex flex-col gap-8 mt-3 pr-3">
                <div>
                    <p className="font-bold mb-2 text-xl">{t('Startup page')}</p>
                    <div className="w-[200px]">
                        <Select
                            options={[
                                { name: t('Welcome'), value: StartupPage.Home },
                                { name: t('Chat'), value: StartupPage.Chat },
                                { name: t('Image'), value: StartupPage.Image },
                            ]}
                            value={userConfig.startupPage}
                            onChange={(v) => updateConfigValue({ startupPage: v })}
                        />
                    </div>
                </div>
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
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl">ChatGPT</p>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10 mb-1">
                        {(Object.keys(ChatGPTMode) as (keyof typeof ChatGPTMode)[]).map((k) => (
                            <div className="flex items-center" key={k}>
                                <input
                                    id={k}
                                    type="radio"
                                    checked={userConfig.chatgptMode === ChatGPTMode[k]}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value={ChatGPTMode[k]}
                                    onChange={(e) => updateConfigValue({ chatgptMode: e.currentTarget.value as ChatGPTMode })}
                                />
                                <label htmlFor={k} className="ml-3 block text-sm font-medium leading-6">
                                    {k} {t('Mode')}
                                </label>
                            </div>
                        ))}
                    </div>
                    {userConfig.chatgptMode === ChatGPTMode.API ? (
                        <div>{ChatGPTMode.API} {t('Mode')}</div>
                    ) : (
                        <div>
                            {t('NoHave')}
                        </div>
                    )}
                </div>
                <Button color={dirty ? 'primary' : 'flat'} text={t('Save')} className="w-fit mt-10 mb-5" onClick={save} />
                <Toaster position="top-right" />
            </div>
        </PagePanel>
    )
}

export default SettingPage
