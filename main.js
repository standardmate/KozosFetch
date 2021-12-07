"use strict"

let url = "https://api.notion.com/v1/pages/Reading-List-380890c575c147c290663bbc94554870"

fetch(url, {
    method: "GET",
    headers: {
        Authorization: "Bearer " + token
    }
})
.then((resp) => resp.json())
.then((data) => {
    console.log(data)
})