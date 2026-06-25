module.exports = function(eleventyConfig) {
  // Pass through the admin folder to allow CMS access
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Pass through the CSS assets
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Pass through images (including user-uploaded ones)
  eleventyConfig.addPassthroughCopy("src/images");

  // Format dates for display
  eleventyConfig.addFilter("readableDate", function(dateVal) {
    if (!dateVal) return "";
    const d = new Date(dateVal);
    // Adjust for time zone offset if needed, or format simply
    return d.toLocaleDateString("en-US", {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes" // relative to input
    },
    pathPrefix: "/business-website/",
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
