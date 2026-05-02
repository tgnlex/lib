import { Tag } from '../var/log-tag.ts';
import file from '../utils/file'


class FileLogger {
  logfile: string;
  name: string;
  constructor(file?: string, name?: string) { 
    this.name = name || "file-logger"
    this.logfile = file || "default.log";
  }

  debug(message: string) { 
    file.write.log(this.logfile, `${Tag.DEBUG} ${message}`);
  }
  info(message: string) { 
    file.write.log(this.logfile, `${Tag.INFO} ${message}`); 
  }
  notice(message: string) { 
    file.write.log(this.logfile, `${Tag.NOTICE} ${message}`);
  }
  warn(message: string) {
    file.write.log(this.logfile, `${Tag.WARN} ${message}`);
  }
  error(message: string) {
    file.write.log(this.logfile, `${Tag.ERROR} ${message}`);
  }
  fatal(message: string) {
    file.write.log(this.logfile, `${Tag.FATAL} ${message}`);
  }
}

export default FileLogger;
