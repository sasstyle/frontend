/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ACCESS_KEY_ID: string
  readonly VITE_SECRET_ACCESS_KEY: string
  readonly VITE_BASE_URL: string
  NODE_ENV: 'development' | 'production'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// interface ImportMeta {
//   env: {
//     GITHUB_AUTH_TOKEN: string;
//     NODE_ENV: 'development' | 'production';
//     PORT?: string;
//     PWD: string;
//   };
// }
