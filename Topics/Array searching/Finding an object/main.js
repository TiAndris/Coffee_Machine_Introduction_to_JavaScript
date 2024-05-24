function search(objects) {
// Write your code here
    return objects.findIndex(e => e.name === "John" && e.age === 30);
}