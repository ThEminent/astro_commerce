document.querySelector("#cart-btn").addEventListener("click", function(){
    modal_display = document.querySelector("#modal").style.display;
    if(modal_display == "none"||modal_display == "")
        document.querySelector("#modal").style.display = "block";
    else
        document.querySelector("#modal").style.display = "none";
});

document.querySelector("#modal-bg").addEventListener("click", function(){
    document.querySelector("#modal").style.display = "none";
});