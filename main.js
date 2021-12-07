"use strict"

let url = "https://api.notion.com/v1/pages/380890c575c147c290663bbc94554870"

fetch(url, {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Notion-Version': "2021-08-16"
    },
    // mode: "no-cors",
})
.then((resp) => resp.json())
.then((data) => {
    console.log(data)
})
