import { Tag } from '../var/log-tag.ts';
import file from '../utils/file'


class ConsoleLogger {
  name: string;
  constructor(name?: string) { this.name = name || "console-logger"}

  debug(message: any) { 
    console.info(`${Tag.DEBUG} ${message}`);
  }
  info(message: any) { 
    console.info(`${Tag.INFO} ${message}`); 
  }
  notice(message: any) { 
    console.info(`${Tag.NOTICE} ${message}`);
  }
  warn(message: any) {
    console.error(`${Tag.WARN} ${message}`);
  }
  error(message: any) {
    console.error(`${Tag.ERROR} ${message}`);
  }
  fatal(message: any) {
    console.error(`${Tag.FATAL} ${message}`);
  }
}

export default ConsoleLogger;
