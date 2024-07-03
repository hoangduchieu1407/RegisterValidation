function BaoDongDo(input, message) {
  let parent = input.parentElement;
  parent.querySelector("small").innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}

function ThongBaoHoanThanh(input, message) {
  let parent = input.parentElement;
  parent.querySelector("small").innerText = message;
  parent.classList.remove("error");
  parent.classList.add("success");
}
