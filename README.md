# Concierge Auctions Code Challenge

## Introduction

Welcome!

We’re pleased to invite you to take part in our Code Challenge for this full stack developer position. If you’re reading this then you’ve passed the first part of the challenge which is simply knowing what to do with a zipped source file.

In order for you to pass this code challenge you must reply back to the invitation email with your completed code by the time indicated in the email that was sent to you. The completed code must be in zip format. The only thing we should have to do after unzipping your code is run the following commands:

```js
> npm install
> npm start
```

Once we have started the application we will test it and verify that it passes all requirements listed in the following sections. **Please read this document carefully and follow all directions**.

## Application Description

You will use the boilerplate provided to you to build an application that will tap into the github API as a datasource. The application will allow a user to search for a repo on Github and add it to a list of "favorites". For example they could type `facebook/relay`. Once the user adds a repository to their favorite list it will show up below the search field and will display the name of the repository and the number of stars that repository has. It will also display a list of the last three commits on that repository.

To be clear, this does not require you to authenticate the user with Github; these favorites are local to this app. If you run into issues with the Github API rate limiting you can create an API token to increase your rate limit. See [Person API tokens](https://github.com/blog/1509-personal-api-tokens).

You will see numerous comments throughout the codebase. Read them carefully and
follow any directions they may have. You should also remove them before submitting your final product.

Here are some relevant docs that will be useful to you:

* [Github API Docs](https://developer.github.com/v3/)
* [Material UI Docs](http://www.material-ui.com/)

## Requirements

* Users should be able to type a repo name into a search field (including the org/user name, so if the repo is under the user "facebook" and the repo name is "react" the user should be required to enter the name as "facebook/relay") and have it added to a favorites list.

* The user should be able to remove a repo for the favorites list.

* Each favorite will display the name of the repository, the number of stars that repository has and the last 3 commits to that repository.

* Each of the commits should display the author’s name and the commit message as well as how long ago it occurred (ex: ‘7 days ago’)

* Clicking the author’s name should go to a separate page that displays the authors info.

* Author’s info page should display their profile data creatively but should include at least their name, avatar, bio, number of followers and how long they have been on github.

* If the user leaves the application and returns later they should be able to see the repositories as they were the last time they visited.

* The application components should follow material design and utilize [material-ui](http://www.material-ui.com/#/) to create components.

* It must pass our linting tests. You can run `npm run lint` to see any
linting errors that you may have.

* **The application must start successfully when running `npm start`**. Even if you do not finish the entire challenge, we should be able to run `npm start` and see what you finished in the browser.

## Bonus Points

* use [graphqlhub](https://www.graphqlhub.com/) and [apollo](http://docs.apollostack.com/apollo-client/) to query the Github api and populate data.
* Utilize server side rendering for the initial render.
* Add clear and concise comments to your code explaining your reasoning
* Creativity ;)
