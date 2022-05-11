const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;

login.addEventListener('click', () => {
    if (id.value == 'id') {
        if (password.value == '0000') {
            alert('관리자 로그인 성공')
            location.href = 'Setting.html';
        }
        else {
            alert('아이디나 비밀번호가 일치하지 않습니다.')
            errStack ++;
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }
})
