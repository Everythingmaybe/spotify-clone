/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'sp-',
  theme: {
    fontFamily: {
      body: 'var(--sp-font-family)',
      title: 'var(--sp-font-family-title)',
    },
    textColor: {
      'color-base': 'var(--sp-text-base)',
      'color-subdued': 'var(--sp-text-subdued)',
      'color-bright-accent': 'var(--sp-text-bright-accent)',
      'color-negative': 'var(--sp-text-negative)',
      'color-warning': 'var(--sp-text-warning)',
      'color-positive': 'var(--sp-text-positive)',
      'color-announcement': 'var(--sp-text-announcement)',
      'color-current': 'currentColor',
    },
    backgroundColor: {
      base: 'var(--sp-background-base)',
      highlight: 'var(--sp-background-highlight)',
      press: 'var(--sp-background-press)',
      'elevated-base': 'var(--sp-background-elevated-base)',
      'elevated-highlight': 'var(--sp-background-elevated-highlight)',
      'elevated-press': 'var(--sp-background-elevated-press)',
      'tinted-base': 'var(--sp-background-tinted-base)',
      'tinted-highlight': 'var(--sp-background-tinted-highlight)',
      'tinted-press': 'var(--sp-background-tinted-press)',
      'unsafe-for-small-text-base':
        'var(--sp-background-unsafe-for-small-text-base)',
      'unsafe-for-small-text-highlight':
        'var(--sp-background-unsafe-for-small-text-highlight)',
      'unsafe-for-small-text-press':
        'var(--sp-background-unsafe-for-small-text-press)',
      current: 'currentColor',
    },
    spacing: {
      1: 'var(--sp-space-1)',
      2: 'var(--sp-space-2)',
      3: 'var(--sp-space-3)',
      4: 'var(--sp-space-4)',
      5: 'var(--sp-space-5)',
      6: 'var(--sp-space-6)',
    },
    borderRadius: {
      1: 'var(--sp-radius-1)',
      2: 'var(--sp-radius-2)',
      full: 'var(--sp-radius-full)',
    },
    fontSize: {
      h1: ['var(--sp-fz-h1)', { fontWeight: '900' }],
      h2: ['var(--sp-fz-h2)', { fontWeight: '700' }],
      h3: ['var(--sp-fz-h3)', { fontWeight: '700' }],
      'subtitle-1': ['var(--sp-fz-subtitle-1)', { fontWeight: '700' }],
      'subtitle-2': ['var(--sp-fz-subtitle-2)', { fontWeight: '700' }],
      'subtitle-3': ['var(--sp-fz-subtitle-3)', { fontWeight: '700' }],
      'body-1': ['var(--sp-fz-body-1)', { fontWeight: '400' }],
      'body-2': ['var(--sp-fz-body-2)', { fontWeight: '400' }],
      'body-3': ['var(--sp-fz-body-3)', { fontWeight: '400' }],
    },
  },
};
