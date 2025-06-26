# RESTful API Project

A simple RESTful API built with Node.js and Express, featuring EJS templating for views and a basic public stylesheet. This project demonstrates CRUD operations and serves as a boilerplate for similar web applications.

## Features

- RESTful routing (CRUD operations)
- EJS templating for dynamic HTML views
- Static file serving (CSS)
- Organized project structure

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/RESTfulApi.git
   cd RESTfulApi
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the server:**
   ```bash
   node index.js
   ```
   The server will typically run on `http://localhost:3000` (check your `index.js` for the exact port).

## Usage

- Access the home page at `http://localhost:3000/`
- Use the web interface to create, read, update, and delete resources
- API endpoints can be accessed via tools like Postman or curl

## Example API Endpoints

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| GET    | /         | List all items    |
| GET    | /new      | Form to add item  |
| POST   | /         | Create new item   |
| GET    | /:id      | Show item details |
| GET    | /:id/edit | Edit item form    |
| PUT    | /:id      | Update item       |
| DELETE | /:id      | Delete item       |

> Replace `:id` with the actual item ID.

## Folder Structure

```
RESTfulApi/
├── index.js            # Main server file
├── package.json        # Project metadata and dependencies
├── public/
│   └── style.css       # Stylesheet
├── views/
│   ├── edit.ejs        # Edit item view
│   ├── index.ejs       # List items view
│   ├── new.ejs         # New item form
│   └── show.ejs        # Show item details
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
