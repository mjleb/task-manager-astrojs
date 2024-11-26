# Task Manager

![Project Status](https://img.shields.io/badge/status-in%20development-orange)  ![Frontend](https://img.shields.io/badge/frontend-CamelCase%2C%20Typescript%2C%20yarn%2C%20Astro%2C%20Svelte%2C%20Tailwind%20CSS-blueviolet) ![Backend](https://img.shields.io/badge/backend-CamelCase%2C%20Typescript%2C%20yarn%2C%20Astro%20Server%20Actions%2C%20Prisma%20%2B%20SQLite%2C%20Node.js-lightgreen) ![Database](https://img.shields.io/badge/database-SQLite-brightgreen) ![Testing](https://img.shields.io/badge/testing-Jest-yellow) ![Validation](https://img.shields.io/badge/validation-Zod-yellowgreen)


## Project Overview

Task Manager is a web application for managing tasks that allows users to create, view, update, and delete tasks. Tasks can be filtered by priority and due date, and searched by title or description. The application uses a tech stack that includes Astro, Svelte, Prisma, and SQLite.

This project was developed for educational purposes to learn modern web development technologies and server-side actions in Astro.

## Project Status

This project is currently under active development. Features may change and functionality might be incomplete. Contributions and feedback are welcome!

### Main Features

1. **Create Task**: Users can add new tasks by specifying parameters such as title, description, priority (low, medium, high), due date, and status (new, in progress, completed, active).
2. **View Tasks**: Users can view a list of tasks, navigate between pages with a default limit of 10 tasks per page, filter tasks by priority and due date, and search by title and description.
3. **Update Task**: Update task information by its unique identifier.
4. **Delete Task**: Delete a task by its unique identifier.

## Technologies

- **Astro**: Framework for building static websites with server actions support.
- **Svelte**: Frontend framework for creating components.
- **Prisma**: ORM for interacting with the SQLite database.
- **SQLite**: Local database.
- **Tailwind CSS**: Utility-first CSS framework for component styling.
- **Jest**: Testing framework for server actions.


## Installation and Usage

### Installation

To install the project dependencies, run the following command:

```bash
yarn install
```

### Development Server

To start the development server, run:

```bash
yarn dev
```

The development server will start on [http://localhost:4321/](http://localhost:4321/).

### Build for Production

To create a production build, run:

```bash
yarn build
```

### Preview Production Build

To preview the production build locally, run:

```bash
yarn preview
```

## Testing

Run the tests with the following command:

```bash
yarn test
```

## Author

 **Marina Lebedeva**

- GitHub: [github.com/mjleb](https://github.com/mjleb)
- Email: [marina@mj-dev.org]


## License

This project is licensed under the MIT License. For more information, see the LICENSE file.
