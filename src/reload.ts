// 加上开发环境的判断
// 最终打包时 tree shaking 会移除这段用不到的代码
if (import.meta.env.MODE === "development") {
    const ws = new WebSocket('ws://localhost:2333')
    ws.onmessage = (event) => {
        let msg = JSON.parse(event.data)
        if (msg === 'watch-build-ok') {
            window.location.reload()
        }
    }
}