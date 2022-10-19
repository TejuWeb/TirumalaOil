using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TirumalaOil.Data;

namespace TirumalaOil.Controllers
{
 
    [ApiController]
    [Route("api/products")]
    public class ProductsController : ControllerBase
    {
        private readonly TirumalaDbContext _tirumalaDbContext;
        public ProductsController(TirumalaDbContext tirumalaDbContext)
        {
            _tirumalaDbContext = tirumalaDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
        var products  = await _tirumalaDbContext.Products.ToListAsync();

            return Ok(products);
        }

    }
}
