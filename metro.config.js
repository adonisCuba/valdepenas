const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  "svg",
];

module.exports = defaultConfig;

// module.exports = (() => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = getDefaultConfig(__dirname);
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-svg-transformer"),
//     },
//     resolver: {
//       assetExts: assetExts.filter((ext) => ext !== "svg"),
//       sourceExts: [...sourceExts, "svg"],
//     },
//   };
// })();
