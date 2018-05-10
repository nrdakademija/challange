using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using challenge.Application;
using challenge.Application.main.subcategories.dto;
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

        [HttpPost]
        public IActionResult PostSubcategory([FromBody] SubcategoryDto subcategory)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            try
            {
                _subcategoryService.PostSubcategory(subcategory);
                string newUri = Url.Link("Get", new { id = subcategory.Id });
                return Created(newUri, subcategory);

            }
            catch (System.Exception)
            {

            }
            return BadRequest();
        }

        [HttpPut("{id}")]
        public IActionResult PutSubcategory(int id, [FromBody] SubcategoryDto subcategory)
        {
            try
            {
                _subcategoryService.UpdateSubcategory(id, subcategory);
                string newUri = Url.Link("GetAllEmployees", new { id = subcategory.Id });
                return Created(newUri, subcategory);

            }
            catch (Exception ex)
            {

            }
            return BadRequest("");
        }
    

        [HttpDelete("{id}")]
        public IActionResult DeleteSubcategory(int id)
        {
            try
            {
                // var sub = _subcategoryService.GetSubcategory(id); --> To check if exsts
                _subcategoryService.DeleteSubcategory(id);
                return new NoContentResult();
            }
            catch (System.Exception)
            {    }
            return BadRequest();
        }
    }
}