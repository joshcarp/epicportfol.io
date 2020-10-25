+++
title = "epicportfol.io"
outputs = ["Reveal"]
+++

---
# Intro



|   |  |
|:------:|:------:|
{{% fragment %}} Angus {{% /fragment %}}  | {{% fragment %}} Our Team and Philosophy {{% /fragment %}}  |
{{% fragment %}} Josh {{% /fragment %}}  | {{% fragment %}} CI/CD & Back-end {{% /fragment %}}  |
{{% fragment %}} Kevin {{% /fragment %}}  | {{% fragment %}} Client Requirements {{% /fragment %}}  |
{{% fragment %}} Haohan {{% /fragment %}}  | {{% fragment %}} Design {{% /fragment %}}  |
{{% fragment %}} Philip {{% /fragment %}}  | {{% fragment %}} Front-end {{% /fragment %}}  |





---
## Integrate everything
{{< figure src="gh.svg" height="550">}}

---
## Integrate Everything
{{< figure src="gh-screenshot.png" height="550">}}

---
## Agile Mindset

"Make decisions and re-avaulate when more information comes to light"


---
## Adapting to Challenges
***Deployment***

Cloud Build -> GitHub Actions

***Database***

Cloud SQL -> Cloud Datastore

***Authentication***

DIY Login/Register (JWT) -> Firebase


---

# CI

{{% fragment %}} - Robust {{% /fragment %}}

{{% fragment %}} - Simple and integrated {{% /fragment %}}

{{% fragment %}} - Easy to extend {{% /fragment %}}

---

{{< figure src="pipeline-old.svg" height="500">}}

---

<div class="table">

|   | cloudbuild | gh actions | 
|:------:|:------:|:------:|
{{% fragment %}} reliable {{% /fragment %}}  | {{% fragment %}} ✓ {{% /fragment %}}  |  {{% fragment %}} ✓ {{% /fragment %}}  |
{{% fragment %}} maintainability {{% /fragment %}} |  {{% fragment %}} ✗ {{% /fragment %}} |   {{% fragment %}} ✓ {{% /fragment %}} | 
{{% fragment %}} extendable {{% /fragment %}} |  {{% fragment %}} ✗ {{% /fragment %}} |   {{% fragment %}} ✓ {{% /fragment %}} |
{{% fragment %}} integrated {{% /fragment %}}  | {{% fragment %}} ✗ {{% /fragment %}} |  {{% fragment %}} ✓ {{% /fragment %}} |

</div>

---

{{< figure src="workflows.yml.png" height="500">}}

---

# Rest services

* {{% fragment %}} manual {{% /fragment %}} 
* {{% fragment %}} manual documentation {{% /fragment %}} 
* {{% fragment %}} manual server interfaces {{% /fragment %}}
* {{% fragment %}} manual clients {{% /fragment %}} 

---
```react

  componentDidMount() {
    fetch("https://api.example.com/items") // or is it /item?
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },

```
---
# Solution

- Client + Server generation

```proto
/* upload service is used to upload static assets to gcs */
service upload {

    /* upload uploads a static asset to gcp and returns a url */
    rpc upload(uploadRequest) returns(uploadResponse);
}

message uploadRequest {
    string dataurl = 1;
}

message uploadResponse {
    string url = 1;
}
```

---

Server implementation:
```go
type UploadServer interface {
	// upload uploads a static asset to gcp and returns a url
	Upload(context.Context, *UploadRequest) (*UploadResponse, error)
}
```

Client implementation:
```react
const upload = new uploadClient('https://upload.epicportfol.io');
var request = new uploadRequest();
request.setDataurl(reader.result);
upload.upload(request, {}, function (err, response) {
    console.log(err);
    console.log(response)
});
```

---

### Automatic documentation
- [Link](https://docs.epicportfol.io/services/)
<div class="table">

|   |  |  | 
|:------:|:------:|:------:|
 {{< figure src="integration.png" height="400">}} | {{< figure src="index.png" width="400">}} | {{< figure src="upload.png" width="400">}}
 
 
 </div>
 
---

{{< figure src="pipeline.svg" height="500">}}


---

# Client requirements

---
# Design

---
# Frontend

---