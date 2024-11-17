# Random Cat Image App

This is a simple web application built with **Astro** that displays a random cat image. The app is designed with Tailwind CSS for styling and responsive design.

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg               # The favicon for the application
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # The main layout for the app
│   └── pages/
│       └── index.astro           # The homepage of the app
└── package.json                  # Project metadata and dependencies
```

- **`public/`**: Contains static assets like the favicon.
- **`src/`**: Contains the source code.
  - **`layouts/`**: Contains the layout files.
  - **`pages/`**: Contains the pages of the application, in this case, just the `index.astro` file for the homepage.
- **`package.json`**: Contains the project's dependencies and configuration.

## 🛠️ Technologies Used

- **Astro**: A modern framework for building fast websites. We use Astro for building the static pages and managing the layout of the app.
- **Tailwind CSS**: A utility-first CSS framework used for styling the application with a responsive design.
- **JavaScript**: For dynamically updating the cat image when the button is clicked.

## 🖼️ Features

- Displays a random cat image fetched from `https://cataas.com/cat`.
- The layout is mobile-first and responsive, ensuring the image looks great on all screen sizes.

## 📦 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** (for managing dependencies)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/random-cat-image-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd random-cat-image-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Your application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the app for production, run:

```bash
npm run build
```

This will create a static version of the site in the `dist/` directory, ready to be deployed.

## 🧑‍💻 Contributing

Feel free to open issues and submit pull requests if you'd like to contribute to the project. If you find any bugs or have suggestions for improvements, don't hesitate to reach out!

## 📜 License

This project is open source and available under the [MIT License](LICENSE).