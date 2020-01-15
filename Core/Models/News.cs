﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
	public class News
	{
		public string Title { get; set; }
		public string Url { get; set; }
		public string UrlToImage { get; set; }
		public string Description { get; set; }
		public string PublishedAt { get; set; }
	}
}
