import { defineConfig } from 'vite'

//essa configuracao esta dizendo pro teste rodar 

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
})