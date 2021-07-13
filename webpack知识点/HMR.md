### Hot Module Replacement 原理

webpack-dev-server会创建两个服务：提供静态资源的服务(express)和(Socket)服务(net.Socket);
express server负责直接提供静态资源的服务(打包后的资源直接被浏览器请求和解析)

### HMR Socket Server
是一个socket的长连接

长连接的好处是建立连接后双方可以通信(服务器可以直接发送文件到客户端);

当服务器监听到对应模块发生变化时，会生产两个文件.json(manifest文件)和.js文件(update chunk);

通过长连接，可以直接将这两个文件主动发送给客户端(浏览器);

浏览器拿到两个新的文件后，通过HMR runtime机制，加载这两个文件，并且针对修改的模块进行更新;
