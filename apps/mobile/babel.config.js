module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@": "./",
            "@data": "../../packages/data",
            "@theme": "../../packages/theme",
            "@core": "../../packages/core",
            "@ui": "../../packages/ui",
            "@utils": "../../packages/utils",
          },
        },
      ],
    ],
  };
};