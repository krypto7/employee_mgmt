const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstName: "Aarav", // Added firstName with an Indian name
    tasks: [
      {
        taskTitle: "Prepare sales report",
        taskDescription: "Compile the sales data for Q4.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        dueDate: "2024-12-30",
        category: "Reports",
        taskNumber: 2, // taskNumber for active task
      },
      {
        taskTitle: "Team meeting",
        taskDescription: "Attend the monthly team meeting.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        dueDate: "2024-12-10",
        category: "Meetings",
        taskNumber: 1, // taskNumber for completed task
      },
      {
        taskTitle: "Customer follow-up",
        taskDescription: "Follow up with potential leads.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        dueDate: "2024-12-15",
        category: "Customer Service",
        taskNumber: 3, // taskNumber for failed task
      },
      {
        taskTitle: "Prepare annual budget",
        taskDescription: "Compile the budget for the upcoming year.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        dueDate: "2024-12-31",
        category: "Finance",
        taskNumber: 4, // taskNumber for active task
      },
    ],
    taskCount: {
      active: 2, // 2 active tasks
      newTask: 2, // 2 new tasks
      completed: 1, // 1 completed task
      failed: 1, // 1 failed task
    },
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Ishaan", // Added firstName with an Indian name
    tasks: [
      {
        taskTitle: "Inventory check",
        taskDescription: "Verify the inventory levels in the warehouse.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        dueDate: "2024-12-28",
        category: "Logistics",
        taskNumber: 2, // taskNumber for active task
      },
      {
        taskTitle: "Website update",
        taskDescription: "Update product descriptions on the website.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        dueDate: "2024-12-18",
        category: "Marketing",
        taskNumber: 1, // taskNumber for completed task
      },
      {
        taskTitle: "Staff onboarding",
        taskDescription: "Onboard new hires.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        dueDate: "2024-12-25",
        category: "HR",
        taskNumber: 3, // taskNumber for failed task
      },
    ],
    taskCount: {
      active: 1, // 1 active task
      newTask: 1, // 1 new task
      completed: 1, // 1 completed task
      failed: 1, // 1 failed task
    },
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Diya", // Added firstName with an Indian name
    tasks: [
      {
        taskTitle: "Software update",
        taskDescription:
          "Ensure all systems are updated with the latest software.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        dueDate: "2024-12-29",
        category: "IT",
        taskNumber: 2, // taskNumber for active task
      },
      {
        taskTitle: "Budget proposal",
        taskDescription: "Prepare the budget proposal for next year.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        dueDate: "2024-12-12",
        category: "Finance",
        taskNumber: 1, // taskNumber for completed task
      },
      {
        taskTitle: "Performance reviews",
        taskDescription: "Schedule and conduct performance reviews.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        dueDate: "2024-12-20",
        category: "HR",
        taskNumber: 3, // taskNumber for failed task
      },
      {
        taskTitle: "Network setup",
        taskDescription: "Set up new network infrastructure.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        dueDate: "2024-12-30",
        category: "IT",
        taskNumber: 4, // taskNumber for active task
      },
    ],
    taskCount: {
      active: 2, // 2 active tasks
      newTask: 2, // 2 new tasks
      completed: 1, // 1 completed task
      failed: 1, // 1 failed task
    },
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstName: "Ravi", // Added firstName with an Indian name
    tasks: [
      {
        taskTitle: "Market research",
        taskDescription: "Analyze the current market trends.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        dueDate: "2024-12-31",
        category: "Research",
        taskNumber: 2, // taskNumber for active task
      },
      {
        taskTitle: "Social media post",
        taskDescription: "Create and publish a post for the holiday season.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        dueDate: "2024-12-24",
        category: "Marketing",
        taskNumber: 1, // taskNumber for completed task
      },
      {
        taskTitle: "SEO audit",
        taskDescription: "Conduct an audit of website SEO.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        dueDate: "2024-12-29",
        category: "Marketing",
        taskNumber: 3, // taskNumber for active task
      },
    ],
    taskCount: {
      active: 2, // 2 active tasks
      newTask: 2, // 2 new tasks
      completed: 1, // 1 completed task
      failed: 0, // 0 failed tasks
    },
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstName: "Priya", // Added firstName with an Indian name
    tasks: [
      {
        taskTitle: "System audit",
        taskDescription: "Conduct a comprehensive system audit.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        dueDate: "2024-12-27",
        category: "IT",
        taskNumber: 2, // taskNumber for active task
      },
      {
        taskTitle: "Client presentation",
        taskDescription:
          "Prepare the presentation for the upcoming client meeting.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        dueDate: "2024-12-21",
        category: "Sales",
        taskNumber: 1, // taskNumber for completed task
      },
      {
        taskTitle: "Training session",
        taskDescription:
          "Attend the professional development training session.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        dueDate: "2024-12-14",
        category: "Training",
        taskNumber: 3, // taskNumber for failed task
      },
      {
        taskTitle: "Cloud migration",
        taskDescription: "Migrate systems to the cloud.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        dueDate: "2024-12-30",
        category: "IT",
        taskNumber: 4, // taskNumber for active task
      },
    ],
    taskCount: {
      active: 2, // 2 active tasks
      newTask: 2, // 2 new tasks
      completed: 1, // 1 completed task
      failed: 1, // 1 failed task
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  // if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
  //   setLocalStorage();
  // }
  return {
    employees: JSON.parse(localStorage.getItem("employees")),
    admin: JSON.parse(localStorage.getItem("admin")),
  };
};
