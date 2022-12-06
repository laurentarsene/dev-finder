var form = document.getElementById("myForm")
form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')
    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("profile_pic").innerHTML = `
        <img src="${data.avatar_url}"
             width="50%"/>
        `
        if (`${data.name}` == "null") {
            document.getElementById("name").innerHTML = `Not available `
        } else {
            document.getElementById("name").innerHTML = `${data.name}`
        }

        if (`${data.login}` == "null") {
            document.getElementById("login").innerHTML = `Not available`
        } else {
            document.getElementById("login").innerHTML = ` ${data.login}`
        }

        if (`${data.followers}` == "null") {
            document.getElementById("followers").innerHTML = `Not available`
        } else {
            document.getElementById("followers").innerHTML = `${data.followers}`
        }
        if (`${data.twitter_username}` == "null") {
            document.getElementById("twitter_username").innerHTML = `Not available`
        } else {
            document.getElementById("twitter_username").innerHTML = `${data.twitter_username}`
        }
        if (`${data.location}` == "null") {
            document.getElementById("location").innerHTML = `Not available`
        } else {
            document.getElementById("location").innerHTML = `${data.location}`
        }     
        
        if (`${data.blog}` == "null") {
            document.getElementById("blog").innerHTML = `Not available`
        } else {
            document.getElementById("blog").innerHTML = ` ${data.blog} `
        }        
        
        if (`${data.company}` == "null") {
            document.getElementById("company").innerHTML = ` Not available`
        } else {
            document.getElementById("company").innerHTML = `${data.company}`
        }        
        
        if (`${data.public_repos}` == "null") {
            document.getElementById("public_repos").innerHTML = `Not available `
        } else {
            document.getElementById("public_repos").innerHTML = ` ${data.public_repos}`
        }        
        
        if (`${data.following}` == "null") {
            document.getElementById("following").innerHTML = `Not available`
        } else {
            document.getElementById("following").innerHTML = `${data.following}`
        }        
        
        if (`${data.created_at}` == "null") {
            document.getElementById("created_at").innerHTML = `Not available`
        } else {
            var date = `${data.created_at}`.slice(0,10)
            document.getElementById("created_at").innerHTML = date
        }

        if (`${data.bio}` == "null") {
            document.getElementById("bio").innerHTML = `Not available`
        } else {
            document.getElementById("bio").innerHTML = `${data.bio}`
        }

    })
})