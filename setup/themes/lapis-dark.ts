import type { ThemeRegistration } from 'shiki'

/**
 * Lapis - Dark
 *
 * Code block palette ported from `typora-theme-lapis` (dark overrides),
 * which is inspired by the VSCode theme "Winter is Coming" (dark, no italics).
 */
export const lapisDark: ThemeRegistration = {
  name: 'lapis-dark',
  type: 'dark',
  colors: {
    'editor.background': '#080e1d',
    'editor.foreground': '#abbad4',
  },
  settings: [
    {
      settings: {
        foreground: '#abbad4',
      },
    },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: '#a8a8a8',
        fontStyle: '',
      },
    },
    {
      scope: [
        'keyword',
        'keyword.control',
        'keyword.other.unit',
        'storage',
        'storage.type',
        'storage.modifier',
      ],
      settings: {
        foreground: '#66cfe9',
      },
    },
    {
      scope: ['keyword.operator', 'operator'],
      settings: {
        foreground: '#e7fc4a',
      },
    },
    {
      scope: ['constant.numeric', 'number'],
      settings: {
        foreground: '#b0f6ae',
      },
    },
    {
      scope: ['string', 'punctuation.definition.string'],
      settings: {
        foreground: '#acd9a4',
      },
    },
    {
      scope: [
        'constant.character.escape',
        'string.regexp',
        'regexp',
        'constant.regexp',
      ],
      settings: {
        foreground: '#89acc5',
      },
    },
    {
      scope: [
        'constant.language',
        'constant.character',
        'support.constant',
        'variable.language',
      ],
      settings: {
        foreground: '#debbfb',
      },
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'meta.function-call',
        'variable.function',
      ],
      settings: {
        foreground: '#f9fbfd',
      },
    },
    {
      scope: [
        'entity.name.type',
        'entity.name.class',
        'entity.name.struct',
        'entity.name.enum',
        'entity.other.inherited-class',
        'support.class',
        'support.type',
        'meta.type.annotation',
      ],
      settings: {
        foreground: '#debbfb',
      },
    },
    {
      scope: [
        'variable',
        'variable.parameter',
        'variable.other',
        'variable.other.readwrite',
      ],
      settings: {
        foreground: '#c2eaff',
      },
    },
    {
      scope: [
        'variable.other.property',
        'variable.other.object.property',
        'meta.object-literal.key',
        'meta.definition.property',
        'support.type.property-name',
        'entity.name.tag',
      ],
      settings: {
        foreground: '#baacc3',
      },
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: '#baacc3',
      },
    },
    {
      scope: [
        'meta.preprocessor',
        'keyword.control.directive',
        'punctuation.definition.directive',
        'meta.tag',
        'meta.import',
        'meta.export',
      ],
      settings: {
        foreground: '#a0b4f6',
      },
    },
    {
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: '#ffffff',
        background: '#ffcff140',
      },
    },
    {
      scope: ['markup.heading', 'markup.bold', 'markup.heading.setext'],
      settings: {
        foreground: '#f9fbfd',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['markup.italic'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: ['markup.quote', 'punctuation.definition.quote'],
      settings: {
        foreground: '#a8a8a8',
      },
    },
    {
      scope: ['markup.raw', 'markup.inline.raw', 'string.other.link'],
      settings: {
        foreground: '#89acc5',
      },
    },
    {
      scope: ['markup.inserted', 'punctuation.definition.inserted'],
      settings: {
        foreground: '#81b3a7',
      },
    },
    {
      scope: ['markup.deleted', 'punctuation.definition.deleted'],
      settings: {
        foreground: '#b8797e',
      },
    },
    {
      scope: ['markup.link', 'markup.underline.link'],
      settings: {
        foreground: '#83a4c4',
      },
    },
  ],
}
