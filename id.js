import { database, ref, set, get, child } from "./database.js";

let random = ''
for (let i = 0; i < 40; i++) {
  let characters = 'abcdefghijklmnopqrstuvwxyz123456789';
  let current = Math.floor(Math.random() * 33 + 1)
  random += characters[current]
}

let id = localStorage.getItem('id');

if (id == null) {
  localStorage.setItem('id', random)
  id = localStorage.getItem('id')
  set(ref(database, id + '/'), ['hgfhfg'])
}

export {id}