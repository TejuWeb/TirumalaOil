using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TirumalaOil.Models;

namespace TirumalaOil.Controllers
{
    [Route("api/ProductInfo")]
    [ApiController]
    public class ProductInfoController : ControllerBase
    {
        [HttpGet]

        public IEnumerable<ProductInfo> ListOfProducts()
        {
            var productInformation = new List<ProductInfo>();
            using (var context = new TirumalaDBContext())
            {
                productInformation = context.ProductInfos.ToList();
            }
            return productInformation;
        }
    }
   }
