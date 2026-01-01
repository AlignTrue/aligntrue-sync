# aligntrue

**Simple install wrapper for @aligntrue/cli**

This is a convenience package that provides the `aligntrue` and `at` command-line tools.

## Installation

```bash
# Alpha release (current)
npm install -g aligntrue@next

# Stable release (when published)
npm install -g aligntrue
```

## Usage

After installation, you can use either command:

```bash
aligntrue init    # Long form
at init           # Short alias
```

## What's Inside

This package simply depends on and re-exports `@aligntrue/cli`. It exists to provide a simpler installation experience:

- **This package:** `npm install -g aligntrue`
- **Direct CLI:** `npm install -g @aligntrue/cli`

Both install the same CLI tool.

## Documentation

For full documentation, see the main [@aligntrue/cli package](https://www.npmjs.com/package/@aligntrue/cli) or visit [github.com/AlignTrue/aligntrue-sync](https://github.com/AlignTrue/aligntrue-sync).

## License

MIT © AlignTrue
