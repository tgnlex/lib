import type { Request } from 'express';

class RequestClient { 
  ip: any;
  agent: any;
  constructor(req: Request) {
    this.ip = req.socket.remoteAddress;
    this.agent = req.headers['user-agent'];
  }
}

export default RequestClient;
