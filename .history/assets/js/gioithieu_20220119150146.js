// Sử lý chỗ history

const historyItems = document.querySelectorAll(".wine__history-item");
const historyContents = document.querySelectorAll(".wine__history-content");

[...historyItems].forEach(item => item.addEventListener("click",handleClick));

function handleClick(e){
    [...historyItems].forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");

    const customAtr = e.target.dataset. 
}