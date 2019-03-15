using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace WhatCanIMake.Controllers
{
	[Route("api/[controller]")]
	public class RecipesController : Controller
	{
		private static Recipes[] Summaries = new[]
		{
			new Recipes{ Id =1, Name="Tomato Sandwich", Ingredients = new List<Ingredient>{new Ingredient{Name="Tomato" } } },
			new Recipes{ Id=2, Name="Khichdi", Recipe="Take half rice</br>Take half split green lentils - Urad</br>Put into a bowl and wash three times with water</br>Add water to the bowl which is double the size of the rice and lentils</br>Add Salt, Ghee, Hing and Hardar</br>Add to instant hotpot on the raised container</br>Add water inside the instant hotpot</br>Set instant hotpot to steam.</br>17-20 minutes, depending on size.",
				Ingredients = new List<Ingredient>{new Ingredient{Name="Rice" }, new Ingredient { Name = "Split Green Lentils" }, new Ingredient { Name = "Salt" }, new Ingredient { Name = "Ghee" }, new Ingredient { Name = "Hing" }, new Ingredient { Name = "Hardar" } } },

		};

		[HttpPost("[action]")]
		public IEnumerable<Recipes> Post([FromBody]string[] ingredients)
		{
			return Summaries.Where(x => x.Ingredients.Any(p => ingredients.Contains(p.Name)));
		}

		[HttpGet("[action]/{recipeId}")]
		public Recipes GetById(int recipeId)
		{
			return Summaries.FirstOrDefault(c => c.Id == recipeId);
		}
	}

	public class Recipes
	{
		public Recipes()
		{
			Ingredients = new List<Ingredient>();
		}
		public string Name { get; set; }
		public string Recipe { get; set; }
		public IEnumerable<Ingredient> Ingredients { get; set; }
		public int Id { get; set; }
	}

	public class Ingredient
	{
		public string Name { get; set; }
	}
}
