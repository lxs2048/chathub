import Browser from 'webextension-polyfill'
import { defaults } from 'lodash-es'
export enum StartupPage {
    Home = 'home',
    Chat = 'chat',
    Image = 'image',
}
export enum ChatGPTMode {
    API = 'api',
    Webapp = 'webapp',
}
const userConfigWithDefaultValue = {
    openaiApiHost: 'https://api.openai.com',
    startupPage: StartupPage.Home,
    chatgptMode: ChatGPTMode.API
}
export type UserConfig = typeof userConfigWithDefaultValue

export async function getUserConfig(): Promise<UserConfig> {
    const result = await Browser.storage.sync.get(Object.keys(userConfigWithDefaultValue))
    const conf = defaults(result, userConfigWithDefaultValue)
    // console.log(conf);
    return conf
}

export async function updateUserConfig(updates: Partial<UserConfig>) {
    await Browser.storage.sync.set(updates)
    for (const [key, value] of Object.entries(updates)) {
        if (value === undefined) {
            await Browser.storage.sync.remove(key)
        }
    }
}