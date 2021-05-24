
// using element i have selected all the above boxes
element = document.getElementsByClassName("container");
// using percolatevar i have selected all the boxes in which the text changes
percolatevar = document.getElementsByClassName("changetext");
// dict maps all the element to one which have been clicked odd number of times and other to 0
var dict = {}
// in adj map i have stored all the adjacent edges of the edge.
// the top edges have been connected to -1
// the bottom edges have been connected to -2
var adj = {}
// in visited i have stored all the egdes which have been visited during the dfs
var visited = {}
// in connected i have taken whether -1 is connected to -2 or not if yes i have used it to print the "system percolates"
var connected = {}
// now i am making dictionary time complexity is order n
for (var i = -2; i < element.length; i++) {
    dict[i] = 0;
}
// function reset starts here
function reset() {
    console.log("reset")
    for (var i = -2; i < element.length; i++) {
        dict[i] = 0;
        visited[i] = 0;
        connected[i] = 0;
        adj[i] = new Set();
    }
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "black"
        // percolatevar[1].style.color="red";
    }
    count = 0
    watercells = 0;
    percolatevar[1].innerHTML = "System Does Not Percolate"
    percolatevar[0].innerHTML = "The percentage of active cells is:" + ((count / element.length) * 100).toFixed(2) + "%" + "<br>"

    percolatevar[0].innerHTML += "The percentage of water occupied cells is:" + ((watercells / element.length) * 100).toFixed(2) + "%"
}
function random(){
    
    reset();
    var dictRandom={};
    //arr=Array.from({length: 100}, () => ([0,0]))
    let multiplier=1000000000;
    for(var i=0;i<element.length;i++){
        var randomCellMap=Math.floor(Math.random()*multiplier);
        
        dictRandom[randomCellMap]=i;
    }
    
    var items = Object.keys(dictRandom).map(function(key) {
        return [ dictRandom[key],key];
    });
    
    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    
    // Create a new array with only the first 5 items
    
    //console.log(items.slice(0, 5));
    for(var i=0;i<element.length;i++){
        var cell=items[i][0];
        ithbox(cell);
        if (connected[-1] == connected[-2] & connected[-1] == 1) {

            break;
        }
    }

}
// function reset ends here
// function ithbox starts
function ithbox(theta) {

    if (dict[theta] == 0) {
        // if the box has been visited odd times i make it green
        element[theta].style.backgroundColor = "green";
        dict[theta]++;
    }
    else if (dict[theta] == 1) {
        // if the box has been visited even times i make it black
        element[theta].style.backgroundColor = "black";
        dict[theta]--;
    }
    // i am reseting adj connected and visited time order n
    for (var i = -2; i < element.length; i++) {
        visited[i] = 0;
        connected[i] = 0;
        adj[i] = new Set();
    }
    // i am adding edges here
    function addedge(u, v) {
        adj[v].add(u);
        adj[u].add(v);
    }
    // i am adding unidirectional edges here they have been taken to stop backflush
    function addUniDirectEdge(u, v) {
        adj[u].add(v);
    }
    // adding all upper edges with -1
    for (var i = 0; i < 10; i++) {
        addedge(i, -1);
    }
    // adding all lower edges with -2
    for (var i = element.length - 10; i < element.length; i++) {
        addUniDirectEdge(i, -2);
    }
    // adding all adjacent and upper edges
    for (var i = 0; i < element.length; i++) {
        if (dict[i] == 1 & dict[i + 10] == 1) {
            addedge(i, i + 10);
        }
        if (i % 10 != 9 & dict[i] == 1 & dict[i + 1] == 1) {
            addedge(i, i + 1);
        }
    }
    // the dfs starts here
    function printOne(v) {
        if (visited[v] == 0) {

            dfs(v);
        }
    }
    function dfs(v) {
        visited[v] = 1;
        console.log(v);
        if (v == -2) {
            connected[-1] = 1;
            connected[-2] = 1;
        }
        adj[v].forEach(printOne);
    }
    // dfs function ends here
    // we run a dfs through -1 and check if we reach -2
    dfs(-1);
    for (var i = 0; i < element.length; i++) {
        if (dict[i] == 1 & visited[i] == 1) {
            element[i].style.backgroundColor = "blue";

        }
        if (visited[i] == 0 & dict[i] == 1) {
            element[i].style.backgroundColor = "green";
        }
    }
    var count = 0;
    var watercells = 0;
    for (var i = 0; i < element.length; i++) {
        if (dict[i] == 1) {
            count++;
        }
        if (visited[i] == 1 && dict[i] == 1) {
            watercells++;
        }
    }
    console.log("The percentage of active cells is:", (count / element.length) * 100, "%");
    console.log("The percentage of water occupied cells is:", (watercells / element.length) * 100, "%");
    if (connected[-1] == connected[-2] & connected[-1] == 1) {

        console.log("System percolates");
        // percolatevar[0].innerHTML="The percentage of active cells is:",(count/element.length)*100,"%"
        percolatevar[1].innerHTML = "System Percolates"
    }
    else {

        console.log("System Does not Percolate");
        percolatevar[1].innerHTML = "System Does Not Percolate"

    }
    percolatevar[0].innerHTML = "The percentage of active cells is:" + ((count / element.length) * 100).toFixed(2) + "%" + "<br>"

    percolatevar[0].innerHTML += "The percentage of water occupied cells is:" + ((watercells / element.length) * 100).toFixed(2) + "%"



}
// function ithbox ends




