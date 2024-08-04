// Data/ShoppingContext.cs
using Microsoft.EntityFrameworkCore;
using ShoppingApp.Models;

namespace ShoppingApp.Data
{
    public class ShoppingContext : DbContext
    {
        public ShoppingContext(DbContextOptions<ShoppingContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; } // Add this line
        public DbSet<Product> Products { get; set; }

        // Add other DbSet properties for your models
    }
}
