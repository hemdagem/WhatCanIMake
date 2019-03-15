using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace WhatCanIMake.Controllers
{
	[Route("api/[controller]")]
	public class IngredientsController : Controller
	{
		private static string[] Summaries = new[]
		{
			"Tomato", "Onion", "Cheddar", "Rice", "Lemon", "Flour", "Chocolate", "Milk", "Pepper", "Lettuce", "Salt", "Ghee", "Split Green Lentils"
		};

		[HttpGet("[action]")]
		public IEnumerable<string> Get(string summary)
		{
			if(summary?.Trim().Length > 0)
			return Summaries.Where(x => x.ToLower().Contains(summary.ToLower()));

			return new string[0];
		}
	}
}
