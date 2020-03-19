const server = require("./server.js");

const port = process.env.PORT || 4900

server.listen(PORT, () => console.log(`Server is running on ${port}`))