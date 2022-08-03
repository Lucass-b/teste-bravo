let btn = document.querySelector(".contacts-btn");
let contacts_list = document.querySelector(".contacts-list");
btn.addEventListener("click", function () {
  contacts_list.classList.toggle("active");
  this.classList.toggle("active");
});
