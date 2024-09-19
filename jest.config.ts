import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Usando `ts-jest` para transformar arquivos TypeScript
  },
  testEnvironment: "node", // Ambiente de teste configurado como Node.js
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Extensões de arquivos suportadas
  transformIgnorePatterns: ["/node_modules/"], // Ignora transformações em `node_modules`
  clearMocks: true, // Limpa os mocks automaticamente antes de cada teste
  coverageProvider: "v8", // Configura o provider de cobertura de código
};

export default config;
