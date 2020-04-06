const arrayButtons = [
  { text: { eng: '`', rus: 'ё' }, wide: 'short', shiftText: { eng: '~', rus: 'Ё' }, keyCode: 192 },
  { text: { eng: '1', rus: '1' }, wide: 'short', shiftText: { eng: '!', rus: '!' }, keyCode: 49 },
  { text: { eng: '2', rus: '2' }, wide: 'short', shiftText: { eng: '@', rus: '"' }, keyCode: 50 },
  { text: { eng: '3', rus: '3' }, wide: 'short', shiftText: { eng: '#', rus: '№' }, keyCode: 51 },
  { text: { eng: '4', rus: '4' }, wide: 'short', shiftText: { eng: '$', rus: ';' }, keyCode: 52 },
  { text: { eng: '5', rus: '5' }, wide: 'short', shiftText: { eng: '%', rus: '%' }, keyCode: 53 },
  { text: { eng: '6', rus: '6' }, wide: 'short', shiftText: { eng: '^', rus: ':' }, keyCode: 54 },
  { text: { eng: '7', rus: '7' }, wide: 'short', shiftText: { eng: '&', rus: '?' }, keyCode: 55 },
  { text: { eng: '8', rus: '8' }, wide: 'short', shiftText: { eng: '*', rus: '*' }, keyCode: 56 },
  { text: { eng: '9', rus: '9' }, wide: 'short', shiftText: { eng: '(', rus: '(' }, keyCode: 57 },
  { text: { eng: '0', rus: '0' }, wide: 'short', shiftText: { eng: ')', rus: ')' }, keyCode: 48 },
  { text: { eng: '-', rus: '-' }, wide: 'short', shiftText: { eng: '_', rus: '_' }, keyCode: 189 },
  { text: { eng: '=', rus: '=' }, wide: 'short', shiftText: { eng: '+', rus: '+' }, keyCode: 187 },
  { text: { eng: 'Backspace', rus: 'Backspace' }, wide: 'wide', shiftText: { eng: 'Backspace', rus: 'Backspace' }, keyCode: 8 },
  { text: { eng: 'Tab', rus: 'Tab' }, wide: 'short', shiftText: { eng: 'Tab', rus: 'Tab' }, keyCode: 9 },
  { text: { eng: 'q', rus: 'й' }, wide: 'short', shiftText: { eng: 'Q', rus: 'Й' }, keyCode: 81 },
  { text: { eng: 'w', rus: 'ц' }, wide: 'short', shiftText: { eng: 'W', rus: 'Ц' }, keyCode: 87 },
  { text: { eng: 'e', rus: 'у' }, wide: 'short', shiftText: { eng: 'E', rus: 'У' }, keyCode: 69 },
  { text: { eng: 'r', rus: 'к' }, wide: 'short', shiftText: { eng: 'R', rus: 'К' }, keyCode: 82 },
  { text: { eng: 't', rus: 'е' }, wide: 'short', shiftText: { eng: 'T', rus: 'Е' }, keyCode: 84 },
  { text: { eng: 'y', rus: 'н' }, wide: 'short', shiftText: { eng: 'Y', rus: 'Н' }, keyCode: 89 },
  { text: { eng: 'u', rus: 'г' }, wide: 'short', shiftText: { eng: 'U', rus: 'Г' }, keyCode: 85 },
  { text: { eng: 'i', rus: 'ш' }, wide: 'short', shiftText: { eng: 'I', rus: 'Ш' }, keyCode: 73 },
  { text: { eng: 'o', rus: 'щ' }, wide: 'short', shiftText: { eng: 'O', rus: 'Щ' }, keyCode: 79 },
  { text: { eng: 'p', rus: 'з' }, wide: 'short', shiftText: { eng: 'P', rus: 'З' }, keyCode: 80 },
  { text: { eng: '[', rus: 'х' }, wide: 'short', shiftText: { eng: '{', rus: 'Х' }, keyCode: 219 },
  { text: { eng: ']', rus: 'ъ' }, wide: 'short', shiftText: { eng: '}', rus: 'Ъ' }, keyCode: 221 },
  { text: { eng: '\\', rus: '\\' }, wide: 'short', shiftText: { eng: '|', rus: '/' }, keyCode: 220 },
  { text: { eng: 'Del', rus: 'Del' }, wide: 'short', shiftText: { eng: 'Del', rus: 'Del' }, keyCode: 46 },
  { text: { eng: 'Caps Lock', rus: 'Caps Lock' }, wide: 'wide', shiftText: { eng: 'Caps Lock', rus: 'Caps Lock' }, keyCode: 20 },
  { text: { eng: 'a', rus: 'ф' }, wide: 'short', shiftText: { eng: 'A', rus: 'Ф' }, keyCode: 65 },
  { text: { eng: 's', rus: 'ы' }, wide: 'short', shiftText: { eng: 'S', rus: 'Ы' }, keyCode: 83 },
  { text: { eng: 'd', rus: 'в' }, wide: 'short', shiftText: { eng: 'D', rus: 'В' }, keyCode: 68 },
  { text: { eng: 'f', rus: 'а' }, wide: 'short', shiftText: { eng: 'F', rus: 'А' }, keyCode: 70 },
  { text: { eng: 'g', rus: 'п' }, wide: 'short', shiftText: { eng: 'G', rus: 'П' }, keyCode: 71 },
  { text: { eng: 'h', rus: 'р' }, wide: 'short', shiftText: { eng: 'H', rus: 'Р' }, keyCode: 72 },
  { text: { eng: 'j', rus: 'о' }, wide: 'short', shiftText: { eng: 'J', rus: 'О' }, keyCode: 74 },
  { text: { eng: 'k', rus: 'л' }, wide: 'short', shiftText: { eng: 'K', rus: 'Л' }, keyCode: 75 },
  { text: { eng: 'l', rus: 'д' }, wide: 'short', shiftText: { eng: 'L', rus: 'Д' }, keyCode: 76 },
  { text: { eng: ';', rus: 'ж' }, wide: 'short', shiftText: { eng: ':', rus: 'Ж' }, keyCode: 186 },
  { text: { eng: '"', rus: 'э' }, wide: 'short', shiftText: { eng: '"', rus: 'Э' }, keyCode: 222 },
  { text: { eng: 'Enter', rus: 'Enter' }, wide: 'wide', shiftText: { eng: 'Enter', rus: 'Enter' }, keyCode: 13 },
  { text: { eng: 'Shift', rus: 'Shift' }, wide: 'wide', shiftText: { eng: 'Shift', rus: 'Shift' }, keyCode: 16 },
  { text: { eng: 'z', rus: 'я' }, wide: 'short', shiftText: { eng: 'Z', rus: 'Я' }, keyCode: 90 },
  { text: { eng: 'x', rus: 'ч' }, wide: 'short', shiftText: { eng: 'X', rus: 'Ч' }, keyCode: 88 },
  { text: { eng: 'c', rus: 'с' }, wide: 'short', shiftText: { eng: 'C', rus: 'С' }, keyCode: 67 },
  { text: { eng: 'v', rus: 'м' }, wide: 'short', shiftText: { eng: 'V', rus: 'М' }, keyCode: 86 },
  { text: { eng: 'b', rus: 'и' }, wide: 'short', shiftText: { eng: 'B', rus: 'И' }, keyCode: 66 },
  { text: { eng: 'n', rus: 'т' }, wide: 'short', shiftText: { eng: 'N', rus: 'Т' }, keyCode: 78 },
  { text: { eng: 'm', rus: 'ь' }, wide: 'short', shiftText: { eng: 'M', rus: 'Ь' }, keyCode: 77 },
  { text: { eng: ',', rus: 'б' }, wide: 'short', shiftText: { eng: '<', rus: 'Б' }, keyCode: 188 },
  { text: { eng: '.', rus: 'ю' }, wide: 'short', shiftText: { eng: '>', rus: 'Ю' }, keyCode: 190 },
  { text: { eng: '/', rus: '.' }, wide: 'short', shiftText: { eng: '?', rus: ',' }, keyCode: 191 },
  { text: { eng: 'ᐃ', rus: 'ᐃ' }, wide: 'short', shiftText: { eng: 'ᐃ', rus: 'ᐃ' }, keyCode: 38 },
  { text: { eng: 'Shift', rus: 'Shift' }, wide: 'wide', shiftText: { eng: 'Shift', rus: 'Shift' }, keyCode: 1600 },
  { text: { eng: 'Ctrl', rus: 'Ctrl' }, wide: 'short', shiftText: { eng: 'Ctrl', rus: 'Ctrl' }, keyCode: 17 },
  { text: { eng: 'Win', rus: 'Win' }, wide: 'short', shiftText: { eng: 'Win', rus: 'Win' }, keyCode: 91 },
  { text: { eng: 'Alt', rus: 'Alt' }, wide: 'short', shiftText: { eng: 'Alt', rus: 'Alt' }, keyCode: 18 },
  { text: { eng: 'Space', rus: 'Space' }, wide: 'extra-wide', shiftText: { eng: 'Space', rus: 'Space' }, keyCode: 32 },
  { text: { eng: 'Alt', rus: 'Alt' }, wide: 'short', shiftText: { eng: 'Alt', rus: 'Alt' }, keyCode: 1800 },
  { text: { eng: 'ᐊ', rus: 'ᐊ' }, wide: 'short', shiftText: { eng: 'ᐊ', rus: 'ᐊ' }, keyCode: 37 },
  { text: { eng: 'ᐁ', rus: 'ᐁ' }, wide: 'short', shiftText: { eng: 'ᐁ', rus: 'ᐁ' }, keyCode: 40 },
  { text: { eng: 'ᐅ', rus: 'ᐅ' }, wide: 'short', shiftText: { eng: 'ᐅ', rus: 'ᐅ' }, keyCode: 39 },
  { text: { eng: 'Ctrl', rus: 'Ctrl' }, wide: 'short', shiftText: { eng: 'Ctrl', rus: 'Ctrl' }, keyCode: 1700 }
]

