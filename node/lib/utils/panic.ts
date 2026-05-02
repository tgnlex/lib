import ConsoleLogger from '../modules/cons-logger.ts';
import FileLogger from '../modules/file-logger';
import process from 'process';

function panic(error: string, logger?: FileLogger | ConsoleLogger) {
  if (logger) {
    logger.fatal('PANIC ' + error)
    process.exit(1);
  } else {
    console.error('PANIC ' + error)
    process.exit(1);
  }
}

export default panic;
