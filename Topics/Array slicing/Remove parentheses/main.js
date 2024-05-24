function parentheses(string) {
    string = string.split('');
    string.splice(0, 1);
    string.splice(-1, 1);
    return string
}