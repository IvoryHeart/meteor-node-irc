Package.describe({
  summary: "NodeJS IRC client library"
});

Package.on_use(function (api, where) {
  api.add_files('node-irc/lib/irc.js', 'server');
});
