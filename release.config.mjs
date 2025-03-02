/**
 * @type {import("semantic-release").GlobalConfig}
 */
export default {
  branches: [
    "main",
    {
      name: "alpha",
      prerelease: true,
    },
    {
      name: "hotfix",
      prerelease: true,
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};
