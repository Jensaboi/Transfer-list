import { items, moveToList1, moveToList2, renderLists } from "../script.js";

export function changeList(item) {
    if (items.includes(item)) {
        let itemToRemove = items.indexOf(item);
        items.splice(itemToRemove, 1);
    } else {
        items.push(item);
    }
}

export function removeCommonItems(removeFrom, checkWith) {
    return removeFrom.filter((item) => !checkWith.includes(item));
}

export function initBtns() {
    document.getElementById("move-to-list2").addEventListener("click", () => {
        moveToList2();
        renderLists();
    });

    document.getElementById("move-to-list1").addEventListener("click", () => {
        moveToList1();
        renderLists();
    });
}
