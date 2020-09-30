/**
 * @fileoverview gRPC-Web generated client stub for itproject
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.itproject = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.itproject.authenticateClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.itproject.authenticatePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.itproject.RegisterRequest,
 *   !proto.itproject.RegisterResponse>}
 */
const methodDescriptor_authenticate_Register = new grpc.web.MethodDescriptor(
  '/itproject.authenticate/Register',
  grpc.web.MethodType.UNARY,
  proto.itproject.RegisterRequest,
  proto.itproject.RegisterResponse,
  /**
   * @param {!proto.itproject.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.RegisterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.itproject.RegisterRequest,
 *   !proto.itproject.RegisterResponse>}
 */
const methodInfo_authenticate_Register = new grpc.web.AbstractClientBase.MethodInfo(
  proto.itproject.RegisterResponse,
  /**
   * @param {!proto.itproject.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.RegisterResponse.deserializeBinary
);


/**
 * @param {!proto.itproject.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.itproject.RegisterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.itproject.RegisterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.itproject.authenticateClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/itproject.authenticate/Register',
      request,
      metadata || {},
      methodDescriptor_authenticate_Register,
      callback);
};


/**
 * @param {!proto.itproject.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.itproject.RegisterResponse>}
 *     A native promise that resolves to the response
 */
proto.itproject.authenticatePromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/itproject.authenticate/Register',
      request,
      metadata || {},
      methodDescriptor_authenticate_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.itproject.LoginRequest,
 *   !proto.itproject.LoginResponse>}
 */
const methodDescriptor_authenticate_Login = new grpc.web.MethodDescriptor(
  '/itproject.authenticate/Login',
  grpc.web.MethodType.UNARY,
  proto.itproject.LoginRequest,
  proto.itproject.LoginResponse,
  /**
   * @param {!proto.itproject.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.itproject.LoginRequest,
 *   !proto.itproject.LoginResponse>}
 */
const methodInfo_authenticate_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.itproject.LoginResponse,
  /**
   * @param {!proto.itproject.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.itproject.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.itproject.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.itproject.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.itproject.authenticateClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/itproject.authenticate/Login',
      request,
      metadata || {},
      methodDescriptor_authenticate_Login,
      callback);
};


/**
 * @param {!proto.itproject.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.itproject.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.itproject.authenticatePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/itproject.authenticate/Login',
      request,
      metadata || {},
      methodDescriptor_authenticate_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.itproject.LoginRequest,
 *   !proto.itproject.LoginResponse>}
 */
const methodDescriptor_authenticate_RenewJWT = new grpc.web.MethodDescriptor(
  '/itproject.authenticate/RenewJWT',
  grpc.web.MethodType.UNARY,
  proto.itproject.LoginRequest,
  proto.itproject.LoginResponse,
  /**
   * @param {!proto.itproject.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.itproject.LoginRequest,
 *   !proto.itproject.LoginResponse>}
 */
const methodInfo_authenticate_RenewJWT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.itproject.LoginResponse,
  /**
   * @param {!proto.itproject.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.itproject.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.itproject.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.itproject.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.itproject.authenticateClient.prototype.renewJWT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/itproject.authenticate/RenewJWT',
      request,
      metadata || {},
      methodDescriptor_authenticate_RenewJWT,
      callback);
};


/**
 * @param {!proto.itproject.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.itproject.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.itproject.authenticatePromiseClient.prototype.renewJWT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/itproject.authenticate/RenewJWT',
      request,
      metadata || {},
      methodDescriptor_authenticate_RenewJWT);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.itproject.EchoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.itproject.EchoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.itproject.EchoRequest,
 *   !proto.itproject.EchoResponse>}
 */
const methodDescriptor_EchoService_Echo = new grpc.web.MethodDescriptor(
  '/itproject.EchoService/Echo',
  grpc.web.MethodType.UNARY,
  proto.itproject.EchoRequest,
  proto.itproject.EchoResponse,
  /**
   * @param {!proto.itproject.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.EchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.itproject.EchoRequest,
 *   !proto.itproject.EchoResponse>}
 */
const methodInfo_EchoService_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.itproject.EchoResponse,
  /**
   * @param {!proto.itproject.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.itproject.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.itproject.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.itproject.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.itproject.EchoServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/itproject.EchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_Echo,
      callback);
};


/**
 * @param {!proto.itproject.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.itproject.EchoResponse>}
 *     A native promise that resolves to the response
 */
proto.itproject.EchoServicePromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/itproject.EchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_Echo);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.itproject.profilesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.itproject.profilesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.itproject.getuserRequest,
 *   !proto.itproject.profile>}
 */
const methodDescriptor_profiles_getuser = new grpc.web.MethodDescriptor(
  '/itproject.profiles/getuser',
  grpc.web.MethodType.UNARY,
  proto.itproject.getuserRequest,
  proto.itproject.profile,
  /**
   * @param {!proto.itproject.getuserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.profile.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.itproject.getuserRequest,
 *   !proto.itproject.profile>}
 */
const methodInfo_profiles_getuser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.itproject.profile,
  /**
   * @param {!proto.itproject.getuserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.profile.deserializeBinary
);


/**
 * @param {!proto.itproject.getuserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.itproject.profile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.itproject.profile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.itproject.profilesClient.prototype.getuser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/itproject.profiles/getuser',
      request,
      metadata || {},
      methodDescriptor_profiles_getuser,
      callback);
};


/**
 * @param {!proto.itproject.getuserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.itproject.profile>}
 *     A native promise that resolves to the response
 */
proto.itproject.profilesPromiseClient.prototype.getuser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/itproject.profiles/getuser',
      request,
      metadata || {},
      methodDescriptor_profiles_getuser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.itproject.profile,
 *   !proto.itproject.updateuserResponse>}
 */
const methodDescriptor_profiles_updateuser = new grpc.web.MethodDescriptor(
  '/itproject.profiles/updateuser',
  grpc.web.MethodType.UNARY,
  proto.itproject.profile,
  proto.itproject.updateuserResponse,
  /**
   * @param {!proto.itproject.profile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.updateuserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.itproject.profile,
 *   !proto.itproject.updateuserResponse>}
 */
const methodInfo_profiles_updateuser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.itproject.updateuserResponse,
  /**
   * @param {!proto.itproject.profile} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.updateuserResponse.deserializeBinary
);


/**
 * @param {!proto.itproject.profile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.itproject.updateuserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.itproject.updateuserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.itproject.profilesClient.prototype.updateuser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/itproject.profiles/updateuser',
      request,
      metadata || {},
      methodDescriptor_profiles_updateuser,
      callback);
};


/**
 * @param {!proto.itproject.profile} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.itproject.updateuserResponse>}
 *     A native promise that resolves to the response
 */
proto.itproject.profilesPromiseClient.prototype.updateuser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/itproject.profiles/updateuser',
      request,
      metadata || {},
      methodDescriptor_profiles_updateuser);
};


module.exports = proto.itproject;

