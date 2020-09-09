
let sendMess = document.getElementById('sendMess')
sendMess.addEventListener ('submit', (e) => {
    e.preventDefault()
    const data = {
        name : sendMess.name.value.trim(),
        email : sendMess.email.value.trim(),
        message : sendMess.message.value.trim(),
    }
    alert("SMS sent successfully")
    localStorage.setItem('Message',JSON.stringify(data));
})