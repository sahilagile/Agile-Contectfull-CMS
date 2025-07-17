/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTENTFUL_CMA_TOKEN: string;
  readonly VITE_CONTENTFUL_SPACE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
