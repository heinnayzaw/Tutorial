const http = require ('http');

const server = http.createServer((req,res) => {

if ( req.url === '/'){
res.end('This is Home Page u goofy')
}
else if (req.url === '/about')
{
    res.end('This is About Page or whatever does not really matter')
}

else {
    res.end(
        `<h1> OOPS Break </h1>
        <p> Turn around </p>
        <a href ="/">Back Home</a>`
    )
   
}


})

server.listen(5000)