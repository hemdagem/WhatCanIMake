using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace WhatCanIMake.Controllers
{
	[Route("api/[controller]")]
	public class RecipesController : Controller
	{
		private static string[] Summaries = new[]
		{
			"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		[HttpGet("[action]")]
		public IEnumerable<string> Get(string[] ingredients)
		{
			if(ingredients != null && ingredients.Length > 0)
			return Summaries.Where(x => x.Any(p=> ingredients.Contains(x)));

			return new string[0];
		}
	}
}
