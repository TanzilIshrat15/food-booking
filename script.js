
 document.addEventListener('DOMContentLoaded',function() {



const btncart = document.querySelector(".carticon");
const cart1 = document.querySelector(".cart");
const closes = document.querySelector(".close");


    btncart.addEventListener('click', () => {
        console.log("clicked");
        cart1.classList.remove('hidden');
});


closes.addEventListener('click',() =>{
    cart1.classList.add('hidden');
});



function loaditems(){
    loadcontent();
}

function loadcontent(){
const remove = document.querySelectorAll("carttrash");
remove.forEach((btn) =>{
    btn.addEventListener('click',removeitem)
});

}

function removeitem(){
        this.parentElement.remove();
}

});  


