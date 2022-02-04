module.exports = api => {
  api.registerCommand('routing:discovery', {
    description: 'application routing discovery',
    usage: 'vue-cli-service routing:discovery [options]'
  }, () => {
    console.log(`👋  Hello`)
  })
}
