using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace Core.Rss
{
    public static class RssParser
    {
        public static IEnumerable<News> GetNews(XDocument document)
        {
            var nodes = document.Elements().Elements().Elements().Where(e => e.Name.LocalName == "item");

            var result = nodes.Select(x => new News
            {
                Title = x.GetElementValue("title"),
                Url = x.GetElementValue("link"),
                PublishedAt = x.GetElementValue("pubDate"),
                UrlToImage = x.ParseImageUrl(),
                Description = x.HasElementValue("description") ? x.GetElementValue("description").ParseHtmlString() : string.Empty,
            });

            return result;
        }

        private static string ParseHtmlString(this string htmlString)
        {
            if (string.IsNullOrEmpty(htmlString))
            {
                return htmlString;
            }

            var htmlDoc = new HtmlAgilityPack.HtmlDocument();
            htmlDoc.LoadHtml(htmlString);

            if (htmlDoc.DocumentNode == null)
            {
                return htmlString;
            }

            if (htmlDoc.DocumentNode.SelectSingleNode("//p[2]") != null)
            {
                return htmlDoc.DocumentNode.SelectSingleNode("//p[2]").InnerText;
            }
            else if (htmlDoc.DocumentNode.InnerText != null)
            {
                return htmlDoc.DocumentNode.InnerText;
            }

            return htmlString;
        }

        private static string ParseImageUrl(this XElement element)
        {
            var result = element.GetElementAttributeValue("thumbnail").Replace("thumbnail", "970x485");

            if (string.IsNullOrEmpty(result))
            {
                result = element.GetElementAttributeValue("enclosure");
            }

            return result;
        }

        private static string GetElementValue(this XElement element, string node)
        {
            return element.Elements().FirstOrDefault(e => e.Name.LocalName == node).Value;
        }

        private static bool HasElementValue(this XElement element, string node)
        {
            return element.Elements().Any(e => e.Name.LocalName == node);
        }

        private static string GetAttributeValue(this XElement element, string node)
        {
            return element.Elements().FirstOrDefault(e => e.Name.LocalName == node)?.FirstAttribute.Value;
        }

        private static string GetElementAttributeValue(this XElement element, string node)
        {
            return element.HasElementValue(node) ? element.GetAttributeValue(node) : string.Empty;
        }
    }
}
