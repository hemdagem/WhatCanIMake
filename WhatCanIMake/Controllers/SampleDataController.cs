using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WhatCanIMake.Controllers
{
	[Route("api/[controller]")]
	public class SampleDataController : Controller
	{
		private static string[] Summaries = new[]
		{
			"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		[HttpGet("[action]")]
		public IEnumerable<string> WeatherForecasts(string summary)
		{
			if(summary != null && summary.Trim().Length > 0)
			return Summaries.Where(x => x.ToLower().Contains(summary.ToLower()));

			return new string[0];
		}

		public class WeatherForecast
		{
			public string DateFormatted { get; set; }
			public int TemperatureC { get; set; }
			public string Summary { get; set; }

			public int TemperatureF
			{
				get
				{
					return 32 + (int)(TemperatureC / 0.5556);
				}
			}
		}
	}
}
