module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-native-reanimated|react-native-gesture-handler|react-router-native)',
  ],
  setupFiles: ['./jest/jest.setup.js'],
};
