import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer() server;
  @SubscribeMessage('message')
  handleChatEvent(@MessageBody() data: string): string {
    console.log(data);
    this.server.emit('messages', data);
    return data + ' Hello';
  }
}