class Button {
  constructor (text, wide, shiftText, code) {
    this.node = null
    this.wide = wide
    this.text = text
    this.code = code
    this.shiftText = shiftText
  }

  init (lang) {
    this.node = document.createElement('button')
    this.node.classList.add('keyboard__key')
    this.node.innerText = this.text[lang]
    switch (this.wide) {
      case 'short': {
        this.node.classList.add('keyboard__key--short')
        break
      }
      case 'wide': {
        this.node.classList.add('keyboard__key--wide')
        break
      }
      case 'extra-wide': {
        this.node.classList.add('keyboard__key--extra-wide')
        break
      }
      default: break
    }
    return this.lang
  }
}

class Keyboard {
  constructor () {
    this.keys = []
    this.value = ''
    this.capsLock = false
    this.shift = false
    this.alt = false
    this.lang = 'eng'
  }

  init () {
    this.textArea = document.createElement('textarea')
    this.textArea.classList.add('textarea')

    const keyboard = document.createElement('div')
    keyboard.classList.add('keyboard')

    const keyboardKeys = document.createElement('div')
    keyboardKeys.classList.add('keyboard__keys')

    keyboardKeys.append(this.createKeys(this.lang))
    keyboard.append(keyboardKeys)
    document.body.append(this.textArea, keyboard)

    const TEXTAREA = document.querySelector('.textarea')
    TEXTAREA.innerText = this.value
    document.querySelectorAll('.keyboard__key').forEach(element => {
      switch (element.innerText) {
        case 'Space':
          element.addEventListener('click', () => {
            TEXTAREA.setRangeText(' ', TEXTAREA.selectionStart, TEXTAREA.selectionEnd)
            TEXTAREA.selectionStart++
            this.value = TEXTAREA.value
          })
          break
        case 'Backspace':
          element.addEventListener('click', () => {
            TEXTAREA.setRangeText('', TEXTAREA.selectionStart - 1, TEXTAREA.selectionEnd)
            this.value = TEXTAREA.value
          })
          break
        case 'Enter':
          element.addEventListener('click', () => {
            TEXTAREA.setRangeText('\n', TEXTAREA.selectionStart, TEXTAREA.selectionEnd)
            TEXTAREA.selectionStart++
            this.value = TEXTAREA.value
          })
          break
        case 'Tab':
          element.addEventListener('click', () => {
            TEXTAREA.setRangeText('     ', TEXTAREA.selectionStart, TEXTAREA.selectionEnd)
            TEXTAREA.selectionStart += 5
            this.value = TEXTAREA.value
          })
          break
        case 'Ctrl':
          break
        case 'Shift':
          element.addEventListener('mousedown', () => {
            this.shift = true
            this.toggleShift()
          })
          element.addEventListener('mouseup', () => {
            this.shift = false
            this.toggleShift()
          })
          break
        case 'Win':
        case 'Alt':
          break
        case 'Del':
          element.addEventListener('click', () => {
            TEXTAREA.setRangeText('', TEXTAREA.selectionStart, TEXTAREA.selectionEnd + 1)
            this.value = TEXTAREA.value
          })
          break
        case 'Caps Lock':
          element.classList.add('keyboard__key--activatable')
          element.addEventListener('click', () => {
            this.toggleCapsLock()
            if (this.capsLock) {
              element.classList.add('keyboard__key--active-caps')
            } else {
              element.classList.remove('keyboard__key--active-caps')
            }
          })
          break
        default:
          element.addEventListener('click', () => {
            this.value += this.capsLock ? element.innerText.toUpperCase() : element.innerText
            TEXTAREA.value = this.value
          })
          break
      }
    })
    document.addEventListener('keydown', (event) => {
      // console.log(event.keyCode)
      // console.log(event.location)
      let button
      if (event.code === 'AltRight') {
        button = this.keys.find(i => i.code === 1800)
      } else {
        if (event.code === 'ControlRight') {
          button = this.keys.find(i => i.code === 1700)
        } else {
          if (event.code === 'ShiftRight') {
            button = this.keys.find(i => i.code === 1600)
          } else {
            button = this.keys.find(i => i.code === event.keyCode)
          }
        }
      }
      if (button) {
        event.preventDefault()
        if (event.keyCode === 16) {
          this.shift = true
          this.toggleShift()
          button.node.classList.add('keyboard__key--active')
        } else {
          if (event.keyCode === 18) {
            this.alt = true
          }
          button.node.click()
          button.node.classList.add('keyboard__key--active')
        }
      }

      if (this.shift && this.alt) {
        this.changeLang()
      }
    })
    document.addEventListener('keyup', (event) => {
      // const button = this.keys.find(i => i.code === event.keyCode)
      let button
      if (event.code === 'AltRight') {
        button = this.keys.find(i => i.code === 1800)
      } else {
        if (event.code === 'ControlRight') {
          button = this.keys.find(i => i.code === 1700)
        } else {
          if (event.code === 'ShiftRight') {
            button = this.keys.find(i => i.code === 1600)
          } else {
            button = this.keys.find(i => i.code === event.keyCode)
          }
        }
      }
      if (button) {
        event.preventDefault()
        button.node.classList.remove('keyboard__key--active')
      }
      if (event.keyCode === 18) {
        this.alt = false
      }
      if (event.keyCode === 16) {
        this.shift = false
        this.toggleShift()
      }
    })
  }

