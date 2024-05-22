document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleButton').addEventListener('click', () => {
      setupPopover();
    });
  });
  
  export function setupPopover() {
    let popover = document.getElementById("myPopover");
    if (popover.style.display === "none" || popover.style.display === "") {
      popover.style.display = "block";
    } else {
      popover.style.display = "none";
    }
  
    let buttonRect = document.getElementById('toggleButton').getBoundingClientRect();
    popover.style.top = `${buttonRect.top - popover.offsetHeight - 5}px`;
    popover.style.left = `${buttonRect.left}px`;
  }
  