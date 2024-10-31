// alert("test");

let x;
const toast = document.getElementById("toast");
function showToast() {
  clearTimeout(x); // 셋타임 아웃을 취소
  toast.style.transform = "translateX(0)";
  x = setTimeout(() => {
    toast.style.transform = "translateX(400px)";
  }, 3000);
}
function closeToast() {
  toast.style.transform = "translateX(400px)";
}
