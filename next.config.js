module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return config;
  },
};
