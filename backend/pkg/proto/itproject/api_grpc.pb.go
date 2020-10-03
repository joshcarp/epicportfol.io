// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package itproject

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// AuthenticateClient is the client API for Authenticate service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AuthenticateClient interface {
	// Register is used to register a user and acquire a jwt
	Register(ctx context.Context, in *RegisterRequest, opts ...grpc.CallOption) (*RegisterResponse, error)
	// Login is used to login and to acquire a jwt
	Login(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error)
	// RenewJWT is used to reissue JWTs that have expired
	RenewJWT(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error)
}

type authenticateClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthenticateClient(cc grpc.ClientConnInterface) AuthenticateClient {
	return &authenticateClient{cc}
}

func (c *authenticateClient) Register(ctx context.Context, in *RegisterRequest, opts ...grpc.CallOption) (*RegisterResponse, error) {
	out := new(RegisterResponse)
	err := c.cc.Invoke(ctx, "/itproject.authenticate/Register", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticateClient) Login(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error) {
	out := new(LoginResponse)
	err := c.cc.Invoke(ctx, "/itproject.authenticate/Login", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticateClient) RenewJWT(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error) {
	out := new(LoginResponse)
	err := c.cc.Invoke(ctx, "/itproject.authenticate/RenewJWT", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthenticateServer is the server API for Authenticate service.
// All implementations must embed UnimplementedAuthenticateServer
// for forward compatibility
type AuthenticateServer interface {
	// Register is used to register a user and acquire a jwt
	Register(context.Context, *RegisterRequest) (*RegisterResponse, error)
	// Login is used to login and to acquire a jwt
	Login(context.Context, *LoginRequest) (*LoginResponse, error)
	// RenewJWT is used to reissue JWTs that have expired
	RenewJWT(context.Context, *LoginRequest) (*LoginResponse, error)
	mustEmbedUnimplementedAuthenticateServer()
}

// UnimplementedAuthenticateServer must be embedded to have forward compatible implementations.
type UnimplementedAuthenticateServer struct {
}

func (*UnimplementedAuthenticateServer) Register(context.Context, *RegisterRequest) (*RegisterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Register not implemented")
}
func (*UnimplementedAuthenticateServer) Login(context.Context, *LoginRequest) (*LoginResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Login not implemented")
}
func (*UnimplementedAuthenticateServer) RenewJWT(context.Context, *LoginRequest) (*LoginResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RenewJWT not implemented")
}
func (*UnimplementedAuthenticateServer) mustEmbedUnimplementedAuthenticateServer() {}

func RegisterAuthenticateServer(s *grpc.Server, srv AuthenticateServer) {
	s.RegisterService(&_Authenticate_serviceDesc, srv)
}

func _Authenticate_Register_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RegisterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticateServer).Register(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/itproject.authenticate/Register",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticateServer).Register(ctx, req.(*RegisterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Authenticate_Login_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LoginRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticateServer).Login(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/itproject.authenticate/Login",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticateServer).Login(ctx, req.(*LoginRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Authenticate_RenewJWT_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LoginRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticateServer).RenewJWT(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/itproject.authenticate/RenewJWT",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticateServer).RenewJWT(ctx, req.(*LoginRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Authenticate_serviceDesc = grpc.ServiceDesc{
	ServiceName: "itproject.authenticate",
	HandlerType: (*AuthenticateServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Register",
			Handler:    _Authenticate_Register_Handler,
		},
		{
			MethodName: "Login",
			Handler:    _Authenticate_Login_Handler,
		},
		{
			MethodName: "RenewJWT",
			Handler:    _Authenticate_RenewJWT_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api.proto",
}

// EchoServiceClient is the client API for EchoService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EchoServiceClient interface {
	Echo(ctx context.Context, in *EchoRequest, opts ...grpc.CallOption) (*EchoResponse, error)
}

type echoServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewEchoServiceClient(cc grpc.ClientConnInterface) EchoServiceClient {
	return &echoServiceClient{cc}
}

func (c *echoServiceClient) Echo(ctx context.Context, in *EchoRequest, opts ...grpc.CallOption) (*EchoResponse, error) {
	out := new(EchoResponse)
	err := c.cc.Invoke(ctx, "/itproject.EchoService/Echo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EchoServiceServer is the server API for EchoService service.
// All implementations must embed UnimplementedEchoServiceServer
// for forward compatibility
type EchoServiceServer interface {
	Echo(context.Context, *EchoRequest) (*EchoResponse, error)
	mustEmbedUnimplementedEchoServiceServer()
}

// UnimplementedEchoServiceServer must be embedded to have forward compatible implementations.
type UnimplementedEchoServiceServer struct {
}

func (*UnimplementedEchoServiceServer) Echo(context.Context, *EchoRequest) (*EchoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Echo not implemented")
}
func (*UnimplementedEchoServiceServer) mustEmbedUnimplementedEchoServiceServer() {}

func RegisterEchoServiceServer(s *grpc.Server, srv EchoServiceServer) {
	s.RegisterService(&_EchoService_serviceDesc, srv)
}

func _EchoService_Echo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EchoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EchoServiceServer).Echo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/itproject.EchoService/Echo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EchoServiceServer).Echo(ctx, req.(*EchoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _EchoService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "itproject.EchoService",
	HandlerType: (*EchoServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Echo",
			Handler:    _EchoService_Echo_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api.proto",
}

// ProfilesClient is the client API for Profiles service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ProfilesClient interface {
	Getuser(ctx context.Context, in *GetuserRequest, opts ...grpc.CallOption) (*Profile, error)
	Updateuser(ctx context.Context, in *Profile, opts ...grpc.CallOption) (*UpdateuserResponse, error)
}

type profilesClient struct {
	cc grpc.ClientConnInterface
}

func NewProfilesClient(cc grpc.ClientConnInterface) ProfilesClient {
	return &profilesClient{cc}
}

func (c *profilesClient) Getuser(ctx context.Context, in *GetuserRequest, opts ...grpc.CallOption) (*Profile, error) {
	out := new(Profile)
	err := c.cc.Invoke(ctx, "/itproject.profiles/getuser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *profilesClient) Updateuser(ctx context.Context, in *Profile, opts ...grpc.CallOption) (*UpdateuserResponse, error) {
	out := new(UpdateuserResponse)
	err := c.cc.Invoke(ctx, "/itproject.profiles/updateuser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProfilesServer is the server API for Profiles service.
// All implementations must embed UnimplementedProfilesServer
// for forward compatibility
type ProfilesServer interface {
	Getuser(context.Context, *GetuserRequest) (*Profile, error)
	Updateuser(context.Context, *Profile) (*UpdateuserResponse, error)
	mustEmbedUnimplementedProfilesServer()
}

// UnimplementedProfilesServer must be embedded to have forward compatible implementations.
type UnimplementedProfilesServer struct {
}

func (*UnimplementedProfilesServer) Getuser(context.Context, *GetuserRequest) (*Profile, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Getuser not implemented")
}
func (*UnimplementedProfilesServer) Updateuser(context.Context, *Profile) (*UpdateuserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Updateuser not implemented")
}
func (*UnimplementedProfilesServer) mustEmbedUnimplementedProfilesServer() {}

func RegisterProfilesServer(s *grpc.Server, srv ProfilesServer) {
	s.RegisterService(&_Profiles_serviceDesc, srv)
}

func _Profiles_Getuser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetuserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProfilesServer).Getuser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/itproject.profiles/Getuser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProfilesServer).Getuser(ctx, req.(*GetuserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Profiles_Updateuser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Profile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProfilesServer).Updateuser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/itproject.profiles/Updateuser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProfilesServer).Updateuser(ctx, req.(*Profile))
	}
	return interceptor(ctx, in, info, handler)
}

var _Profiles_serviceDesc = grpc.ServiceDesc{
	ServiceName: "itproject.profiles",
	HandlerType: (*ProfilesServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "getuser",
			Handler:    _Profiles_Getuser_Handler,
		},
		{
			MethodName: "updateuser",
			Handler:    _Profiles_Updateuser_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api.proto",
}

// UploadClient is the client API for Upload service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UploadClient interface {
	Upload(ctx context.Context, in *UploadRequest, opts ...grpc.CallOption) (*UploadResponse, error)
}

type uploadClient struct {
	cc grpc.ClientConnInterface
}

func NewUploadClient(cc grpc.ClientConnInterface) UploadClient {
	return &uploadClient{cc}
}

func (c *uploadClient) Upload(ctx context.Context, in *UploadRequest, opts ...grpc.CallOption) (*UploadResponse, error) {
	out := new(UploadResponse)
	err := c.cc.Invoke(ctx, "/itproject.upload/upload", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UploadServer is the server API for Upload service.
// All implementations must embed UnimplementedUploadServer
// for forward compatibility
type UploadServer interface {
	Upload(context.Context, *UploadRequest) (*UploadResponse, error)
	mustEmbedUnimplementedUploadServer()
}

// UnimplementedUploadServer must be embedded to have forward compatible implementations.
type UnimplementedUploadServer struct {
}

func (*UnimplementedUploadServer) Upload(context.Context, *UploadRequest) (*UploadResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Upload not implemented")
}
func (*UnimplementedUploadServer) mustEmbedUnimplementedUploadServer() {}

func RegisterUploadServer(s *grpc.Server, srv UploadServer) {
	s.RegisterService(&_Upload_serviceDesc, srv)
}

func _Upload_Upload_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UploadRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UploadServer).Upload(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/itproject.upload/Upload",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UploadServer).Upload(ctx, req.(*UploadRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Upload_serviceDesc = grpc.ServiceDesc{
	ServiceName: "itproject.upload",
	HandlerType: (*UploadServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "upload",
			Handler:    _Upload_Upload_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api.proto",
}
