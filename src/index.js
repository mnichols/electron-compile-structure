'use strict';

import { app } from 'electron'
import something from './do-something.js'

app.on('ready', something.start)

