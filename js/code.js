fetch('../data/data.json')
.then((response)=> {
    return response.json();
})
.then((data)=> {
    console.table(data.result);
})
.catch(()=> {
    console.log("Please try again");
});