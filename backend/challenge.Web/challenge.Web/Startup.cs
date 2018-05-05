using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using challenge.Application.automapper;
using challenge.Application.main.users;
using challenge.EF;
using challenge.EF.repositories;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using challenge.EF.entities;
using challenge.Application.main;
using challenge.Application.main.categories;
using challenge.Application.main.subcategories;
using challenge.Application;
using challenge.Application.main.challenges;
using challenge.Application.main.userChallenges;

namespace challenge.Web
{
    public class Startup
    {
        IConfigurationRoot _config;
        private IHostingEnvironment _env;
        public IConfiguration _configuration { get; }

        public Startup(IHostingEnvironment env, IConfiguration configuration)
        {
            var builder = new ConfigurationBuilder()
                //konfiguracinis failas
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            _env = env;
            _config = builder.Build();
            _configuration = configuration;

            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(x => x.AddProfile(new MappingsProfile()));
            //uzregistruojam konteksto klase
            services.AddDbContext<challengeContext>(options =>
            options.UseSqlServer(_configuration.GetConnectionString("ChallengeDatabase")));

            services.AddScoped<IUsersRepository, UsersRepository>();
            services.AddScoped<IUsersService, UsersService>();

            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<ICategoryService, CategoryService>();

            services.AddScoped<ISubcategoryRepository, SubcategoryRepository>();
            services.AddScoped<ISubcategoryService, SubcategoryService>();

            services.AddScoped<IChallengeRepository, ChallengeRepository>();
            services.AddScoped<IChallengeService, ChallengeService>();

            services.AddScoped<IUserChallengeRepository, UserChallengeRepository>();
            services.AddScoped<IUserChallengesService, UserChallengesService>();

            services.AddCors();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(builder =>
                builder.WithOrigins("http://localhost:4200")
           .AllowAnyHeader()
           .AllowAnyMethod());


            app.UseMvc();
        }
    }
}
