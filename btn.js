const btns = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".model-btn");
const overlay = document.querySelector("#overlay");

btns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        document.querySelector(btn.dataset.target).classList.add("active");
    });
});


close_btns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        document.querySelector(btn.dataset.target).classList.remove("active");
        overlay.classList.remove("active");
    });
});


window.onclick = (e) => {
    if(e.target == overlay) {
        const models = document.querySelectorAll(".model");
        models.forEach((model) => model.classList.remove("active"));
        overlay.classList.remove("active");

    }
};