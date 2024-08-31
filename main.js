const { app, BrowserWindow, Menu } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        title: "电棍活字印刷 - 桌面版"
    })

    win.loadFile('otto-hzys/dist/index.html')
}

Menu.setApplicationMenu(null)

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})