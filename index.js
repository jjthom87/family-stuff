document.addEventListener("click", function(e){
    for(let i = 0; i < document.getElementsByClassName("nav-button").length; i++){
        document.getElementsByClassName("nav-button")[i].style.color = "black";
    }
    if(e.target.classList.contains("nav-button")){
        if(e.target.classList.contains("active")){
            e.target.classList.remove("active")
            e.target.style.color = "black";
            if(e.target.textContent == "Family Tree"){
                document.getElementById("family-tree").style.display = "none";
            } else if (e.target.textContent == "Map"){
                document.getElementById("map").style.display = "none";
            } else {
                document.getElementById("family-history").style.display = "none";
            }
        } else {
            for(let i = 0; i < document.getElementsByClassName("nav-button").length; i++){
                if(document.getElementsByClassName("nav-button")[i].classList.contains("active")){
                    document.getElementsByClassName("nav-button")[i].classList.remove("active");
                }
            }
            e.target.classList.add("active");
            e.target.style.color = "blue";
            if(e.target.textContent == "Family Tree"){
                document.getElementById("family-tree").style.display = "block";
                document.getElementById("map").style.display = "none";
                document.getElementById("family-history").style.display = "none";
            } else if (e.target.textContent == "Map"){
                document.getElementById("family-tree").style.display = "none";
                document.getElementById("map").style.display = "block";
                document.getElementById("family-history").style.display = "none";
            } else {
                document.getElementById("family-tree").style.display = "none";
                document.getElementById("map").style.display = "none";
                document.getElementById("family-history").style.display = "block";
            }
        }
    } else if (e.target.id == "download-pdf-button"){
        fetch("/download-pdf")
        .then((response) => {
            let downloadWindow = window.open("https://froofydoog.com/api/download-pdf")
            setTimeout(() => {
                downloadWindow.close()
            },10000)
        });
    }
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            if(content.nextElementSibling){
                content.previousElementSibling.children[0].textContent = ">"
            } else {
                this.children[1].textContent = ">"
            }
        } else {
            content.style.display = "block";
            if(content.nextElementSibling){
                content.previousElementSibling.children[0].textContent = "V"
            } else {
                this.children[1].textContent = "V"
            }
        }
    });
}