function sendEmail() {
    first = document.getElementById("FirstName");
    last = document.getElementById("LastName");
    email = document.getElementById("Email");
    message = document.getElementById("Body");
    Email.send({
        Host: "smtp.gmail.com",
        Username: "e16.jmc@gmail.com",
        Password: "cahNe9-nyjbet-myvhif",
        To: 'e16.jmc@gmail.com',
        From: "e16.jmc@gmail.com",
        Subject: first+" "+last+" Send an message from chestnutsprogramming.dev",
        Body: email+"\n"+message,
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}

function iframeLoaded() {
    var iFrameID = document.getElementById('frame');
    if (iFrameID) {
        iFrameID.height = "";
        iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + 500 + "px";
    }
}