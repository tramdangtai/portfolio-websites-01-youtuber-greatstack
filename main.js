// ABOUT SECTION
// 1. Get HTML element
const tabLinks = document.querySelector(".tab__link")
const tabContents = document.querySelectorAll(".about__tabs")

tabLinks.addEventListener("click", (e) => {
    // Nếu phần tử được click KHÔNG có dataset.id thì bỏ qua
    if (!e.target.dataset.id) return;
    // Nếu phần tử được click có dataset.id thì chạy tiếp code bên dưới
    Array.from(tabLinks.children).forEach((item) => {
        if (item.dataset.id === e.target.dataset.id) {
            item.classList.add("active__link");
        } 
        else {
            item.classList.remove("active__link");
        }
    });
    tabContents.forEach((item) => {
        if (item.id === e.target.dataset.id) {
            item.classList.add("active__tab");}
        else {item.classList.remove("active__tab");
        }
    });
});

// MENU SIDEBAR
const sidebar = document.querySelector(".sideBar")
const iconOpen = document.querySelector(".iconOpenSideBar")
const iconClose = document.querySelector(".iconCloseSideBar")

iconClose.addEventListener("click", () => {
    sidebar.style.display = "none";
});
  iconOpen.addEventListener("click", () => {
    sidebar.style.display = "block";
});

// FORM SECTION
const scriptURL = 'https://script.google.com/macros/s/AKfycbzdF_mE0UQa5s7zJ3ld8thfNxRq4VyJF8YYcP-lru2M0WCcqDIV_EsuptmloJlBw1dr/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully. Thanks you!"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})