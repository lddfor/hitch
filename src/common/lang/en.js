import enLocale from 'element-ui/lib/locale/lang/en'

export default {
  ...enLocale,
  // globe
  select: {
    cluster: 'All Nodes',
    placeholder: 'Select Node',
  },
  // error
  error: {
    networkError: 'Network Error',
    initializationError: 'Initialization Error',
  },
  // success
  success: {
    createSuccess: 'Create Success',
  },
  // oper
  oper: {
    confirmDelete: 'Confirm Delete ?',
    confirmStop: 'Confirm Stop?',
    cancel: 'Cancel',
    confirm: 'Confirm',
    delete: 'Delete',
    oper: 'Oper',
    edit: 'Edit',
    save: 'Save',
    create: 'Create',
    view: 'View',
    editSuccess: 'Edit success',
    startSuccess: 'Start Success',
    stopSuccess: 'Stop Success',
    deleteSuccess: 'Delete Success',
    from: 'From',
    stop: 'Stop',
    start: 'Start',
    notice: 'Notice',
    learnMore: 'Learn More',
  },
  // topbar
  topbar: {
    tryEnterprise: 'Free Trial',
  },
  // leftbar
  leftbar: {
    // MONITORING
    monitoring: 'MONITORING',
    overview: 'Overview',
    connections: 'Connections',
    sessions: 'Sessions',
    topics: 'Topics',
    subscriptions: 'Subscriptions',
    // MANAGEMENT
    management: 'MANAGEMENT',
    plugins: 'Plugins',
    listeners: 'Listeners',
    instances: 'Instances',
    // TOOLS
    tools: 'TOOLS',
    websocket: 'Websocket',
    api: 'HTTP API',
    applications: 'Applications',
    // ADMIN
    admin: 'ADMIN',
    users: 'Users',
    settings: 'Settings',
    help: 'Help',
  },
  // overview
  overview: {
    // Broker
    broker: 'Broker',
    erlangOTPRelease: 'Erlang/OTP Release',
    systemName: 'System Name',
    version: 'Version',
    uptime: 'Uptime',
    systemTime: 'System Time',
    // Nodes
    nodes: 'Nodes',
    name: 'Name',
    erlangProcesses: 'Erlang Processes',
    cpuInfo: 'CPU Info',
    memoryInfo: 'Memory Info',
    maxFds: 'MaxFds',
    status: 'Status',
    // Stats
    stats: 'Stats',
    topicsCount: 'Topics Count',
    topicsMax: 'Topics Max',
    connectionsCount: 'Connections Count',
    connectionsMax: 'Connections Max',
    retainedCount: 'Retained Count',
    retainedMax: 'Retained Max',
    sessionsCount: 'Sessions Count',
    sessionsMax: 'Sessions Max',
    subscribersCount: 'Subscribers Count',
    subscribersMax: 'subscribers Max',
    subscriptionsCount: 'Subscriptions Count',
    subscriptionsMax: 'Subscriptions Max',
    subscriptionsSharedCount: 'Subscriptions Shared Count',
    subscriptionsSharedMax: 'Subscriptions Shared Max',
    // Metrics
    metrics: 'Metrics',
    packetsData: 'The packets data',
    messagesData: 'The messages data',
    bytesData: 'The bytes data',
  },
  // Connections
  connections: {
    node: 'Node',
    clientId: 'ClientId',
    username: 'Username',
    ipAddr: 'IPAddr',
    port: 'Port',
    cleanStart: 'CleanStart',
    protoVer: 'ProtoVer',
    keepalive: 'Keepalive(s)',
    connectedAt: 'ConnectedAt',
    back: 'Back',
  },
  // sessions
  sessions: {
    clientId: 'ClientId',
    cleanStart: 'CleanStart',
    subscriptionsCount: 'Subscriptions/Count',
    expiryInterval: 'Expiry Interval',
    maxInflight: 'MaxInflight',
    inflightLen: 'Inflight Len',
    mqueueLen: 'MqueueLen',
    mqueueDropped: 'MqueueDropped',
    awaitingRelLen: 'AwaitingRelLen',
    deliverMsg: 'DeliverMsg',
    enqueueMsg: 'EnqueueMsg',
    createdAt: 'CreatedAt',
  },
  // topics
  topics: {
    topic: 'Topic',
    node: 'Node',
  },
  // subscriptions
  subscriptions: {
    clientId: 'ClientId',
    topic: 'Topic',
    qoS: 'QoS',
  },
  // plugins
  plugins: {
    name: 'Name',
    version: 'Version',
    description: 'Description',
    status: 'Status',
    stopped: 'Stopped',
    running: 'Running',
    oper: 'Oper',
    start: 'Start',
    stop: 'Stop',
    config: 'Config',
    back: 'Back',
    advancedConfig: 'Advanced Config',
    add: 'Add',
    configSuccess: 'Config success',
    configFailure: 'Config failure',
    notice: 'Are you sure you want to submit changes and apply them ?',
    giveUpNotice: 'Are you sure you want to give up the change and exit?',
    noticeTitle: 'Notice',
    cacheNotice: 'You have given up this change',
    emptyConfigOption: 'No Default Configuration',
  },
  // instances
  instances: {
    instances: 'Instances',
    back: 'Back',
    info: 'Basic Info',
    name: 'instance name',
    descr: 'description',
    service: 'service',
    configInfo: 'Config Options',
    initConfig: 'Init config or ',
    remarkConfig: 'description is required',
    createInstance: 'Create Instance',
    selectServiceType: 'Instance Type',
    all: 'All',
    running: 'Running',
    stopped: 'Stopped',
    auth: 'Auth',
    backend: 'Backend',
    hook: 'hook',
    bridge: 'Bridge',
    other: 'Other',
    select: 'Select',
    selected: 'Selected',
    nextStep: 'Next',
    authDesc: 'Provide login authentication and publish subscribe ACL service.',
    backendDesc: 'Provide message persistence to database services.',
    bridgeDesc: 'Bridging a message flow into a message middleware data source.',
    hookDesc: 'A service that uses the trigger callback mechanism to respond to the operation.',
    otherDesc: 'The system runs information and other services.',
  },
  // listeners
  listeners: {
    protocol: 'Protocol',
    listenOn: 'Listen On',
    maxConnections: 'Max Connections',
    currentConnections: 'Current Connections',
  },
  // websocket
  websocket: {
    // Connect
    connect: 'Connect',
    host: 'Host',
    port: 'Port',
    clientID: 'Client ID',
    username: 'Username',
    password: 'Password',
    keepAlive: 'Keep Alive',
    cleanSession: 'Clean Session',
    disconnect: 'Disconnect',
    currentState: 'Current State',
    // Subscribe
    subscribe: 'Subscribe',
    topic: 'Topic',
    qoS: 'QoS',
    date: 'Date',
    oper: 'Oper',
    // Messages
    messages: 'Messages',
    retained: 'Retained',
    send: 'send',
    messagesAlreadySent: 'Messages already sent',
    messagesReceived: 'Messages received',
    time: 'Time',
    connectError: 'Message send error',
    connectFailure: 'Connect failed on',
    connectLeave: 'The client does not connect to the broker',
    subscribeSuccess: 'Subscribe success',
    subscribeFailure: 'Subscribe failure',
    unsubscribeFailure: 'Unsubscribe Failure',
    messageSendOut: 'Message send out',
    connected: 'CONNECTED',
    connecting: 'CONNECTING',
    disconnected: 'DISCONNECTED',
    notSupport: 'Your browser doesn\'t support WebSocket',
  },
  // http_api
  httpApi: {
    introduction: 'Introduction',
    desc: 'Apart from this help page, all URIs will serve only resources of type application/json, and will require HTTP basic authentication. The default user is admin / public.\n' +
      '<br/>' +
      'The emqx_dashboard plugin provides a web management console. The Dashboard helps monitor broker\'s running status, statistics and metrics of MQTT packets.',
    reference: 'Reference',
    method: 'Method',
    path: 'Path',
    description: 'Description',
    back: 'Back',
    linkAddress: 'Request address',
    data: 'Response data',
  },
  // applications
  app: {
    appId: 'AppID',
    secret: 'AppSecret',
    newApp: 'New App',
    viewApp: 'View App',
    editApp: 'Edit App',
    create: 'Create',
    errors: 'Option Required',
    name: 'AppName',
    desc: 'Remark',
    expired: 'Expired date',
    status: 'Status',
    enable: 'Allowed',
    disable: 'Denied',
    enableText: 'Access allowed',
    disableText: 'Access barred',
    expiredText: 'Never expired',
    guide: 'Application for authentication of EMQ X Management API (REST API)',
    docs: 'Documentation',
  },
  // users
  users: {
    newUser: 'New User',
    editUser: 'Edit User',
    username: 'Username',
    remark: 'Remark',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    oldPassword: 'Old Password',
    newPassword: 'New Password',
    confirmNewPassword: 'Confirm New Password',
    changePassword: 'Change Password',
    dontChangePassword: 'Don\'t Change Password',
    confirm: 'Confirm',
    confirmDelete: 'Confirm Delete ?',
    usernameRequired: 'Username required',
    remarkRequired: 'Remark required',
    usernameIllegal: 'Username length: 3~32',
    passwordRequired: 'Password required',
    newPasswordRequired: 'new password required',
    passwordInconsistent: 'Password is inconsistent',
    authenticate: 'You have changed your password. Please re authenticate',
    createUser: 'Create user success',
    passwordIllegal: 'Password length: 3~255',
  },
  // alert
  alert: {
    required: 'required',
    success: ' success',
    failure: ' failure',
    connect: 'Connect',
  },
  // login
  login: {
    title: 'LOG IN',
    username: 'Username',
    password: 'Password',
    remember: 'Remember',
    loginButton: 'Log In',
    error: 'Username Or Password Error',
    usernameRequired: 'Username Required',
    passwordRequired: 'Password Required',
  },
  // settings
  settings: {
    themes: 'Themes',
    language: 'Language',
    apply: 'Apply',
    success: 'Apply success',
  },
  // importConfig
  config: {
    importConfig: 'Import',
    selectConfigFile: 'Select a config file',
    configFileMustBeJson: 'Config file must be JSON',
    createBy: 'Create by',
    create: '',
    createUser: 'owner',
    nodeName: 'node name',
    host: 'host',
    descr: 'description',
    createAt: 'createAt',
    more: 'more',
    reSelect: 'Select another',
    not_a_valid_config_file: 'Not a valid config file',
    payload_error: 'Config option is empty',
    import_file_error: 'Import failure',
    exportConfig: 'Export',
    ex: 'Export',
    atLeastThree: 'At least three words',
    importSuccess: 'Import success',
    notice: 'Use backup configuration files to configure initialization modification. <br/> Notice: configuration files may contain important data, such as database address and authentication information. Please keep good configuration files and use backup function reasonably.',
  },
  help: {
    quickStart: 'Quick start',
    emqxDesc: 'EMQ X is a MQTT broker developed on the Erlang/OTP platform, which is the most popular MQTT message middleware in the open source community. It supports common IoT protocols, including MQTT, LwM2M, MQTT-SN, CoAP, LoRaWAN, HTTP, and WebSocket. Welcome to follow our project or participate in development.',
    emqxEnterprise: 'EMQ X Enterprise Edition',
    enterpriseDesc: 'EMQ X Enterprise Edition has built-in data persistence support, security auditing, operation monitoring and other functions, providing you with the service of more comprehensive functions, enhanced stability and performance, and higher level of data security and service response.<br/>The latest Enterprise Edition includes a new Dashboard, which allows you to easily create and manage IoT Hub clusters with dozens of nodes and millions of connections.',
    freeTrial: 'Free Trial',
    useDocs: 'Documentation',
    docsDesc: 'We have prepared a comprehensive documentation to help you familiarize yourself with more powerful features.',
    forwardView: 'View documentation',
    faqDesc: 'The FAQ contains questions that we are often asked about. It is recommended to use the FAQ to retrieve problems you encounter during use.',
    forwardFaq: 'Go to FAQ',
    followUs: 'Follow us',
  },
  httpCode: {
    0: 'Success',
    101: 'Bad RPC',
    102: 'Unknown Error',
    103: 'Username or password error',
    104: 'Empty username or password',
    105: 'User does not exist',
    106: 'Admin can not be deleted',
    107: 'Missing request parameter',
    108: 'Request parameter type error',
    109: 'Request parameter is not a json',
    110: 'Plugin has been loaded',
    111: 'Plugin has been unloaded',
    112: 'Client not online',
    113: 'User already exist',
    114: 'Old password error',
    115: 'Bad topic',
  },
}
