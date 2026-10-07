# Todo List

# Link


A simple Todo List application built with **React** and **Vite**.

This project was created to practice the fundamentals of React, including components, state management, props, event handling, forms, and CSS styling.

## Features

* Add new todo items
* Display todo items dynamically
* Manage todo data with React state
* Handle form submission
* Use reusable React components
* Custom CSS styling
* Simple and clean interface

## Tech Stack

* **React**
* **Vite**
* **JavaScript**
* **CSS**
* **HTML**

## Concepts Practiced

This project focuses on learning the core concepts of React:

* Functional components
* `useState`
* Props
* Event handling
* Controlled inputs
* Form submission
* `preventDefault()`
* Component composition
* Rendering lists with `.map()`

## Project Structure

```text
todo_list/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── ...
│
├── public/
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Components

The application is divided into smaller components to keep the code easier to understand and maintain.

```text
App
│
├── Title
├── FormArea
└── TodoList
```

### Title

Displays the title of the application.

### FormArea

Handles user input and form submission for adding a new todo.

### TodoList

Displays the todo items stored in the application state.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DGBao7/todo_list.git
cd todo_list
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will start the development server and provide a local URL, usually:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Purpose

This project is mainly a learning project for understanding how React applications are structured and how different components communicate with each other.

It is intentionally kept simple so that the core React concepts are easy to understand.

## Future Improvements

Possible future improvements include:

* Delete todo items
* Mark todos as completed
* Edit existing todos
* Save todos to local storage
* Add animations
* Improve responsive design

## Author

**DGBao7**

GitHub: https://github.com/DGBao7