module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "nativewind/babel",
        {
          // Add any plugin options here, if needed
        },
      ],
    ],
  };
};
