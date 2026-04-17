export default function(eleventyConfig) {
  // Expose environment variables to templates
  eleventyConfig.addGlobalData("env", {
    ENVIRONMENT: process.env.ENVIRONMENT || "test"
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch CSS/JS for changes
  eleventyConfig.addWatchTarget("src/assets/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
