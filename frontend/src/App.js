import React, { useState } from 'react'
import Homepage from './containers/Homepage'
import UserProfile from './containers/UserProfile'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisterPage from './containers/RegisterPage'
import { useEffect } from 'react';
const yaml = require('js-yaml');

export default function App() {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        setProfile(yaml.safeLoad(`full_name: Joshua Carpeggiani
email: josh@joshcarp.com
picture: https://avatars2.githubusercontent.com/u/32605850?s=460&v=4
bio: In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design.Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors including Pages and Microsoft Word have since adopted Lorem ipsum as well.

jobs:
    - title: Software engineer
      dates: 2019-2020
      company: akfhdkasdaskj
      description: Beep boop whatevs
    - title: Memester
      dates: 2009-2010
      company: akfhdkasdaskj
      description: Beep boop whatevs
    - title: Memester
      dates: 2008-2009
      company: akfhdkasdaskj
      description: Beep boop whatevs
links:
      - https://reddit.com
      - https://facebook.com
      - https://linkedin.com
      - https://instagram.com
artifacts:
    - src: https://picsum.photos/id/3/1200/800
    - src: https://picsum.photos/id/3/1200/800
    - src: https://picsum.photos/id/3/1200/800
    - src: https://picsum.photos/id/3/1200/800
    `));
    }, [])
    if (profile == null) {
        return <div>Loading...</div>;
    }
    console.log(profile);
    return (
        <Router>
            <Switch>
                <Route exact path="/register">
                    <RegisterPage />
                </Route>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/profile">
                    <UserProfile profile={profile} />
                </Route>
            </Switch>
        </Router>
    )
}
