const electron = require('electron')
const MixerDesktop = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 1280, height: 720, titleBarStyle:'hidden'})
    
  mainWindow.loadURL('https://mixer.com/',
    {webPreferences: {javascript: true}});

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

MixerDesktop.on('ready', createWindow)

MixerDesktop.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

MixerDesktop.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})