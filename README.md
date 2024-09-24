## Just Another Text Editor (JATE) - PWA

![License](https://img.shields.io/badge/license-MIT-green)

### Description

**Just Another Text Editor (JATE)** is a Progressive Web Application (PWA) that allows users to create notes or code snippets with or without an internet connection. The app can be installed directly to the user's device, works offline, and saves content to the browser's IndexedDB for persistent storage. The project demonstrates the use of IndexedDB, service workers, and Webpack to create an offline-first PWA with data persistence.

---

### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

---

### Installation

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Meadoughnut/JATE--Just-Another-Text-Editor.git
   ```

2. Navigate into the project directory:
   ```bash
   cd JATE--Just-Another-Text-Editor
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run start
   ```

5. To build the project for production:
   ```bash
   npm run build
   ```

---

### Usage

- Upon starting the app, you can use the text editor to create notes or code snippets.
- The content is automatically saved when the window loses focus or when you close the browser.
- The app can be installed as a PWA for offline use by clicking the **Install** button that appears in the browser.
- You can access your saved notes anytime, even without an internet connection.

### Deployment

This application is deployed live on Render. You can access it here:
- **Deployed URL**: [https:render](#)

---

### Features

- Progressive Web App (PWA)
  - Installable as a native app.
  - Works offline using service workers.
  - Caches pages and static assets for offline access.
  
- IndexedDB Integration
  - Content is automatically saved to the browser’s IndexedDB.
  - Content persists between sessions, even after closing the browser.

- Webpack Configuration
  - Uses Webpack to bundle JavaScript and CSS.
  - Service workers and manifest files are generated with Workbox plugins.

---

### Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Webpack**
- **Workbox (Service Workers, Asset Caching)**
- **IndexedDB** for data persistence.
- **idb** (A lightweight wrapper for IndexedDB)
- **Babel** for transpiling modern JavaScript.
- **Node.js & Express** for serving the application.
- **Render** for deployment.

---

### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

### Contributing

If you would like to contribute, feel free to fork the repository and submit a pull request!

---

### Questions?

For any questions or issues, feel free to reach out!

- GitHub: [Here is my Github account](https://github.com/Meadoughnut)
- Email: [Here is my email account](mailto:meadinmenbere488@gmail.com)

---
