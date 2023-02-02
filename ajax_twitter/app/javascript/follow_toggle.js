import { API, broadcast } from "./util";
import { followUser } from "./util/api";
import { unfollowUser } from "./util/api";


export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.handleClick = this.handleClick.bind(this);
    this.toggleButton.addEventListener("click", this.handleClick);
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    console.log("button clicked")

    if (this.followState === "followed") {
      this.unfollow();
    }else{
      this.follow();
    }
  }
  
  async follow() {
    // Your code here
    this.followState = "following";
    await followUser(this.toggleButton.dataset.userId);
    this.followState = "followed";
  }
  
  async unfollow() {
    // Your code here
    this.followState = "unfollowing";
    await unfollowUser(this.toggleButton.dataset.userId);
    this.followState = "unfollowed";
  }

  render() {
    console.log(this.followState);
    switch (this.followState) {
      // Your code here
      case "followed":
        this.toggleButton.disabled = false;
        this.toggleButton.textContent = "Unfollow!"; 
        // this.toggleButton.innerHTML = "Unfollow!"; 
        break;
      case "unfollowed":
        this.toggleButton.disabled = false;
        this.toggleButton.textContent = "Follow!"; 
        break;
      case "following":
        this.toggleButton.disabled = true;
        this.toggleButton.textContent = "Following..."; 
        break;
      case "unfollowing":
        this.toggleButton.disabled = true;
        this.toggleButton.textContent = "Unfollowing..."; 
        break;
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}