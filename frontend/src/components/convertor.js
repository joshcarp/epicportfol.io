const { profile, artifact, job } = require('./../proto/api_pb.js');

export function profileFromJson(p){
    const j = new profile()
    j.setFullName(p.fullName)
    j.setUsername(p.username)
    j.setEmail(p.email)
    j.setPicture(p.picture)
    j.setBio(p.bio)
    j.setContent(p.content)
    j.setLinksList(p.linksList)
    return j
}
