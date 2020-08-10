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


var google_api_annotations_pb = require('./google/api/annotations_pb.js')
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
proto.itproject.itProjectClient =
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
proto.itproject.itProjectPromiseClient =
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
 *   !proto.itproject.HelloRequest,
 *   !proto.itproject.HelloResponse>}
 */
const methodDescriptor_itProject_Hello = new grpc.web.MethodDescriptor(
  '/itproject.itProject/Hello',
  grpc.web.MethodType.UNARY,
  proto.itproject.HelloRequest,
  proto.itproject.HelloResponse,
  /**
   * @param {!proto.itproject.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.HelloResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.itproject.HelloRequest,
 *   !proto.itproject.HelloResponse>}
 */
const methodInfo_itProject_Hello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.itproject.HelloResponse,
  /**
   * @param {!proto.itproject.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.itproject.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.itproject.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.itproject.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.itproject.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.itproject.itProjectClient.prototype.hello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/itproject.itProject/Hello',
      request,
      metadata || {},
      methodDescriptor_itProject_Hello,
      callback);
};


/**
 * @param {!proto.itproject.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.itproject.HelloResponse>}
 *     A native promise that resolves to the response
 */
proto.itproject.itProjectPromiseClient.prototype.hello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/itproject.itProject/Hello',
      request,
      metadata || {},
      methodDescriptor_itProject_Hello);
};


module.exports = proto.itproject;

