const addBtn = document.querySelector("#add-list");
var userTask = document.querySelector("#text-area");
const listarea = document.querySelector(".checklist-section");
const deleteBtn = document.querySelector("#delete-img");
let checkboxId = 0;

addBtn.addEventListener("click", () => {
    let to_do_list = document.createElement("textarea");
    let input_type_checkbox = document.createElement("input");
    const edit = document.createElement("img");

    if (listarea.style.display == "none") {
        listarea.style.display = "flex";
        textManipulation(to_do_list, input_type_checkbox, edit);
    }
    else {
        if (userTask.value === "") {
            userTask.placeholder = "Enter Your Tasks";
        }
        else {
            textManipulation(to_do_list, input_type_checkbox, edit);
        }
    }
})





const textManipulation = (to_do_list, input_type_checkbox, edit) => {

    userTask.placeholder = "";
    listarea.appendChild(input_type_checkbox);
    input_type_checkbox.type = "checkbox";
    input_type_checkbox.id = checkboxId;
    checkboxId++;
    input_type_checkbox.classList.add("checkbox");


    listarea.appendChild(to_do_list);
    to_do_list.innerHTML = userTask.value;
    to_do_list.classList.add("checklist");
    userTask.value = "";


    input_type_checkbox.addEventListener("change", () => {
        if (input_type_checkbox.checked == true) {
            to_do_list.classList.add("strike");
        }
        else {
            to_do_list.classList.remove("strike");
        }
    })

    edit.src = "./edit.png";
    edit.style.cursor = "pointer";
    edit.style.width = "8%";
    edit.style.height = "8%";
    listarea.appendChild(edit);
    const edit_input = document.createElement("input");
    edit_input.type = "text";


    edit.addEventListener("click", () => {
        to_do_list.parentNode.replaceChild(edit_input, to_do_list);
        edit_input.classList.add("checklist");
        edit_input.style.fontWeight = "bold";
        edit_input.style.fontSize = "1.2rem";
        input_type_checkbox.addEventListener("change", () => {
            if (input_type_checkbox.checked == true) {
                edit_input.classList.add("strike");
            }
            else {
                edit_input.classList.remove("strike");
            }
        })
    })
}