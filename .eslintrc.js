module.exports = {
  extends: ['prettier'],
  root: true,
  ignorePatterns: ['build', 'node_modules', 'public', '.next'],
  settings: {
    next: {
      rootDir: ['frontend/*/']
    }
  }
}
