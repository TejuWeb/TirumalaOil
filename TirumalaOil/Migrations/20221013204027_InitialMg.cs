using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TirumalaOil.Migrations
{
    public partial class InitialMg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductCategory = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SalesType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PackType = table.Column<int>(type: "int", nullable: false),
                    PackSize = table.Column<long>(type: "bigint", nullable: false),
                    MRPCase = table.Column<long>(type: "bigint", nullable: false),
                    Unit = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
