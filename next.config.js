module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["raw.githubusercontent.com", "pokedex-react-mui.netlify.app","leonidasesteban.github.io"],
  },
};

module.exports = {
  images: {
    domains: [
      "raw.githubusercontent.com",
      "pokedex-react-mui.netlify.app",
      "leonidasesteban.github.io",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      type: "asset/resource",
    });
    return config;
  },
};

// module.exports = {
//   module: {
//     rules: [
//       {
//       test: /\.(woff|woff2|eot|ttf|otf)$/,
//       use: ['file-loader'],
//     },
//     ],
//   },
// };
