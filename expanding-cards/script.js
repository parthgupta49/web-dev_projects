const allImageContainers = document.querySelectorAll('.image-container');
allImageContainers.forEach((imageContainer) => {
    imageContainer.addEventListener('click',()=>{
        removeActiveFromAll();
        imageContainer.classList.add('active');
    })
})

function removeActiveFromAll(){
    allImageContainers.forEach((imageContainer)=>{
        imageContainer.classList.remove('active');
    });
}


