# GitHub cards
1. Create a new Angular application
2. Add bootstrap to the application
3. Create a component style like Bootstrap card that get the username (`string`) data via `@Input()`
4. Create a model
5. Create a service to get a user by name
6. In the main component (`app.component`) add a search feature

## Resources
- [https://api.github.com/users/yaakovhatam](https://api.github.com/users/yaakovhatam)



## Example of data
```javascript
{
  "login": "YaakovHatam",
  "id": 6986221,
  "node_id": "MDQ6VXNlcjY5ODYyMjE=",
  "avatar_url": "https://avatars.githubusercontent.com/u/6986221?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/YaakovHatam",
  "html_url": "https://github.com/YaakovHatam",
  "followers_url": "https://api.github.com/users/YaakovHatam/followers",
  "following_url": "https://api.github.com/users/YaakovHatam/following{/other_user}",
  "gists_url": "https://api.github.com/users/YaakovHatam/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/YaakovHatam/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/YaakovHatam/subscriptions",
  "organizations_url": "https://api.github.com/users/YaakovHatam/orgs",
  "repos_url": "https://api.github.com/users/YaakovHatam/repos",
  "events_url": "https://api.github.com/users/YaakovHatam/events{/privacy}",
  "received_events_url": "https://api.github.com/users/YaakovHatam/received_events",
  "type": "User",
  "site_admin": false,
  "name": "yaakov hatam",
  "company": "@codestackacademy ",
  "blog": "",
  "location": "Jerusalem, Israel",
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": null,
  "public_repos": 54,
  "public_gists": 13,
  "followers": 66,
  "following": 7,
  "created_at": "2014-03-18T11:04:24Z",
  "updated_at": "2021-01-21T09:50:39Z"
}
```