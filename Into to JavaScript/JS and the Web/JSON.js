
//Convert JSON String to JS Object
const jsonStr = '{"greeting": "hello"}'
const aPlainObj = JSON.parse(jsonStr);

aPlainObj.greeting = 'hi'

//Convert JS Object to JSON String
const data = {
    firstName: "John",
    lastName: "Doe",
    geeting: "Hello",
}
JSON.stringify(data)
