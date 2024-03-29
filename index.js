module.exports = {
	branches: [
		"+([0-9])?(.{+([0-9]),x}).x",
		"main",
		"next",
		"next-major",
		{ name: "beta", prerelease: true },
		{ name: "alpha", prerelease: true },
	],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/github",
		"@semantic-release/npm",
		"@semantic-release/release-notes-generator",
	],
	preset: "conventionalcommits",
	fail: false,
	success: false,
}
