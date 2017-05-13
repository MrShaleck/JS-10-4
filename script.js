function drawTree(floor) {
    for(var i=1; i <= floor; i++) {
        var stars = '';

        for (var j = 0; j < i; j++) {
            stars = stars + '*';
        }
    console.log(stars);
    }
}

drawTree(5);