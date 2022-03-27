function preorder(N) {
    function DFS(num) {
        if (num > N) {
            return;
        }
        console.log(num);
        DFS(num * 2);
        DFS(num * 2 + 1);
    }
    DFS(1);
}
function inorder(N) {
    function DFS(num) {
        if (num > N) {
            return;
        }
        DFS(num * 2);
        console.log(num);
        DFS(num * 2 + 1);
    }
    DFS(1);
}
function postorder(N) {
    function DFS(num) {
        if (num > N) {
            return;
        }
        DFS(num * 2);
        DFS(num * 2 + 1);
        console.log(num);
    }
    DFS(1);
}

console.log(preorder(7));
console.log(inorder(7));
console.log(postorder(7));
