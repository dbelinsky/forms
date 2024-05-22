document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleButton').addEventListener('click', function() {
        setupPopover();
    });
});

export function setupPopover() {
    var popover = document.getElementById("myPopover");
    if (popover.style.display === "none" || popover.style.display === "") {
        popover.style.display = "block";
    } else {
        popover.style.display = "none";
    }

    var buttonRect = document.getElementById('toggleButton').getBoundingClientRect();
    popover.style.top = (buttonRect.top - popover.offsetHeight - 5) + 'px';
    popover.style.left = buttonRect.left + 'px';
}
