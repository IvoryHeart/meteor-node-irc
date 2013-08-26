meteor-node-irc
===============
A wrapper around [node-irc](https://github.com/martynsmith/node-irc) for use with [Meteorite](https://github.com/oortcloud/meteorite) ontop of [Meteor](http://meteor.com)

#Install
mrt add irc

#Usage
```javascript
client = new IRC.Client(server, nickname, {
      userName: 'botname',
      realName: 'Watson',
      debug: false,
      showErrors: false,
      autoRejoin: true,
      autoConnect: false,
      channels: ['#meteor', '#nodejs'],
      secure: false,
      selfSigned: false,
      certExpired: false,
      floodProtection: true,
      floodProtectionDelay: 1500,
      stripColors: true,
      messageSplit: 400
});
```
