const menuId = document.getElementById("menuId");
const navOn = ()=>{
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
};
menuId.addEventListener("click", navOn);

