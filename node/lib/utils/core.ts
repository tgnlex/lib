

const noop = () => { return; };
const pass = () => { return true; };
const fail = () => { return false; };

function test (thing: any) {
  if (thing) { return true; }
  else { return false };
}

const core = {
  noop, pass, fail, test 
}


export { noop, pass, fail, test }
export default core;
