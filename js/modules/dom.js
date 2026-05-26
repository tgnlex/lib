

export const $ = (item) => document.querySelector(item);

export function show(element) { element.hidden = false;}
export function hide(element) { return element.hidden = true; }
export function apppend(container, item) { container.appendChild(item);}
export function insert(container, html) { container.innerHTML = html;}
export function addClass(element, classes) { element.classList.add(classes); };
export function classes(element) { return element.classList };;


