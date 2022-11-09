import * as grpcWeb from 'grpc-web';

import * as hello_pb from './hello_pb';


export class HelloServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  hello(
    request: hello_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: hello_pb.HelloResponse) => void
  ): grpcWeb.ClientReadableStream<hello_pb.HelloResponse>;

}

export class HelloServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  hello(
    request: hello_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<hello_pb.HelloResponse>;

}

