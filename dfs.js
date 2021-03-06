function graphtraversal(vertex) {
  var arr = [
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 1]
  ];
  var edges = [0, 1, 2, 3];
  var visited = {};
  var stack = [];
  stack.push(vertex);
  while (stack.length > 0) {
    var p = stack.pop();
    console.log("pop is" + p);
    if (!visited[p]) {
      visited[p] = true;
      var nearbyedges = findnearby(p, arr, visited);
      stack = stack.concat(nearbyedges);
    }
  }
  return visited;
}
function findnearby(p, arr, visited) {
  var nearby = [];
  for (var i = 0; i < arr[p].length; i++) {
    if (arr[p][i] == 1 && !visited[i]) nearby.push(i);
  }
  return nearby;
}
