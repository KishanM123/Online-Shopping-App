-- CreateUsersTable.sql

-- This script creates the Users table in the database.
-- To execute this script, run it in SQL Server Management Studio or using a command-line tool.

CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    FullName NVARCHAR(100) NOT NULL,
    DateOfBirth DATE NOT NULL,
    Username NVARCHAR(50) UNIQUE NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL
);
