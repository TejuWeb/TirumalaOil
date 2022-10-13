using System;
using System.Collections.Generic;

namespace TirumalaOil.Models
{
    public partial class ProductInfo
    {
        public int ProductId { get; set; }
        public string? ProductName { get; set; }
        public string? ProductCategory { get; set; }
        public string? SalesType { get; set; }
        public decimal? PackType { get; set; }
        public decimal? PackSize { get; set; }
        public decimal? MrpCase { get; set; }
        public string? Unit { get; set; }
    }
}
