using backend.Models;
using backend.DTOs.Ingredient;

namespace backend.Mappers
{
    public static class IngredientMappers
    {
        public static IngredientDTO ToIngredientDTO(this Ingredient ingredientModel){
            return new IngredientDTO
            {
                Id = ingredientModel.Id,
                Name = ingredientModel.Name,
                Description = ingredientModel.Description,
                Rating = ingredientModel.Rating,
                Label = ingredientModel.Label
            };
        }
    }
}