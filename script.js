import { changeList, removeCommonItems, initBtns } from "/service/utilitis.js";

export let list1 = [1, 2, 3, 4];
export let list2 = [];
export let items = [];

export function renderLists() {
    list1.sort((a, b) => a - b);

    document.getElementById("list1").innerHTML = "";
    for (let i = 0; i < list1.length; i++) {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = `${list1[i]}`;
        checkbox.name = `${list1[i]}`;
        checkbox.id = `${list1[i]}`;

        checkbox.addEventListener("change", () => {
            changeList(list1[i]);
        });

        let label = document.createElement("label");
        label.htmlFor = `${list1[i]}`;
        label.className = `label${list1[i]}`;
        label.textContent = `${list1[i]}`;

        document.querySelector("#list1").append(label);
        document.querySelector(`.label${list1[i]}`).append(checkbox);
    }

    list2.sort((a, b) => a - b);

    document.getElementById("list2").innerHTML = "";
    for (let i = 0; i < list2.length; i++) {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = `${list2[i]}`;
        checkbox.name = `${list2[i]}`;
        checkbox.id = `${list2[i]}`;

        checkbox.addEventListener("change", () => {
            changeList(list2[i]);
        });

        let label = document.createElement("label");
        label.htmlFor = `${list2[i]}`;
        label.className = `label${list2[i]}`;
        label.textContent = `${list2[i]}`;

        document.querySelector("#list2").append(label);
        document.querySelector(`.label${list2[i]}`).append(checkbox);
    }
}
export function moveToList1() {
    list1.push(...items);
    items = [];
    list2 = removeCommonItems(list2, list1);
}

export function moveToList2() {
    list2.push(...items);
    items = [];
    list1 = removeCommonItems(list1, list2);
}

initBtns();
renderLists();
