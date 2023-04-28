import { useState } from "react";
import Browser from 'webextension-polyfill'
import cx from 'classnames'
import "./content.scss"
function App() {
  const [isHovered, setHovered] = useState(false);
  function handleMouseEnter() {
    setHovered(true);
  }
  function handleMouseLeave() {
    setHovered(false);
  }
  const addIframe = ()=>{
    const htmlRoot = document.querySelector("html");
    const Iframe = document.createElement("iframe");
    const id = "openai-reader-drawer";
    var iframeURL = Browser.runtime.getURL('app.html');
    Iframe.id = id;
    Iframe.className = id;
    Iframe.src = iframeURL;
    Iframe.style.cssText = "position: fixed !important; top: 0; right: 0; width: 360px; height: 100%; border: none; z-index: 2147483647; overflow: hidden;";
    if(htmlRoot){
      htmlRoot.append(Iframe)
    }
  }

  return (
    <div
      className="openai-indicator"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={addIframe}
    >
      <div className="openai-indicator-arrow">
        <div
          className={cx(
            isHovered ? 'openai-indicator-icon-s' : 'openai-indicator-icon-h',
          )}
        ></div>
      </div>
    </div>
  )
}

export default App