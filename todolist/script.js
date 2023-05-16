const taskInput = document.getElementById("task");
const addBtn = document.getElementById("liveToastBtn");
const list = document.getElementById("list");
const success = document.querySelector(".success");
const error = document.querySelector(".error");

//newElement() => yerine addTask eklendi html değiştirildi.
const addTask = () => {
  if (taskInput.value) {
    //li yaratma
    let li = document.createElement("li");
    li.innerText = taskInput.value;

    //tamamlama butonu ekleme
    let successBtn = document.createElement("button");
    successBtn.classList.add("done");
    successBtn.innerText = "Bitti";
    successBtn.addEventListener("click", () => {
      li.classList.add("bg-success");
    });
    li.appendChild(successBtn);

    //kaldırma butonu ekleme
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("iptal");
    closeBtn.innerText = "İptal";
    closeBtn.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(closeBtn);

    // li ekleme
    list.appendChild(li);

    //toast girdi 2 sn sonra çıktı çıktı
    success.classList.remove("hide");
    success.classList.add("show");
    setTimeout(() => {
      success.classList.remove("show");
      success.classList.add("hide");
    }, 1500);
  } else {
    //toast girdi 2 sn sonra çıktı çıktı
    error.classList.remove("hide");
    error.classList.add("show");
    setTimeout(() => {
      error.classList.remove("show");
      error.classList.add("hide");
    }, 1500);
  }
};
