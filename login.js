function checkLogin() {
    // ดึงค่า username และ password จาก URL
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const password = urlParams.get('password');

    // ดึงค่าที่ผู้ใช้กรอกในฟอร์ม
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementsByName('password')[0].value;

    // เปรียบเทียบค่า username และ password
    if (enteredUsername === username && enteredPassword === password) {
        // ถ้าตรงกันให้เข้าสู่ระบบ
        alert('เข้าสู่ระบบสำเร็จ!');
        return true;
    } else {
        // ถ้าไม่ตรงให้แสดง alert และไม่เปลี่ยนหน้า
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        return false;
    }
}
