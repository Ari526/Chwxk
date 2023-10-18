const mockData = [
  {
    id: "task-1",
    title: " 📃 To do",
    tasks: [
      {
        id: "task-1-1",
        title: "Learn JavaScript",
        icon: "profile-icon-1.png", // You can provide the image file path
        heading: "Task 1",
        description: "Learning JavaScript basics.",
      },
      {
        id: "task-1-2",
        title: "Learn Git",
        icon: "profile-icon-2.png", // You can provide the image file path
        heading: "Task 2",
        description: "Version control with Git.",
      },
      {
        id: "task-1-3",
        title: "Learn Python",
        icon: "profile-icon-3.png", // You can provide the image file path
        heading: "Task 3",
        description: "Python programming language.",
      },
    ],
  },
  {
    id: "task-2",
    title: " ✏️ In progress",
    tasks: [
      {
        id: "task-2-1",
        title: "Learn CSS",
        icon: "profile-icon-4.png", // You can provide the image file path
        heading: "Task 4",
        description: "Styling with CSS.",
      },
      {
        id: "task-2-2",
        title: "Learn Golang",
        icon: "profile-icon-5.png", // You can provide the image file path
        heading: "Task 5",
        description: "Getting started with Golang.",
      },
    ],
  },
  {
    id: "task-3",
    title: " ✔️ Completed",
    tasks: [
      {
        id: "task-3-1",
        title: "Learn HTML",
        icon: "profile-icon-6.png", // You can provide the image file path
        heading: "Task 6",
        description: "HTML web development.",
      },
    ],
  },
];

export default mockData;
