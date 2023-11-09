const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

const tailwindPreset = require('../../../libs/client/tailwind-preset/tailwind.config.preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindPreset],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
