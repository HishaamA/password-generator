document.getElementById('btn').addEventListener('click', () => { 
    const inputLength = document.getElementById('input-length').value;
    const password = generatePassword(inputLength);
    document.getElementById('output').innerHTML = password;
    })
    function generatePassword(length = 8) {
    let password = '';
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = length;
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < passwordLength; i++) {
    password += chars[array[i] % chars.length];
    }
    return password;
    }

document.getElementById('copy').addEventListener('click', () => {
if (document.getElementById('output').innerText === "") {
alert("No password to copy!");
throw Error("No password to copy!");
}
const password = document.getElementById('output').innerText;
copyToClipboard(password);
})
function generatePassword(length = 8) {
let password = '';
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = length;
const array = new Uint32Array(length);
window.crypto.getRandomValues(array);
for (let i = 0; i < passwordLength; i++) {
password += chars[array[i] % chars.length];
}
return password;
}
function copyToClipboard(myText) {
navigator.clipboard.writeText(myText)
.then(res => alert("Copied to clipboard"))
.catch(err => alert("Copy failed: " + err))
}

