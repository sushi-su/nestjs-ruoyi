export default {
  '*': 'prettier --write --cache --ignore-unknown',
  '*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}': 'eslint --cache --fix',
};
