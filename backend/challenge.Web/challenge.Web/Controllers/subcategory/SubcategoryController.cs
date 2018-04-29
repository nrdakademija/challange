using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using challenge.Application;
using Microsoft.AspNetCore.Mvc;

namespace challenge.Web.Controllers.subcategory
{
    [Route("/[controller]")]
    public class SubcategoryController : Controller
    {
        protected readonly ISubcategoryService _subcategoryService;
        public SubcategoryController(ISubcategoryService subcategoryService)
        {
            _subcategoryService = subcategoryService;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var subcategories = _subcategoryService.GetAllSubCategories();
            return Ok(subcategories);

        }
    }
}