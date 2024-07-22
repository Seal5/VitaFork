using System;
using backend.Data;
using backend.Mappers; 
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("backend/ingredient")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public IngredientController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet] 

        public IActionResult GetALL()
        {
            var ingredients = _context.Ingredients.ToList()
             .Select(s => s.ToIngredientDTO());
            return Ok(ingredients);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var ingredient = _context.Ingredients.Find(id);

            if(ingredient == null)
            {
                return NotFound();
            }

            return Ok(ingredient);
        }
    }
}