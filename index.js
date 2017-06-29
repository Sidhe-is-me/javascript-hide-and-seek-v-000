// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.

function getFirstSelector(selector){
     return document.querySelector(selector)
}

// Define a function nestedTarget() that pulls a .target out of #nested
function nestedTarget(){
     const element = document.getElementById('nested')
     return element
}

// define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
}
}
// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node

function deepestChild(){
    var grandNode = document.getElementById('grand-node').querySelectorAll('div');
   var deepest = grandNode[grandNode.length - 1];
   return deepest
}