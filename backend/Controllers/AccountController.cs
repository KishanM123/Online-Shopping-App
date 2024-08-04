using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingApp.Data; // Update with your actual namespace
using ShoppingApp.Models; // Update with your actual namespace
using System;
using System.Threading.Tasks;

namespace ShoppingApp.Controllers // Update with your actual namespace
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly ShoppingContext _context;

        public AccountController(ShoppingContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegistrationDto registrationDto)
        {
            // Check if username already exists
            if (await _context.Users.AnyAsync(u => u.Username == registrationDto.Username))
            {
                return BadRequest("Username already exists.");
            }

            // Create a new user instance
            var newUser = new User
            {
                FullName = registrationDto.FullName,
                DateOfBirth = registrationDto.DateOfBirth,
                Username = registrationDto.Username,
                PasswordHash = ComputeHash(registrationDto.Password) // Hash the password
            };

            // Save user to the database
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User registered successfully." });
        }

        private string ComputeHash(string input)
        {
            // Implement a secure hash function here
            using (var sha256 = System.Security.Cryptography.SHA256.Create())
            {
                var bytes = System.Text.Encoding.UTF8.GetBytes(input);
                var hash = sha256.ComputeHash(bytes);
                return Convert.ToBase64String(hash);
            }
        }
    }

    public class UserRegistrationDto
    {
        public string FullName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
