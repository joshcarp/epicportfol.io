# Personal ePortfolio System**

Adapted from Wikipedia
> _An **electronic portfolio** (also known as a **digital portfolio**, **online portfolio**, **e-portfolio**, **e-folio**, or **eFolio**) is a collection of electronic_ [_evidence_](https://en.wikipedia.org/wiki/Evidence "Evidence") _assembled and managed by a user. Such electronic evidence may include input text, electronic files, images,_ [_multimedia_](https://en.wikipedia.org/wiki/Multimedia "Multimedia")_,_ [_blog_](https://en.wikipedia.org/wiki/Blog "Blog") _entries, and_ [_hyperlinks_](https://en.wikipedia.org/wiki/Hyperlink "Hyperlink")_. E-portfolios are both demonstrations of the user's abilities and platforms for self-expression. If they are online, users can maintain them dynamically over time. An e-portfolio can be regarded as a type of learning record that provides evidence of achievement. E-portfolios, like traditional_ [_portfolios_](https://en.wikipedia.org/wiki/Career_portfolio "Career portfolio")_, can facilitate students' reflection on their own learning, leading to more awareness of learning strategies and needs_

__From [https://uwaterloo.ca/centre-for-teaching-excellence/teaching-resources/teaching-tips/educational-technologies/all/eportfolios](https://uwaterloo.ca/centre-for-teaching-excellence/teaching-resources/teaching-tips/educational-technologies/all/eportfolios)__

_An academic ePortfolio is a digital collection created by a student of their course-related work, like essays, posters, photographs, videos, and artwork; academic ePortfolios can also capture other aspects of a student’s life, such as volunteer experiences, employment history, extracurricular activities, and more. In other words, ePortfolios document and make visible student learning. But a good ePortfolio should be more than just a collection of products. A good ePortfolio is both about being a product (a digital collection of artifacts) and a process (of reflecting on those artifacts and what they represent)._

The project for COMP30022 is to develop a personal ePortfolio system. The ePortfolio system must be capable of allowing you to submit individual guest lecture reports and end-of-subject individual reflections that are requirements in COMP30022, as well as a team report. You will be assigned a client in addition, specifically a Masters student (or group of Masters students) studying SWEN90016. The Masters students will be assigned in Week 3 of the semester.

Technology and deployment choices are subject to your requirements.

The motivational model below will be explained in lectures.



## Requirements
- Docker

## Build the server
`make docker`
- This will build the current project in docker
## Start the server
`make run`
- This will run a docker container of the image on localhost:50051
## Ping the server
`make ping`
- This will run grpcurl on the `itProject/Hello` service and print the response
```bash
docker run --rm joshcarp/grpcurl --plaintext host.docker.internal:50051 itproject.itProject/Hello
{
  "Content": "Hello World"
}
```
## Build the proto specifications
`make proto`
- This will rebuild the proto generated code in proto/it-project
