module.exports = {
  branches: ["main", { name: "next", prerelease: true }],
  git: {
    notes: false,
  },
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
