module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Convert files JS/JSX
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  };
  