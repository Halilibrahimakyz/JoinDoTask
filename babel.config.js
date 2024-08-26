// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: [
//     'react-native-reanimated/plugin',
//   ],
// };
// babel.config.js
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            'moti/skeleton': 'moti/skeleton/react-native-linear-gradient',
          },
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
        'react-native-reanimated/plugin',
      ],
    ],
  }
}