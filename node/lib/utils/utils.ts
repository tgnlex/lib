
const noop = () => { return; };
const pass = () => { return true; };
const fail = () => { return false; };
const test = (thing: any) => {
  if (thing) { return true; }
  else return false;
}

interface IUtils {
  test: (thing: any) => boolean;
  noop: () => void;
  pass: () => boolean;
  fail: () => boolean;
}

const utils: IUtils = { 
  test: test, 
  noop: noop, 
  pass: pass, 
  fail: fail 
}

export default utils;
