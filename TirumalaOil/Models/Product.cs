namespace TirumalaOil.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string  ProductCategory{ get; set; }
        public string SalesType { get; set; }
        public int PackType { get; set; }
        public long PackSize { get; set; }
        public long MRPCase { get; set; }
        public string Unit { get; set; }


    }
}