  createKeys () {
    const fragment = document.createDocumentFragment()
    let line = document.createElement('div')
    line.classList.add('line')

    for (let i = 0; i < arrayButtons.length; i++) {
      const { text, wide, shiftText, keyCode } = arrayButtons[i]
      const currentButton = new Button(text, wide, shiftText, keyCode)
      currentButton.init(this.lang)
      line.append(currentButton.node)
      fragment.append(line)
      this.keys.push(currentButton)
      if (i === 13 || i === 28 || i === 41 || i === 54) {
        line = document.createElement('div')
      }
    }

    return fragment
  }

  toggleCapsLock () {
    this.capsLock = !this.capsLock
    document.querySelectorAll('.keyboard__key').forEach(element => {
      switch (element.innerText) {
        case 'Tab':
        case 'Ctrl':
        case 'Shift':
        case 'Win':
        case 'Alt':
        case 'Del':
        case 'Enter':
        case 'Space':
        case 'Backspace':
        case 'Caps Lock':
          break

        default:
          element.textContent = this.capsLock ? element.textContent.toUpperCase() : element.textContent.toLowerCase()
          break
      }
    })
  }

  toggleShift () {
    let i = 0
    document.querySelectorAll('.keyboard__key').forEach(element => {
      switch (element.innerText) {
        case 'Tab':
        case 'Ctrl':
        case 'Shift':
        case 'Win':
        case 'Alt':
        case 'Del':
        case 'Enter':
        case 'Space':
        case 'Backspace':
        case 'Caps Lock':
          i++
          break

        default:
          if (this.capsLock && this.shift) {
            element.textContent = this.keys[i].shiftText[this.lang].toLowerCase()
            i++
          } else {
            if (this.capsLock && !this.shift) {
              element.textContent = this.keys[i].text[this.lang].toUpperCase()
              i++
            } else {
              if (!this.capsLock && this.shift) {
                element.textContent = this.keys[i].shiftText[this.lang]
                i++
              } else {
                if (!this.capsLock && !this.shift) {
                  element.textContent = this.keys[i].text[this.lang]
                  i++
                }
              }
            }
          }
          break
      }
    })
  }

  changeLang () {
    if (this.lang === 'eng') {
      this.lang = 'rus'
    } else {
      this.lang = 'eng'
    }
    let i = 0
    document.querySelectorAll('.keyboard__key').forEach(element => {
      switch (element.innerText) {
        case 'Tab':
        case 'Ctrl':
        case 'Shift':
        case 'Win':
        case 'Alt':
        case 'Del':
        case 'Enter':
        case 'Space':
        case 'Backspace':
        case 'Caps Lock':
          i++
          break

        default:
          element.textContent = this.capsLock ? this.keys[i].text[this.lang].toUpperCase() : this.keys[i].text[this.lang]
          i++
          break
      }
    })
  }
}

window.onload = () => {
  const keyboard = new Keyboard()
  keyboard.init()
}
