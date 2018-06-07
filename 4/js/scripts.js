function drawTree(treeHeight) {  
    for (var i = 1; i <= treeHeight; i++) {   
        var star = ' ';     
        for (var j = 1; j <= i; star += '*') {     
            star += "*";     
        }     
        console.log(star);     
    }
}
drawTree(5);