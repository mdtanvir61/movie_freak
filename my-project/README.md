# Movie API React Project

This project is a React application that fetches and displays movie information from The Movie Database (TMDb) API. It features a user-friendly interface that allows users to browse popular, upcoming, and top-rated movies.

## Project Structure

```
my-project
├── src
│   ├── App.jsx                # Main entry point of the application with routing setup
│   ├── App.css                # Styles for the main application layout
│   ├── components              # Contains all React components
│   │   ├── Navbar              # Navbar component for navigation
│   │   │   ├── Navbar.jsx      # Navbar component definition
│   │   │   └── Navbar.css      # Styles for the Navbar component
│   │   ├── MovieList          # Component for displaying popular movies
│   │   │   ├── MovieList.jsx   # MovieList component definition
│   │   │   ├── MovieList.css   # Styles for the MovieList component
│   │   │   ├── MovieCard.jsx    # MovieCard component for individual movie display
│   │   │   └── MovieCard.css    # Styles for the MovieCard component
│   │   ├── UpcomingMovies      # Component for displaying upcoming movies
│   │   │   ├── UpcomingMovies.jsx # UpcomingMovies component definition
│   │   │   └── UpcomingMovies.css # Styles for the UpcomingMovies component
│   │   └── TopRatedMovies      # Component for displaying top-rated movies
│   │       ├── TopRatedMovies.jsx # TopRatedMovies component definition
│   │       └── TopRatedMovies.css # Styles for the TopRatedMovies component
│   └── assets                  # Contains image assets used in the application
│       ├── fire.png           # Fire emoji image for Navbar
│       ├── glowing-star.png    # Star image for movie ratings
│       └── partying-face.png    # Party emoji image for Navbar
├── package.json                # npm configuration file with dependencies and scripts
├── README.md                   # Documentation for the project
└── index.html                  # Main HTML file serving the React application
```

## Features

- **Movie Browsing**: Users can view popular, upcoming, and top-rated movies.
- **Responsive Design**: The application is designed to be responsive and user-friendly on various devices.
- **Dynamic Fetching**: Movie data is fetched dynamically from the TMDb API.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd my-project
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Usage

- Navigate through the application using the Navbar to view different movie categories.
- Click on a movie card to view more details on TMDb.

## Acknowledgments

- This project utilizes The Movie Database (TMDb) API for fetching movie data.
- Special thanks to the creators of React and the libraries used in this project.