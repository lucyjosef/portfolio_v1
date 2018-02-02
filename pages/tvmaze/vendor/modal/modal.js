var showModal = document.querySelector('[data-modal="show"]');
var parentModal = document.querySelector('.parentModal');
var childModal = document.querySelector('.childModal');
var textModal = document.querySelector('.textModal');

function modal(args) {
    parentModal.style.backgroundColor = args.parentModal.backgroundColor ? args.parentModal.backgroundColor : "grey";
    
    childModal.style.backgroundColor = args.childModal.backgroundColor ? args.childModal.backgroundColor : "darkgreen";
    
    for (var i = 0; i < childModal.children.length; i++) {
        var currentTag = childModal.children[i].tagName;
        if(args.content[currentTag]) {
            childModal.children[i].style.color = args.content[currentTag].color;
        } else {
            debugger;
        }
    }
}

showModal.addEventListener('click', function(){
    //myModal = document.querySelector('.childModal');
    //myModal.classList.toggle('visible');
    parentModal.style.display = 'block';
});

parentModal.addEventListener('click', function(event){
    if(event.target == this) {
        parentModal.style.display = 'none';
        debugger;
    }
});
