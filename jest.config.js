module.exports = {
    testEnvironment: 'jsdom',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
    // Outras configurações do Jest...
  };