const taskList = {
  data() {
    return {
      tasks: [],
      newTask: {},
    };
  },
  methods: {
    addTask(text) {
      if (text === undefined) {
        alert("Please enter a task");
        return;
      }

      const name = text.trim();
      if (name === "") {
        alert("Please enter a task");
        return;
      }

      this.tasks.push({
        name: name,
        completed: false,
      });
      this.newTask = {};
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
Vue.createApp(taskList).mount("#app");
