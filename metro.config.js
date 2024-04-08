const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

module.exports = async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const { assetExts, sourceExts } = defaultConfig.resolver;

  // Add 'ttf' and 'otf' to the assetExts array to support custom fonts
  const config = {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: [...assetExts, 'ttf', 'otf', 'png'],
      sourceExts: [...sourceExts, "svg"]
    }
  };

  return mergeConfig(defaultConfig, config);
};
