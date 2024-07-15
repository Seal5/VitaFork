using System;
using backend.Data;
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
            var ingredients = _context.Ingredients.ToList();

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