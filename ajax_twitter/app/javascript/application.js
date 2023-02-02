// Entry point for the build script in your package.json
import FollowToggle from "./follow_toggle";
import InfiniteTweets from "./infinite_tweets";
import UsersSearch from "./users_search";
import TweetCompose from "./tweet_compose";
import Followers from "./followers";
import { API } from "./util";


if (process.env.NODE_ENV !== "production") {
  window.API = API; 
  // window.arrObj = arrObj;
}

let followToggleSelector = ".follow-toggle";
let infiniteTweetsSelector = "";
let usersSearchSelector = "";
let tweetComposeSelector = "";
let followersSelector = "";

// window.arr = arr;
document.querySelectorAll(followToggleSelector).forEach((el) => {
  console.log("test")
  new FollowToggle(el);
  console.log("button is working")
});

// document.querySelectorAll(infiniteTweetsSelector).forEach((el) => {
//   new InfiniteTweets(el);
// });

// document.querySelectorAll(usersSearchSelector).forEach((el) => {
//   new UsersSearch(el);
// });

// document.querySelectorAll(tweetComposeSelector).forEach((el) => {
//   new TweetCompose(el);
// });

// document.querySelectorAll(followersSelector).forEach((el) => {
//   new Followers(el);
// });