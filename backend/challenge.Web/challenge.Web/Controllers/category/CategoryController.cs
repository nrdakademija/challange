using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using challenge.Application.main;
using Microsoft.AspNetCore.Mvc;

namespace challenge.Web.Controllers.category
{
    [Route("/[controller]")]
    public class CategoryController : Controller
    {
        protected readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var categories = _categoryService.GetAllCategories();
            return Ok(categories);

        }
    }
}