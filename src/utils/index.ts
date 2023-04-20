import Browser from 'webextension-polyfill'

export function getVersion() {
  return Browser.runtime.getManifest().version
}
