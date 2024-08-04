# backend/Dockerfile
# Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory
WORKDIR /src

# Copy the project file and restore dependencies
COPY ShoppingApp.csproj ./
RUN dotnet restore

# Copy the entire source code
COPY . .

# Build the application
RUN dotnet publish -c Release -o /app

# Use the official .NET runtime image to run the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0

# Set the working directory
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app .

# Expose the port your application runs on
EXPOSE 5000

# Start the application
ENTRYPOINT ["dotnet", "ShoppingApp.dll"]
