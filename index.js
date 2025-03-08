require('dotenv').config()
const express = require('express') 
const app = express() 
const port = 3000

const githubData = {
    {
        "login": "prasooncodes",
        "id": 119727537,
        "node_id": "U_kgDOByLlsQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/119727537?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/prasooncodes",
        "html_url": "https://github.com/prasooncodes",
        "followers_url": "https://api.github.com/users/prasooncodes/followers",
        "following_url": "https://api.github.com/users/prasooncodes/following{/other_user}",
        "gists_url": "https://api.github.com/users/prasooncodes/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/prasooncodes/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/prasooncodes/subscriptions",
        "organizations_url": "https://api.github.com/users/prasooncodes/orgs",
        "repos_url": "https://api.github.com/users/prasooncodes/repos",
        "events_url": "https://api.github.com/users/prasooncodes/events{/privacy}",
        "received_events_url": "https://api.github.com/users/prasooncodes/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 7,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2022-12-03T08:07:41Z",
        "updated_at": "2025-02-17T13:52:53Z"
      }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('prasoondotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})