'use strict'

const { app, BrowserWindow } = require('electron')

app.on('beofre-quit', () => {
    console.log('Saliendo..')
})

app.on('ready', () => {
    let win = new BrowserWindow()

    win.on('closed', () =>{
        win = null
        app.quit()
    })
})

