import Bootstrapper from './modules/bootstrapper.ts';
import FileLogger  from './modules/file-logger.ts';
import ConsoleLogger from './modules/cons-logger.ts';
import RequestClient from './modules/req-client.ts'
import panic from './utils/panic.ts';
import utils from './utils/utils.ts';
import file from './utils/file.ts';
import text from './utils/text.ts';

const lib = {
  Bootstrapper,
  RequestClient,
  ConsoleLogger,
  FileLogger,
  utils,
  panic,
  file,   
  text, 
}

/*** UTILITIES ***/ 
export { file, text, utils }
/*** MODULES ***/
export { FileLogger, ConsoleLogger }
/*** FUNCTIONS ***/ 
export { panic }

/*** DEFAULT ***/
export default lib;
