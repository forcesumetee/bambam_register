function isFieldEmpty(fieldName) {
    const value = document.getElementsByName(fieldName)[0].value;
    return value === '';
}

function isGenderSelected() {
    const genderOptions = document.querySelectorAll('input[name="gender"]');
    for (const option of genderOptions) {
        if (option.checked) {
            return true;
        }
    }
    return false;
}

function doPasswordsMatch() {
    const password = document.getElementsByName('password')[0].value;
    const retypePassword = document.getElementsByName('retypepassword')[0].value;
    return password === retypePassword;
}

function validateForm() {
    if (isFieldEmpty('firstname') ||
        isFieldEmpty('lastname') ||
        !isGenderSelected() ||
        isFieldEmpty('bday') ||
        isFieldEmpty('email') ||
        isFieldEmpty('username') ||
        isFieldEmpty('password') ||
        !doPasswordsMatch() ) {
        alert('รหัสผ่านไม่ตรงกัน');
        return false;
    }


    alert('สมัครเรียบร้อย');
    login();
    return true;
}

function login() {
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    window.location.href = `login.html?username=${username}&password=${password}`;
}
