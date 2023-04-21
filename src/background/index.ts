import Browser from 'webextension-polyfill'
import { getUserConfig, StartupPage } from '~services/user-config'

async function openAppPage() {
    // 如果打开过了，就把那个tab激活，需要获取到url得在permissions授权
    const tabs = await Browser.tabs.query({})
    const url = Browser.runtime.getURL('app.html')
    const tab = tabs.find((tab) => tab.url?.startsWith(url))
    if (tab) {
        await Browser.tabs.update(tab.id, { active: true })
        return
    }
    // 没有打开，指定跳转的hash路由
    const { startupPage } = await getUserConfig()
    const hash = startupPage === StartupPage.Home ? '' : `#/${startupPage}`
    await Browser.tabs.create({ url: `app.html${hash}` })
}

Browser.action.onClicked.addListener(() => {
    openAppPage()
})

Browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        openAppPage()
    }
})

Browser.commands.onCommand.addListener(async (command) => {
    console.debug(`Command: ${command}`)
    if (command === 'open-app') {
        openAppPage()
    }
})
