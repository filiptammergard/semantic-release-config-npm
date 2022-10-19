# @tammergard/semantic-release-config-npm

A sharable Semantic Release config with personal preferences.

## Installation

Install this Semantic Release config:

```bash
# npm
npm install @tammergard/semantic-release-config-npm semantic-release --save-dev

# yarn
yarn add @tammergard/semantic-release-config-npm semantic-release --dev
```

## Usage

Add the config to your `.releaserc.js` file:

```js
module.exports = {
	extends: "@tammergard/semantic-release-config-npm",
}
```

See this project's CI workflow config (`.github/workflows/ci.yml`) for an
example on how to use it.

## License

MIT
