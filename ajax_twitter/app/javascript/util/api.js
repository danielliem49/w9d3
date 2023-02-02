const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    "Accept": "application/json", 
    "Content-Type": "application/json",
    "X-CSRF-Token": csrfToken,
    ...options.headers
  };

  let response = await fetch(url, options);

    if (response.ok) {
      return response.json();
    }else{
      throw new Error(response);
    }
}


export function followUser(id) {
  console.log(id);
  return customFetch(`/users/${id}/follow`, {method: "POST"});
}
export function unfollowUser(id) {
  console.log(id);
  return customFetch(`/users/${id}/follow`, { method: "DELETE" })
}



