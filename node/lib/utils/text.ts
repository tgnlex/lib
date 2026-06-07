import { NL } from '../var/constants'

function newline() { return NL }

function char(idx: number, str: string) { 
  return str.charAt(idx);
}


function concat(base: string, strs: string | string[]) {
  if (Array.isArray(strs)) {
    let result = base;
    strs.forEach((str: string) => { result = result + str })
    return result;
  } else {
    return base + strs;
  }
}



interface Itext {
  concat: (base: string, strs: string | string[]) => string;
  char: (idx: number, str: string) => string;
  newline: () => string;
}

const text: Itext = {
  newline: newline
  concat: concat,
  char: char
}

export default text;
