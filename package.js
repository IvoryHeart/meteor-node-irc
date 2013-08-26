Package.describe({
  summary: "NodeJS IRC client library"
});

Npm.depends({
    "irc": "0.3.6"
});

Package.on_use(function (api, where) {
  api.add_files('irc.js', 'server');
  api.export('IRC', 'server');
});
