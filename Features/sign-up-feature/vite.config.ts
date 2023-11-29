import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: [
        'src'
      ]
    })
  ],
  build: {
    outDir: 'lib',
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: [
        'es'
      ],
      fileName: 'main'
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-router',
        'react-router-dom',
        'react/jsx-runtime',
        'swr',
        '@apollo/client',
        '@mantine/core',
        '@mantine/dates',
        '@mantine/form',
        '@mantine/hooks',
        '@mantine/modals',
        '@mantine/notifications',
        '@mantine/spotlight',
        '@tabler/icons-react'
      ],
      input: Object.fromEntries(
        glob.sync('src/**/*.{ts,tsx}', {
          ignore: [
            'src/App.*',
            'src/vite-env.d.ts'
          ]
        }).map((file: string) => [
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    }
  }
});
