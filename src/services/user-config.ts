import Browser from 'webextension-polyfill'
import { defaults } from 'lodash-es'
export enum StartupPage {
    Home = 'home',
    Chat = 'chat',
    Image = 'image',
}
const userConfigWithDefaultValue = {
    startupPage: StartupPage.Home,
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