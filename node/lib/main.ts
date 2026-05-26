import Bootstrapper from './modules/bootstrapper.ts';
import FileLogger  from './modules/file-logger.ts';
import ConsoleLogger from './modules/cons-logger.ts';
import RequestClient from './modules/req-client.ts'
import utils from './utils/index.ts';

const lib = {
  Bootstrapper,
  RequestClient,
  ConsoleLogger,
  FileLogger,
  utils,
}


/*** DEFAULT ***/
export default lib;
