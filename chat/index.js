import Chat from './lib/Chat.js'

import dotenv from 'dotenv'

dotenv.config()

new Chat(process.env.PORT || 8002)
