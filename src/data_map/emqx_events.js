export default [{
  name: 'message.publish',
  value: 'message.publish',
  description: '',
  test_field: ['payload', 'client_id', 'username', 'topic', 'qos'],
  ctx: {
    client_id: 'c_emqx',
    event: 'message.publish',
    flags: {
      dup: false,
      retain: 0,
    },
    id: '588D045CCB2C7B44B000004D10001',
    payload: {
      msg: 'hello',
    },
    peername: '127.0.0.1:58138',
    qos: 0,
    timestamp: 1557802989171,
    topic: 't/a',
    username: 'u_emqx',
    retain: 0,
  },
  sql: 'SELECT * FROM "message.publish" WHERE topic =~ \'t/#\'',
},
{
  name: 'message.acked',
  value: 'message.acked',
  description: '',
  test_field: ['payload', 'client_id', 'username', 'topic', 'qos'],
  ctx: {
    client_id: 'c_emqx',
    event: 'message.acked',
    flags: {
      dup: false,
      retain: 0,
    },
    id: '588D3DD4C6820B44B0000055C0001',
    payload: {
      msg: 'hello',
    },
    peername: '127.0.0.1:63412',
    qos: 1,
    timestamp: 1557818415802,
    topic: 't/a',
    username: 'u_emqx',
    retain: 0,
  },
  sql: 'SELECT * FROM "message.acked" WHERE topic =~ \'t/#\'',
},
{
  name: 'message.deliver',
  value: 'message.deliver',
  description: '',
  test_field: ['payload', 'client_id', 'username', 'topic', 'qos'],
  ctx: {
    auth_result: 'success',
    client_id: 'c_emqx',
    event: 'message.deliver',
    flags: {
      dup: false,
      retain: 0,
    },
    id: '588D3DD4C6820B44B0000055C0001',
    payload: {
      msg: 'hello',
    },
    peername: '127.0.0.1:63412',
    qos: 1,
    timestamp: 1557818415802,
    topic: 't/a',
    username: 'u_emqx',
    zone: 'external',
    retain: 0,
  },
  sql: 'SELECT * FROM "message.deliver" WHERE topic =~ \'t/#\'',
},
{
  name: 'message.dropped',
  value: 'message.dropped',
  description: '',
  test_field: ['payload', 'client_id', 'username', 'topic', 'qos'],
  ctx: {
    client_id: 'c_emqx',
    event: 'message.dropped',
    flags: {
      dup: false,
      retain: 0,
    },
    id: '588D3DD4F8874B44B0000055C0002',
    node: 'nonode@nohost',
    payload: {
      msg: 'hello',
    },
    peername: '127.0.0.1:63412',
    qos: 1,
    timestamp: 1557818416007,
    topic: 't/a',
    username: 'u_emqx',
    retain: 0,
  },
  sql: 'SELECT * FROM "message.dropped" WHERE topic =~ \'t/#\'',
},
{
  name: 'client.connected',
  value: 'client.connected',
  description: '',
  test_field: ['client_id', 'username', 'auth_result', 'peername'],
  ctx: {
    auth_result: 'success',
    clean_start: true,
    client_id: 'c_emqx',
    connack: 0,
    connected_at: 1557818415698,
    event: 'client.connected',
    is_bridge: false,
    keepalive: 60,
    peername: '127.0.0.1:63412',
    proto_ver: 4,
    username: 'u_emqx',
    zone: 'external',
  },
  sql: 'SELECT * FROM "client.connected"',
},
{
  name: 'client.disconnected',
  value: 'client.disconnected',
  description: '',
  test_field: ['client_id', 'username', 'reason_code'],
  ctx: {
    auth_result: 'success',
    client_id: 'emqx-client-EMQ-df616a68ba79d4dec133',
    event: 'client.disconnected',
    peername: '127.0.0.1:63409',
    reason_code: 'normal',
    username: 'u_emqx',
    zone: 'external',
  },
  sql: 'SELECT * FROM "client.disconnected"',
},
{
  name: 'client.subscribe',
  value: 'client.subscribe',
  description: '',
  test_field: ['client_id', 'username', 'topic_filters'],
  ctx: {
    auth_result: 'success',
    client_id: 'c_emqx',
    event: 'client.subscribe',
    peername: '127.0.0.1:63412',
    topic_filters: [{
      topic: 't/a',
      qos: 0,
    }, {
      topic: 't/b',
      qos: 1,
    }],
    topic: 't/a',
    qos: 0,
    username: 'u_emqx',
    zone: 'external',
  },
  sql: 'SELECT * FROM "client.subscribe" WHERE topic =~ \'t/#\'',
},
{
  name: 'client.unsubscribe',
  value: 'client.unsubscribe',
  description: '',
  test_field: ['client_id', 'username', 'topic_filters'],
  ctx: {
    auth_result: 'success',
    client_id: 'c_emqx',
    event: 'client.unsubscribe',
    peername: '127.0.0.1:63412',
    topic_filters: ['t/a', 't/b'],
    topic: 't/a',
    qos: 0,
    username: 'u_emqx',
    zone: 'external',
  },
  sql: 'SELECT * FROM "client.unsubscribe" WHERE topic =~ \'t/#\'',
},
]
