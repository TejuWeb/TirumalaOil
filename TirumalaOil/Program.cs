
using Microsoft.CodeAnalysis.Options;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Adding CORS Policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy",
        builder => builder.WithOrigins("https://localhost:44444"));
});

// Add services to the container.

builder.Services.AddControllersWithViews();
//builder.Services.AddDbContext<APIDBContext>(options =>
//{
 //   options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection"));

//});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

// Shows UseCors with name policy.
app.UseCors("MyPolicy");


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;



app.Run();
