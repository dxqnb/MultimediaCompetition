import io from 'socket.io-client'
// 链接 服务端
const socket = io('http://localhost:3002', {
    query: {},
    transports: ['websocket', 'polling'],
 
})
export default socket
