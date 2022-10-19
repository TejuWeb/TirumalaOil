using Microsoft.EntityFrameworkCore;
using TirumalaOil.Models;

namespace TirumalaOil.Data
{
    public class TirumalaDbContext : DbContext
    {

        public TirumalaDbContext(DbContextOptions option) : base(option)
        {

        }

        public DbSet<Product> Products { get; set; }

    }
}
