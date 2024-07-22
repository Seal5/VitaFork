namespace backend.DTOs.Ingredient
{
    public class IngredientDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int Rating { get; set; }
        public int Label { get; set; }
    }
}