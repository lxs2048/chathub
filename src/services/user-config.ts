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
