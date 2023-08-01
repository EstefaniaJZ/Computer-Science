/**
 * The function `isBalanced` checks if a string of parentheses, curly brackets, and square brackets is
 * balanced, meaning that each opening bracket has a corresponding closing bracket in the correct
 * order.
 * @param s - The parameter `s` is a string that represents a sequence of parentheses, curly brackets,
 * and square brackets. The function `isBalanced` checks if the sequence is balanced, meaning that
 * every opening bracket has a corresponding closing bracket in the correct order.
 * @returns either "YES" or "NO" depending on whether the input string `s` is balanced or not.
 */
function isBalanced(s) {
    let q = [];
    s = s.split("");

    if (s.length % 2 != 0) return "NO";

    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            q.push(s[i]);
        } else {
            if (s[i] === ")" && q[q.length - 1] == "(") {
                q.pop();
            } else if (s[i] === "]" && q[q.length - 1] == "[") {
                q.pop();
            } else if (s[i] === "}" && q[q.length - 1] == "{") {
                q.pop();
            } else {
                return "NO";
            }
        }
    }
    if (q.length > 0) {
        return "NO";
    }
    return "YES";
}