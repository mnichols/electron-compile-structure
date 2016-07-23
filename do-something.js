'use strict';

import { BrowserWindow } from 'electron'
import path from 'path'

export default {
    start(){
        let win = new BrowserWindow({
            width:400,height:400
        })
        win.loadURL(`file:///${path.resolve(__dirname, 'dummy.html')}`)
    }
}
