# “Would You Rather?” Project

This is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”.

Users are able to ask and answer questions, see which questions they have/haven’t answered, see how other people have voted, and see the ranking of users on the leaderboard.

Once the user logs in, the user is able to toggle between his/her answered and unanswered polls on the home page. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll; they are not allowed to change their answer after they’ve voted. When the user comes back to the home page, the polling question appears in the “Answered” column.

## To run it locally:

1.  Clone into repo:
    - `git clone https://github.com/jefferygraham/reactnd-project-would-you-rather.git`
2.  Go to the root of the project
    - `cd reactnd-project-would-you-rather`
3.  Install all project dependencies with
    - run `npm install`
4.  Start the app with with
    - run `yarn start`

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies used:

- React
- Redux
- React Router
- React-Bootstrap
