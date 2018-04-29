using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace challenge.Web.Controllers.subcategory
{
    [Route("/[controller]")]
    public class SubcategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}