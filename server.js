var express = require('express');

var app = express();
app.use(express.static('./'));

app.get("/download-pdf", function(req,res){
    res.send("whatsup")
})

app.get("/api/download-pdf", function(req,res){
    let filename = "tomashefsky_family_history.pdf"
    const file = `${__dirname}/files/${filename}`;
    res.download(file, filename, (err) => {
        if (err) {
            console.error(err)
        }
    })
})

app.listen(3000);