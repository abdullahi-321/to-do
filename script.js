import { database, get, child, ref, set } from './database.js';
import { id } from './id.js'

let main = document.querySelector('main');
let btn = document.getElementById('btn');
loadNotes()

btn.onclick = () => {
  event.preventDefault();
  createNote()
}

async function createNote() {
  let notes = await get(child(ref(database), id + '/')).then(snapshot => {
    return snapshot.val()
  })
  let note = document.getElementById('noteInp').value
  if (note == '') {
    alert('Blank note')
  } else {
    notes = [{
      index: getDate(),
      text: note
    }, ...notes];
    set(ref(database, id + '/'), notes)
    loadNotes()
  }
  document.getElementById('noteInp').value = ''
}

async function loadNotes() {
  main.innerHTML = ''
  let notes = await get(child(ref(database), id + '/')).then(snapshot => {
    return snapshot.val()
  })
  console.log(notes)
  notes.forEach(res => {
    if (res == '') {
      notes.splice(notes.indexOf(res), notes.indexOf(res))
      set(ref(database, id + '/'), notes)
    }
  })
  notes.forEach(note => {
    if (note == '' || note == 'hgfhfg') {
      return
    } else {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      let btn = document.createElement('button');
      div.classList.add(note.index)
      btn.innerHTML = '<i class="bx bx-trash" style="color: #ff0000"></i>'
      paragraph.innerHTML = note.text;
      btn.addEventListener('click', () => { delItem(note.index).toString() })
      div.appendChild(paragraph)
      div.appendChild(btn)
      main.appendChild(div)
    }
  })
}

async function delItem(par) {
  let notes = await get(child(ref(database), id + '/')).then(snapshot => {
    return snapshot.val()
  })
  notes.forEach(note => {
    if (note == '') {
      return
    } else {
      if (note.index == par) {
        notes.forEach(item => {
          if (item.index == par) {
            notes.splice(notes.indexOf(note), notes.indexOf(note), '')
            set(ref(database, id + '/'), notes)
          }
        })
      }
    }
  })
  loadNotes()
}


function getDate() {
  let date = new Date().getSeconds().toString() + new Date().getMinutes().toString() + new Date().getHours().toString() + new Date().getDay().toString() + new Date().getMonth().toString() + new Date().getFullYear().toString();
  return date
}

let addTask = document.querySelector('.addTask');
let form = document.querySelector('form');
let close = document.querySelector('form button')

addTask.onclick = () => {
  form.style.top = '5%'
}
close.onclick = () => {
  event.preventDefault()
  form.style.top = '-200%'
}