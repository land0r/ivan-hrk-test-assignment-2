# Awesome Motive Test Assignment

A responsive landing page built as a test assignment for Awesome Motive. This project utilizes modern tools like Gulp, Sass, and BrowserSync for an efficient and modular development workflow.

## Features

- Responsive design that adapts to desktop, tablet, and mobile screens.
- Dynamic `srcset` for responsive images.
- Modern CSS powered by Sass.
- Smooth animations triggered by user interaction.
- Automated build process using Gulp.

---

## Technologies Used

- **HTML5** for semantic markup.
- **Sass** for modular and maintainable CSS.
- **Gulp** for task automation.
    - File concatenation, CSS minification, and JavaScript uglification.
    - Image optimization using `gulp-imagemin`.
    - Browser auto-refresh with **BrowserSync**.

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 22 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/awesome-motive-test-assignment.git
   cd awesome-motive-test-assignment
   ```
2. Install dependencies:
    ```bash
   npm install
    ```
3.  Start the development server:
    ```bash
    npm run start
    ```

Available Scripts
- `npm run start`: Starts the development server with BrowserSync and watches for file changes.
- `npm run build`: Compiles and minifies all assets for production.
- `npm run watch`: Watches files for changes and rebuilds them automatically.

### Folder Structure:

```
awesome-motive-test-assignment/
├── assets/             # Icons and images
├── dist/               # Compiled and optimized files for deployment
├── src/                # Source files
│   ├── js/             # JavaScript files
│   └── scss/           # Sass stylesheets
├── .gitignore          # Ignore some folders and files for Git
├── gulpfile.js         # Gulp configuration
├── index.html          # HTML entry point
├── LICENSE.md          # GPL License text
├── package.json        # Node.js dependencies and scripts
├── package-lock.json   # Node.js locker dependencies and scripts
└── README.md           # Project documentation
```

### Development Workflow

- Run npm run start to launch a development server with live reloading.
- Modify files in the src/ directory.
- Gulp will automatically compile and move changes to the dist/ folder.
