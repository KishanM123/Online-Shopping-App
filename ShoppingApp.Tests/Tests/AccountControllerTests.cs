// ShoppingApp.Tests/Tests/AccountControllerTests.cs
using Xunit;
using Moq;
using Microsoft.EntityFrameworkCore;
using ShoppingApp.Data;
using ShoppingApp.Controllers;
using ShoppingApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

public class AccountControllerTests
{
    private readonly AccountController _controller;
    private readonly ShoppingContext _context;

    public AccountControllerTests()
    {
        // Setup in-memory database
        var options = new DbContextOptionsBuilder<ShoppingContext>()
            .UseInMemoryDatabase(databaseName: "TestDatabase")
            .Options;

        _context = new ShoppingContext(options);

        // Seed the database with test data if necessary
        _context.Users.Add(new User
        {
            FullName = "Test User",
            DateOfBirth = new DateTime(1990, 1, 1),
            Username = "testuser",
            PasswordHash = ComputeHash("password")
        });
        _context.SaveChanges();

        _controller = new AccountController(_context);
    }

    private string ComputeHash(string input)
    {
        using (var sha256 = System.Security.Cryptography.SHA256.Create())
        {
            var bytes = System.Text.Encoding.UTF8.GetBytes(input);
            var hash = sha256.ComputeHash(bytes);
            return Convert.ToBase64String(hash);
        }
    }

    [Fact]
    public async Task Register_User_ShouldReturnOk()
    {
        // Arrange
        var newUser = new UserRegistrationDto
        {
            FullName = "New User",
            DateOfBirth = new DateTime(2000, 1, 1),
            Username = "newuser",
            Password = "newpassword"
        };

        // Act
        var result = await _controller.Register(newUser);

        // Assert
        Assert.IsType<OkObjectResult>(result);
    }

    [Fact]
    public async Task Register_DuplicateUsername_ShouldReturnBadRequest()
    {
        // Arrange
        var duplicateUser = new UserRegistrationDto
        {
            FullName = "Duplicate User",
            DateOfBirth = new DateTime(2000, 1, 1),
            Username = "testuser", // Existing username
            Password = "password"
        };

        // Act
        var result = await _controller.Register(duplicateUser);

        // Assert
        Assert.IsType<BadRequestObjectResult>(result);
    }
}
