using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TirumalaOil.Models
{
    public partial class TirumalaDBContext : DbContext
    {
        public TirumalaDBContext()
        {
        }

        public TirumalaDBContext(DbContextOptions<TirumalaDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ProductInfo> ProductInfos { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=LAPTOP-31TOHAUJ;Database=TirumalaDB;Integrated Security=True;;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductInfo>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ProductInfo");

                entity.Property(e => e.MrpCase)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("MRP/Case");

                entity.Property(e => e.PackSize).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.PackType).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ProductCategory).HasMaxLength(50);

                entity.Property(e => e.ProductName).HasMaxLength(100);

                entity.Property(e => e.SalesType).HasMaxLength(50);

                entity.Property(e => e.Unit).HasMaxLength(20);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
