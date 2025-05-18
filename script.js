const icons = document.querySelectorAll("#smallHeader img");
const contents = document.querySelectorAll('.active');

// isSecureContext.addEventListener('click', () => {
//     text.classList.toggle('active');
// });

icons.forEach( (icon,index) => {
    icon.addEventListener("click", () => { 
        const content = contents[index];    

        content.classList.toggle("display");

        if(icon.src.includes("icon-plus.svg")){
            icon.src = "/assets/images/icon-minus.svg"
        }else{
            icon.src = "/assets/images/icon-plus.svg";
        }
    })
})