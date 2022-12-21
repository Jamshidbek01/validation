let show = document.querySelector('.show1, .show2')
let a = true
show.addEventListener('click', function show() {
    if (a) {
        document.querySelector('.password1').type = 'text'
        document.querySelector('.show1').name = 'eye-off-outline'
    } else {
        document.querySelector('.password1').type = 'password'
        document.querySelector('.show1').name = 'eye-outline'
    }
    a = !a
})
let show2 = document.querySelector('.show2')
show2.addEventListener('click', function show2() {
    if (a) {
        document.querySelector('.password2').type = 'text'
        document.querySelector('.show2').name = 'eye-off-outline'
    } else {
        document.querySelector('.password2').type = 'password'
        document.querySelector('.show2').name = 'eye-outline'
    }
    a = !a

})
let btn = document.querySelector('.btn')
btn.addEventListener('click', function func(e) {
    let name1 = document.querySelector('.name').value.trim()
    let mail = document.querySelector('.mail').value.trim()
    let password1 = document.querySelector('.password1').value.trim()
    let password2 = document.querySelector('.password2').value.trim()
    e.preventDefault()
    if (name1.length <= 3) {
        document.querySelector('.valid-name').innerHTML = 'Ism no`tog`ri kiritilgan'
        document.querySelector('.name').style = 'box-shadow: 1px 3px 17px 13px rgba(255, 0, 0, 0.2);'
    } else {
        document.querySelector('.valid-name').innerHTML = ''
        document.querySelector('.name').style = 'box-shadow: 1px 3px 17px 13px rgba(49, 255, 0, 0.2);'
    }

    if (mail.length < 9) {
        document.querySelector('.valid-mail').innerHTML = 'Email no`tog`ri kiritilgan'
        document.querySelector('.mail').style = 'box-shadow: 1px 3px 17px 13px rgba(255, 0, 0, 0.2);'
    } else {
        document.querySelector('.valid-mail').innerHTML = ''
        document.querySelector('.mail').style = 'box-shadow: 1px 3px 17px 13px rgba(49, 255, 0, 0.2);'
    }

    if (password1.length < 8) {
        document.querySelector('.valid-pass1').innerHTML = 'Parol 8 tadan ko`p bo`lishi kerak'
        document.querySelector('.password1').style = 'box-shadow: 1px 3px 17px 13px rgba(255, 0, 0, 0.2);'
    } else if (password1.length <= 8) {
        document.querySelector('.valid-pass1').innerHTML = ''
        document.querySelector('.password1').style = 'box-shadow: 1px 3px 17px 13px rgba(49, 255, 0, 0.2);'
    }
    if (password1 == password2) {
        document.querySelector('.valid-pass2').innerHTML = ''
        document.querySelector('.password2').style = 'box-shadow: 1px 3px 17px 13px rgba(49, 255, 0, 0.2);'
    } else {
        document.querySelector('.valid-pass1').innerHTML = ''
        document.querySelector('.password1').style = 'box-shadow: 1px 3px 17px 13px rgba(49, 255, 0, 0.2);'
    }
    if (password2.length < 8) {
        document.querySelector('.valid-pass2').innerHTML = 'Parol 8 tadan ko`p bo`lishi kerak'
        document.querySelector('.password2').style = 'box-shadow: 1px 3px 17px 13px rgba(255, 0, 0, 0.2);'
    }
    if (password1 !== password2) {
        document.querySelector('.valid-pass2').innerHTML = 'Parol bir hilda emas!'
        document.querySelector('.password2').style = 'box-shadow: 1px 3px 17px 13px rgba(255, 0, 0, 0.2);'
    }
})
