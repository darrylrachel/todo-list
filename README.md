# To-Do List App

## Overview

This project is a basic To-Do List application built with React. The app allows users to:

- Add tasks to a list.
- Mark tasks as complete.
- Remove tasks from the list.

The project focuses on understanding core React concepts, such as state management, event handling, and component rendering. We will also write tests using Mocha and Chai to ensure our app functions correctly.

## Tools & Technologies

- **React:** For building the frontend of the application.
- **Mocha + Chai:** For writing and running tests.
- **JavaScript:** For programming logic..

## Objectives

1. **Create and manage tasks:** Learn how to capture user input and manipulate the state to manage tasks.
2. **Implement task completion:** Understand how to toggle styles and manage task completion.
3. **Test components:** Write tests to ensure the functionality of the app using Mocha and Chai.

---

### Detailed Breakdown of the To-Do List App

#### 1. **Setting Up the React Project**

**1.1 Install Node.js and Create React App:**

- Make sure you have Node.js installed. Create a new React project using Create React App:
  ```bash
  npx create-react-app todo-list-app
  cd todo-list-app
  ```

**1.2 Project Structure:**

- Your project will have a structure like this:
  ```
  todo-list-app/
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── App.js
  │   └── index.js
  ├── package.json
  ├── README.md
  └── test/
  ```

#### 2. **Building the To-Do List App**

**2.1 Create Components:**

- **TaskList Component:** Displays a list of tasks.
- **TaskItem Component:** Represents a single task.
- **AddTask Component:** Contains input for adding new tasks.

**2.2 TaskList Component:**

- Displays tasks and allows marking them as completed or removing them.
