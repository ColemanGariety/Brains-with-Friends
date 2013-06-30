# Brains-with-Friends

A fast-paced dungeon crawler. Open source.

![Brains with Friends](https://raw.github.com/JacksonGariety/Brains-with-Friends/master/preview.jpg)

## Patterns

### Memento
The [memento design pattern](http://coffeescriptcookbook.com/chapters/design_patterns/memento) is used to keep the client and server in-sync
Implementation based on client-side prediction notes in [this essay on latency compensation](https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization) by Yahn W. Bernier of Valve Software.

### Factory
The [factory design pattern](http://coffeescriptcookbook.com/chapters/design_patterns/factory_method) is used to abstract methods such as bullet creation away from runtime so that one class can be used to create the various bullets necessary in-game.

### Builder
The [builder design pattern](http://coffeescriptcookbook.com/chapters/design_patterns/builder) is used to handle creation of weapons and enemies based on descriptors.

## Technologies

### Server
- [Node](https://github.com/joyent/node)
- [Express](https://github.com/visionmedia/express)
- [Couchbase](https://github.com/couchbase/couchnode)
- [nClosure](https://github.com/gatapia/nclosure)

### Client
- [Box2D](http://code.google.com/p/box2d/)
- [Closure](https://developers.google.com/closure/)
- [Lime](https://github.com/digitalfruit/limejs)

### Shared
- [SocketIO](https://github.com/learnboost/socket.io/)

### Development
- [Grunt](https://github.com/gruntjs/grunt)