module.exports = {
  // tell Jest to handle `*.vue` files
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^~/(.*)$': '<rootDir>/',
    '^~~/(.*)$': '<rootDir>/$1',
  },
  transform: {
    //   process js with `babel-jest`
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
}
