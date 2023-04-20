import Browser from 'webextension-polyfill'

// 获取当前版本号
export function getVersion() {
  return Browser.runtime.getManifest().version
}
// 获取当前设置快捷键
export async function getKeys() {
  try {
    const commands = await Browser.commands.getAll()
    let keys: string[] = []
    for (const c of commands) {
      if (c.name === 'open-app' && c.shortcut) {
        if(Array.isArray(c.shortcut)){
          keys = c.shortcut
        }else{
          keys = [c.shortcut]
        }
      }
    }
    return keys
  } catch (error) {
    return []
  }
}
// 打开设置快捷键页面
export function createShortcuts(){
  Browser.tabs.create({ url: 'chrome://extensions/shortcuts' })
}