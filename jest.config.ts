module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',  // This tells Jest to use ts-jest for .ts and .tsx files
    },
  };
  