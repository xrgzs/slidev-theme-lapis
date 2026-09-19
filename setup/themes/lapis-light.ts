import type { ThemeRegistration } from 'shiki'

/**
 * Lapis - Light
 *
 * Code block palette ported from `typora-theme-lapis`, whose syntax colors
 * are inspired by the VSCode theme "Winter is Coming" (light, no italics).
 */
export const lapisLight: ThemeRegistration = {
  name: 'lapis-light',
  type: 'light',
  colors: {
    'editor.background': '#f6f8fa',
    'editor.foreground': '#4f5467',
  },
  settings: [
    {
      settings: {
        foreground: '#4f5467',
      },
    },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: '#9a9a9a',
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
        foreground: '#1694b6',
      },
    },
    {
      scope: ['keyword.operator', 'operator'],
      settings: {
        foreground: '#2f86d2',
      },
    },
    {
      scope: ['constant.numeric', 'number'],
      settings: {
        foreground: '#1a5494',
      },
    },
    {
      scope: ['string', 'punctuation.definition.string'],
      settings: {
        foreground: '#6f42c2',
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
        foreground: '#27638f',
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
        foreground: '#378ed8',
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
        foreground: '#0744ac',
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
        foreground: '#378ed8',
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
        foreground: '#b9218e',
      },
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: '#8f6aa8',
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
        foreground: '#0b93be',
      },
    },
    {
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: '#ffffff',
        background: '#b9218e40',
      },
    },
    {
      scope: ['markup.heading', 'markup.bold', 'markup.heading.setext'],
      settings: {
        foreground: '#0744ac',
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
        foreground: '#9a9a9a',
      },
    },
    {
      scope: ['markup.raw', 'markup.inline.raw', 'string.other.link'],
      settings: {
        foreground: '#27638f',
      },
    },
    {
      scope: ['markup.inserted', 'punctuation.definition.inserted'],
      settings: {
        foreground: '#428485',
      },
    },
    {
      scope: ['markup.deleted', 'punctuation.definition.deleted'],
      settings: {
        foreground: '#a34f55',
      },
    },
    {
      scope: ['markup.link', 'markup.underline.link'],
      settings: {
        foreground: '#4870ac',
      },
    },
  ],
}
