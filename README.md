# React Microfrontend Boilerplate

Welcome to the React Microfrontend Boilerplate! This project serves as a comprehensive starting point for building microfrontend applications using React and Vite. It includes both a host application and a remote application, allowing you to quickly set up and explore the microfrontend architecture.

## Features

- **Modern Frameworks:** Built with React and Vite for fast development and efficient bundling.
- **Microfrontend Architecture:** Includes a host app and a remote app to demonstrate a modular and scalable architecture.
- **Developer Experience:** Optimized for a smooth developer experience with hot module replacement (HMR) and fast builds.

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/react-microfrontend-boilerplate.git
    cd react-microfrontend-boilerplate
    ```

2. **Install dependencies:**

    ```sh
    # For host app
    cd host-app
    npm install

    # For remote app
    cd ../todo-components
    npm install
    ```

### Running the Applications

1. **Start the remote app:**

    ```sh
    cd host-app
    npm start
    npm run build
    npm run preview

    This will start the remote application on `http://localhost:SPECIFIED_VITE_PORT`.

2. **Start the host app:**

    ```sh
    cd ../host-app
    npm run dev
    ```

    This will start the remote application on `http://localhost:5173`.

## Project Structure

```plaintext
react-microfrontend-boilerplate/
├── host-app/             # Host application
│   ├── public/           # Public assets
│   ├── src/              # Source code
│   └── ...               # Configuration files
└── todo-components/      # Remote application
    ├── public/           # Public assets
    ├── src/              # Source code
    └── ...               # Configuration files
