
# Online Shopping App

## Introduction

The Online Shopping App is a full-stack web application that allows users to browse and purchase products online. The app is built using React and TypeScript for the frontend and ASP.NET Core with Entity Framework Core for the backend. The app provides a user-friendly interface for browsing products, managing a shopping cart, and checking out.

## Key Features

- **Frontend**: 
  - Built with React and TypeScript.
  - Responsive design for desktop and mobile views.
  - Dark and light theme toggle for user preferences.
  - Functional search bar to find products.
  - User authentication with sign-up and sign-in capabilities.

- **Backend**:
  - Built with ASP.NET Core and Entity Framework Core.
  - RESTful API to handle product and user operations.
  - SQL Server database for data storage.
  - Secure password hashing for user authentication.

## Advanced Features Implemented

1. **Theme Toggle**: Users can switch between light and dark themes.
2. **Containerization**: The app is containerized using Docker for easy deployment.
3. **Unit Tests**: Comprehensive unit tests for frontend components using Jest and React Testing Library.
6. **Continuous Integration**: Implemented CI/CD pipeline for automated testing and deployment.

## Highlight

One thing I'm extremly proud of is that I've managed to expand my skillset by constructing this project. I've learnt how to integrate dark/light theme, I've gained a stronger understanding of structuring my project in terms of the layout with regards to frontend and backend folders, and I expanded my skillset in using html in terms of structuring the online shoping system. 

## Setup Instructions

1. **Frontend**:
   - Navigate to the `frontend` directory.
   - Run `npm install` to install dependencies.
   - Run `npm run dev` to start the development server.

2. **Backend**:
   - Navigate to the `backend` directory.
   - Ensure you have .NET 6.0 SDK installed.
   - Run `dotnet build` to build the project.
   - Run `dotnet run` to start the backend server.

3. **Docker**:
   - Ensure Docker is installed and running.
   - Run `docker-compose up --build` in the root directory to start both frontend and backend services.

## Usage

- **Homepage**: Browse and search for products.
- **Cart**: Add products to the cart and proceed to checkout.
- **Account**: Sign up for a new account or sign in with existing credentials.

