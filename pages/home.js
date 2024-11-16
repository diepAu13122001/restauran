import Nav from "../components/nav.js";
import Footer from "../components/footer.js";
import Login from "./login.js";
import app from "../app.js";
import { database } from "../data/firebase-app.js";
import {
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

export default class Home {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.nav = new Nav();
    this.footer = new Footer();
  }
  async render(mainContainer) {
    // add nav
    this.nav.render(mainContainer);
    // tao main tag
    const main = document.createElement("main");
    main.classList.add("container");

    // add task form ------------------------------------
    const addTaskForm = document.createElement("form");
    addTaskForm.innerHTML = `
      <div class="mb-3">
        <label for="task" class="form-label">Add task</label>
        <input
          type="text"
          class="form-control"
          id="task"
          name="task"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" class="btn btn-primary" id="add-task-btn">Submit</button>`;
    const _this = this;
    addTaskForm.addEventListener("click", async function (event) {
      // get button add
      const add_btn = event.target.closest("#add-task-btn");
      if (add_btn) {
        await _this.addTask();
      }
    });
    // add vao main
    main.appendChild(addTaskForm);
    // bat su kien

    // list task -----------------------------------------------
    const pre = document.createElement("pre");
    main.appendChild(pre);

    const taskList = document.createElement("div");
    taskList.classList.add("list-group");
    taskList.id = "task_list";
    await this.getTasks();
    taskList.innerHTML = this.$taskList.join(" ");

    // add vao main
    main.appendChild(taskList);

    // add main
    mainContainer.appendChild(main);
    // add footer
    this.footer.render(mainContainer);
  }

  async getTasks() {
    // todo
    // get all task list in firestore
    const querySnapshot = await getDocs(collection(database, "tasks"));
    const results = [];
    querySnapshot.forEach((doc) => {
      if (doc.data()["created_by"] === this.currentUser.uid) {
        // results.push(doc);
        // doi lai thanh string
        let str = "";
        switch (doc.data()["status"]) {
          case "cancel":
            str += `<a
        class="list-group-item list-group-item-action disabled" id="${doc.id}"
        aria-disabled="true">${doc.data()["name"]}</a>`;
            break;
          case "finished":
            str += `<a class="list-group-item list-group-item-secondary" id="${
              doc.id
            }">${doc.data()["name"]}</a>`;
            break;
          default:
            str += `<a href="#" class="list-group-item list-group-item-action" id="${
              doc.id
            }">${doc.data()["name"]}</a>`;
            break;
        }
        results.push(str);
      }
    });
    this.$taskList = [...results];
  }

  async addTask() {
    // todo
    // get data from add task form
    const task_name = document.getElementById("task").value.trim();
    try {
      const docRef = await addDoc(collection(database, "tasks"), {
        created_at: Date.now(),
        created_by: this.currentUser.uid,
        name: task_name,
        status: "due",
      });
      console.log("Document written with ID: ", docRef.id);
      // load lai danh sach task
      this.getTasks();
      print(this.$taskList);
      document.getElementById("task_list").innerHTML = this.$taskList.join(" ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}