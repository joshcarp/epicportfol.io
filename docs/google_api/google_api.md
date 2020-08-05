


# google_api
## Integration Diagram
![](https://plantuml.com/plantuml/svg/~1UDgCZZ5Bn40GHllv5PzLgYj44SlB9QlON40Ybh8aGx9aToVCJb0H_xl8YNLUEUynVDLkgAgmYx-qVkcxHtTsptNlMZHTwt0ueErmxdguzgc_-aztVzszbOx5lDgM8bcmo9X4fiXlVWqqXv5HZ9N5FbUcClZ8IFu3rtStzxUOEKopKLb2NhtwX47IAfcpuOk0an-MIMNBOoDH50zHrCVNEHZ_Mj6HzM9EqGyB0RMgl5zEZOPK9DCt7JcFMue_0G00__zNu5rZ)




## Application Index



<span style="color:grey">No Applications Defined</span>

## Type Index

| Application Name | Type Name | Source Location |
|----|----|----|
| google_api | [CustomHttpPattern](#google_api.CustomHttpPattern) | []()|
| google_api | [Http](#google_api.Http) | []()|
| google_api | [HttpRule](#google_api.HttpRule) | []()|




# Types



<a name=google_api.CustomHttpPattern></a><details>
<summary>google_api.CustomHttpPattern</summary>
### google_api.CustomHttpPattern

- A custom pattern is used for defining custom HTTP verb.

![](https://plantuml.com/plantuml/svg/~1UDgCa37BmZ0OXFVyYlkwz9DQS9PIMfgWBer8d2MqnGRRj2Hl9_6_Yo0wkEJP3XwEumfFsj4o3YmEXiKnWdYhvLd9dQZ5gLI2ev9S84t19Mgf8FX1_NtKuDRWhQmPjFU8giNJDEw9vgCcwfoDe3qk6sGP_lbwSarlsXL-DEGvxYp1pTWMMtXonbvPWbbJ_yqFLdIsVTtu3000___-IKeY)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCa45hX30KXE_v5LCljbXBpqL4CQ7jnPIIFKjGqR2QIF8yBVlVbuLbzx2NVBS7tnk6gG9fJ_kwi3GQbgQ8ugRM1oM_HIl-QoKu6ia5yXnSefKAWl-gbxiQdHhTbVMB3W59imTowm_HzgU9HcyJw83k4qM1L_xkV3-RuGsJSzCoTdep7qyVA4kSM8QZiGE-4CWREx4CcwRvSPzPDThXkkWb003__s-TJcO0)

#### Fields

| Field name | Type | Description |
|----|----|----|
| kind | string | The name of this custom HTTP verb.
|
| path | string | The path matched by this custom verb.
|

</details>
<a name=google_api.Http></a><details>
<summary>google_api.Http</summary>
### google_api.Http

- Defines the HTTP configuration for an API service. It contains a list of
 [HttpRule][google.api.HttpRule], each specifying the mapping of an RPC method
 to one or more HTTP REST API methods.

![](https://plantuml.com/plantuml/svg/~1UDgCaCrA0p4KHlTvYizkHbCBhiimj9YWRXgeSHrYSiM1c8pv4KLyTnaGrpdRUpXSlaEfDjVs5jZG3Hi6TF6d7f-qkfCdUJvgAN2hXCHk1w5mKXfIFEYBVxMxslqhSy6MWirzhSi6ji3SO1nnAQvJTg-ply9wmJJXcstnqaBuCfvSycGo5SeVv0rzBZQMEKNiyPnIO5la5gXW3yuVwRrHT8Hn3PrRe8bpziCE5Fswwsy0003__y5_Jri0)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCaqrFiq0KXVVyYlkowIi8ALqsJTEc47LJJCNrPCfSwSJf3Cw7iJ7-TmFOJsF3xExDS-uvEOIPiLHRjnNUeFVp1WFezNxG-NEHtsNBR3KliXGMUPf1546Qmp8l84iVYdy7jFVLtbczKb1Zm2-TiMhh0pL0XZ2PmF_qLkbomzaDL4fL0WcjURneiNjhwqTgBMe9qobyUY6ySibW3CPgBYilX9hQpN7-sjiqoiua-TkaWVPtNvmGEyAmL0o9HeFw7Hd1ZvfAmvM4CQoL4bu8sWaqC8OWUC8tXx94c3I7LaxWD0YE4Lgmop2wdg6HxdDGnhZbIb91rbmoBgjhPY6i5TkTzj7rsqf-TTWA60gqU2gfq5uqMcxE5igS0-vir6Xg9GsIooW61PPMwTFFGn88eWZyOHm7Ff2HHqRT8edZ17mWmyFcWCnGikRF-0u00F__fpVSOG00)

#### Fields

| Field name | Type | Description |
|----|----|----|
| fully_decode_reserved_expansion | bool | When set to true, URL path parmeters will be fully URI-decoded except in
 cases of single segment matches in reserved expansion, where "%2F" will be
 left encoded.
 The default behavior is to not decode RFC 6570 reserved characters in multi
 segment matches.
|
| rules | sequence of HttpRule | |

</details>
<a name=google_api.HttpRule></a><details>
<summary>google_api.HttpRule</summary>
### google_api.HttpRule

- `HttpRule` defines the mapping of an RPC method to one or more HTTP
 REST API methods. The mapping specifies how different portions of the RPC
 request message are mapped to URL path, URL query parameters, and
 HTTP request body. The mapping is typically specified as an
 `google.api.http` annotation on the RPC method,
 see "google/api/annotations.proto" for details.
 The mapping consists of a field specifying the path template and
 method kind.  The path template can refer to fields in the request
 message, as in the example below which describes a REST GET
 operation on a resource collection of messages:
     service Messaging {
       rpc GetMessage(GetMessageRequest) returns (Message) {
         option (google.api.http).get = "/v1/messages/{message_id}/{sub.subfield
}";
       }
     }
     message GetMessageRequest {
       message SubMessage {
         string subfield = 1;
       }
       string message_id = 1; 
 mapped to the URL
       SubMessage sub = 2;    
 `sub.subfield` is url-mapped
     }
     message Message {
       string text = 1; 
 content of the resource
     }
 The same http annotation can alternatively be expressed inside the
 `GRPC API Configuration` YAML file.
     http:
       rules:
         - selector: <proto_package_name>.Messaging.GetMessage
           get: /v1/messages/{message_id}/{sub.subfield}
 This definition enables an automatic, bidrectional mapping of HTTP
 JSON to RPC. Example:
 HTTP | RPC
 -----|-----
 `GET /v1/messages/123456/foo`  | `GetMessage(message_id: "123456" sub: SubMessa
ge(subfield: "foo"))`
 In general, not only fields but also field paths can be referenced
 from a path pattern. Fields mapped to the path pattern cannot be
 repeated and must have a primitive (non-message) type.
 Any fields in the request message which are not bound by the path
 pattern automatically become (optional) HTTP query
 parameters. Assume the following definition of the request message:
     service Messaging {
       rpc GetMessage(GetMessageRequest) returns (Message) {
         option (google.api.http).get = "/v1/messages/{message_id}";
       }
     }
     message GetMessageRequest {
       message SubMessage {
         string subfield = 1;
       }
       string message_id = 1; 
 mapped to the URL
       int64 revision = 2;    
 becomes a parameter
       SubMessage sub = 3;    
 `sub.subfield` becomes a parameter
     }
 This enables a HTTP JSON to RPC mapping as below:
 HTTP | RPC
 -----|-----
 `GET /v1/messages/123456?revision=2&sub.subfield=foo` | `GetMessage(message_id:
 "123456" revision: 2 sub: SubMessage(subfield: "foo"))`
 Note that fields which are mapped to HTTP parameters must have a
 primitive type or a repeated primitive type. Message types are not
 allowed. In the case of a repeated type, the parameter can be
 repeated in the URL, as in `...?param=A&param=B`.
 For HTTP method kinds which allow a request body, the `body` field
 specifies the mapping. Consider a REST update method on the
 message resource collection:
     service Messaging {
       rpc UpdateMessage(UpdateMessageRequest) returns (Message) {
         option (google.api.http) = {
           put: "/v1/messages/{message_id}"
           body: "message"
         };
       }
     }
     message UpdateMessageRequest {
       string message_id = 1; 
 mapped to the URL
       Message message = 2;   
 mapped to the body
     }
 The following HTTP JSON to RPC mapping is enabled, where the
 representation of the JSON in the request body is determined by
 protos JSON encoding:
 HTTP | RPC
 -----|-----
 `PUT /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id: "12345
6" message { text: "Hi!" })`
 The special name `*` can be used in the body mapping to define that
 every field not bound by the path template should be mapped to the
 request body.  This enables the following alternative definition of
 the update method:
     service Messaging {
       rpc UpdateMessage(Message) returns (Message) {
         option (google.api.http) = {
           put: "/v1/messages/{message_id}"
           body: "*"
         };
       }
     }
     message Message {
       string message_id = 1;
       string text = 2;
     }
 The following HTTP JSON to RPC mapping is enabled:
 HTTP | RPC
 -----|-----
 `PUT /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id: "12345
6" text: "Hi!")`
 Note that when using `*` in the body mapping, it is not possible to
 have HTTP parameters, as all fields not bound by the path end in
 the body. This makes this option more rarely used in practice of
 defining REST APIs. The common usage of `*` is in custom methods
 which don't use the URL at all for transferring data.
 It is possible to define multiple HTTP methods for one RPC by using
 the `additional_bindings` option. Example:
     service Messaging {
       rpc GetMessage(GetMessageRequest) returns (Message) {
         option (google.api.http) = {
           get: "/v1/messages/{message_id}"
           additional_bindings {
             get: "/v1/users/{user_id}/messages/{message_id}"
           }
         };
       }
     }
     message GetMessageRequest {
       string message_id = 1;
       string user_id = 2;
     }
 This enables the following two alternative HTTP JSON to RPC
 mappings:
 HTTP | RPC
 -----|-----
 `GET /v1/messages/123456` | `GetMessage(message_id: "123456")`
 `GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id: "123
456")`
 # Rules for HTTP mapping
 The rules for mapping HTTP path, query parameters, and body fields
 to the request message are as follows:
 1. The `body` field specifies either `*` or a field path, or is
    omitted. If omitted, it indicates there is no HTTP request body.
 2. Leaf fields (recursive expansion of nested messages in the
    request) can be classified into three types:
     (a) Matched in the URL template.
     (b) Covered by body (if body is `*`, everything except (a) fields;
         else everything under the body field)
     (c) All other fields.
 3. URL query parameters found in the HTTP request are mapped to (c) fields.
 4. Any body sent with an HTTP request can contain only (b) fields.
 The syntax of the path template is as follows:
     Template = "/" Segments [ Verb ] ;
     Segments = Segment { "/" Segment } ;
     Segment  = "*" | "**" | LITERAL | Variable ;
     Variable = "{" FieldPath [ "=" Segments ] "}" ;
     FieldPath = IDENT { "." IDENT } ;
     Verb     = ":" LITERAL ;
 The syntax `*` matches a single path segment. The syntax `**` matches zero
 or more path segments, which must be the last part of the path except the
 `Verb`. The syntax `LITERAL` matches literal text in the path.
 The syntax `Variable` matches part of the URL path as specified by its
 template. A variable template must not contain other variables. If a variable
 matches a single path segment, its template may be omitted, e.g. `{var}`
 is equivalent to `{var=*}`.
 If a variable contains exactly one path segment, such as `"{var}"` or
 `"{var=*}"`, when such a variable is expanded into a URL path, all characters
 except `[-_.~0-9a-zA-Z]` are percent-encoded. Such variables show up in the
 Discovery Document as `{var}`.
 If a variable contains one or more path segments, such as `"{var=foo/*}"`
 or `"{var=**}"`, when such a variable is expanded into a URL path, all
 characters except `[-_.~/0-9a-zA-Z]` are percent-encoded. Such variables
 show up in the Discovery Document as `{+var}`.
 NOTE: While the single segment variable matches the semantics of
 [RFC 6570](https:
tools.ietf.org/html/rfc6570) Section 3.2.2
 Simple String Expansion, the multi segment variable **does not** match
 RFC 6570 Reserved Expansion. The reason is that the Reserved Expansion
 does not expand special characters like `?` and `#`, which would lead
 to invalid URLs.
 NOTE: the field paths in variables and in the `body` must not refer to
 repeated fields or map fields.

![](https://plantuml.com/plantuml/svg/~1UDgCai5FmZ0Knk_zApvtGOiZU2M4GDYYNfZ1ULvA-m9DIeljsy4O_tV38ieyxPtwllv-pNVeCh6At1wT60qUCHfXqFoWgxUwUYmtvNPLbmNMLL4Ypr5Ks5GrokAvllb51xywkAlGJgM4x8dvj6qTPL09pHJpEMwB-n3rmPexN6wnME1JZA6CiMo3LwxPMM-itoVC8EKhlRVaDM5-CHPIYZ5smNnWXiJH-hqOGxU9mx5JrjtnZByePeg-4mmvOhfMziJNwqcnFlI2aFf0sriZfLFmYPh_LH8vqXpYN_ObcYbadYERJYOoG_CWbkJD-HDy1m00__yKeOLu)
[Full Diagram](https://plantuml.com/plantuml/svg/~1UDgCaa5F-a0GnU_z5E_V2t-BRUYL40AXZNgX1kjvitGdPUEoMxlJWp5-TmC80chIkStalVdDs-pCisovsvfWqBk2mG2zwaiwVowBktoPh-Pbdc5HP3dY65c1PL4YpnxAVoTfxwszRmqg8xr7M7MUtJQ4z10ZJ2RudzswjjfeTOFQkTgGa8rE5dlPFNFpA9cfjPXEyHuCyQAjmXYUMsthO8X6ykQx_pXYf5AQjRFIYBMsIjlQ7vZftymTRTKPEg9-sO4nekY9NZko5M5oT4oZA1XYxTJR-Mc7g7lBZpXxWo93JEUMclWgNBMv63X_AUWksfPyuwmdSNsA9qCLk_RyfKIAA8uHfacI8eGOdIQZ98b2Y3IOaLMxF_aP003__o1xisa0)

#### Fields

| Field name | Type | Description |
|----|----|----|
| additional_bindings | sequence of HttpRule | |
| body | string | The name of the request field whose value is mapped to the HTTP body, or
 `*` for mapping all fields not captured by the path pattern to the HTTP
 body. NOTE: the referred field must not be a repeated field and must be
 present at the top-level of request message type.
|
| custom | CustomHttpPattern | The custom pattern is used for specifying an HTTP method that is not
 included in the `pattern` field, such as HEAD, or "*" to leave the
 HTTP method unspecified for this rule. The wild-card rule is useful
 for services that provide content to Web (HTML) clients.
|
| delete | string | Used for deleting a resource.
|
| get | string | Used for listing and getting information about resources.
|
| patch | string | Used for updating a resource.
|
| post | string | Used for creating a resource.
|
| put | string | Used for updating a resource.
|
| response_body | string | Optional. The name of the response field whose value is mapped to the HTTP
 body of response. Other response fields are ignored. When
 not set, the response message will be used as HTTP body of response.
|
| selector | string | Selects methods to which this rule applies.
 Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
|

</details>

<div class="footer">
