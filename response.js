IncomingMessage {
  _readableState:
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: null,
     ended: true,
     endEmitted: false,
     reading: false,
     sync: true,
     needReadable: false,
     emittedReadable: true,
     readableListening: false,
     resumeScheduled: false,
     defaultEncoding: 'utf8',
     ranOut: false,
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined,
  socket:
   Socket {
     _connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 506,
        _externalStream: {},
        fd: 18,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0 },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Object],
        timeout: [Function],
        error: [Function: socketOnError],
        close: [Object],
        data: [Function: socketOnData],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     destroyed: false,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _idleTimeout: 120000,
     _idleNext: { _idleNext: [Circular], _idlePrev: [Circular] },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Circular] },
     _idleStart: 3194,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedHeader: {},
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _headers: [Object],
        _headerNames: [Object],
        _onPendingData: [Function: updateOutgoingData],
        req: [Circular],
        locals: {} } },
  connection:
   Socket {
     _connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 506,
        _externalStream: {},
        fd: 18,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0 },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Object],
        timeout: [Function],
        error: [Function: socketOnError],
        close: [Object],
        data: [Function: socketOnData],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     destroyed: false,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _idleTimeout: 120000,
     _idleNext: { _idleNext: [Circular], _idlePrev: [Circular] },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Circular] },
     _idleStart: 3194,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedHeader: {},
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _headers: [Object],
        _headerNames: [Object],
        _onPendingData: [Function: updateOutgoingData],
        req: [Circular],
        locals: {} } },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: true,
  headers:
   { host: 'localhost:3000',
     connection: 'keep-alive',
     'cache-control': 'max-age=0',
     'upgrade-insecure-requests': '1',
     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
     'accept-encoding': 'gzip, deflate, sdch, br',
     'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
     'if-none-match': 'W/"18-2X1LQw8dLrWzIPCTENrmHg"' },
  rawHeaders:
   [ 'Host',
     'localhost:3000',
     'Connection',
     'keep-alive',
     'Cache-Control',
     'max-age=0',
     'Upgrade-Insecure-Requests',
     '1',
     'User-Agent',
     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36',
     'Accept',
     'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
     'Accept-Encoding',
     'gzip, deflate, sdch, br',
     'Accept-Language',
     'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
     'If-None-Match',
     'W/"18-2X1LQw8dLrWzIPCTENrmHg"' ],
  trailers: {},
  rawTrailers: [],
  upgrade: false,
  url: '/',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client:
   Socket {
     _connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 506,
        _externalStream: {},
        fd: 18,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0 },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Object],
        timeout: [Function],
        error: [Function: socketOnError],
        close: [Object],
        data: [Function: socketOnData],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     destroyed: false,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _idleTimeout: 120000,
     _idleNext: { _idleNext: [Circular], _idlePrev: [Circular] },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Circular] },
     _idleStart: 3194,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedHeader: {},
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _headers: [Object],
        _headerNames: [Object],
        _onPendingData: [Function: updateOutgoingData],
        req: [Circular],
        locals: {} } },
  _consuming: false,
  _dumped: false,
  next: [Function: next],
  baseUrl: '/new/https://www.google.com',
  originalUrl: '/new/https://www.google.com',
  _parsedUrl:
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: null,
     query: null,
     pathname: '/new/https://www.google.com',
     path: '/new/https://www.google.com',
     href: '/new/https://www.google.com',
     _raw: '/new/https://www.google.com' },
  params: { '0': 'https://www.google.com' },
  query: {},
  res:
   ServerResponse {
     domain: null,
     _events: { finish: [Function: resOnFinish] },
     _eventsCount: 1,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedHeader: {},
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 3194,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Circular] },
     connection:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 3194,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Circular] },
     _header: null,
     _headers: { 'x-powered-by': 'Express' },
     _headerNames: { 'x-powered-by': 'X-Powered-By' },
     _onPendingData: [Function: updateOutgoingData],
     req: [Circular],
     locals: {} },
  _parsedOriginalUrl:
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: null,
     query: null,
     pathname: '/new/https://www.google.com',
     path: '/new/https://www.google.com',
     href: '/new/https://www.google.com',
     _raw: '/new/https://www.google.com' } }