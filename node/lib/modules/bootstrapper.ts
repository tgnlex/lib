import type { Express } from 'express';
import express from 'express';

type Global = { key: string; value: string | number | boolean | null };
interface IConfig {
  middleware: Function[];
  plugins: Function[];
  globals: Global[];
}

class Bootstrapper {
  server: Express; 
  config: IConfig;

  constructor(config: IConfig) {
    this.server = express();
    this.config = config;
  }

  bootstrap() {
    const { middleware, plugins, globals } = this.config;
    this.server.disable('x-powered-by');
    middleware.forEach((mw: Function) => this.server.use(mw));
    plugins.forEach((plug: Function) => this.server.use(plug));
    globals.forEach((glob: Global) => this.server.set(glob.key, glob.value))
  }

  protocol() { this.server.get('app.protocol')}
  loglevel() { this.server.get('app.loglevel')}
  version() { this.server.get('app.version')}
  port() { this.server.get('app.port')}
  host() { this.server.get('app.host')}
  env() { this.server.get('app.env')}
  production() { this.server.get('app.production')}
  development() { this.server.get('app.development')}


}

export default Bootstrapper;
