const input = document.querySelectorAll('input')

for (let i = 0; i < input.length; i++) {
  let placeholder = input[i].placeholder
  input[i].addEventListener('focus',function () {
    input[i].setAttribute('placeholder','')
  })
  input[i].addEventListener('blur',function () {
    input[i].setAttribute('placeholder',placeholder)
  })
}

