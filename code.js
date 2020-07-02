(function(){
  var toJson = function(res){ return res.json(); };

  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
				
    ready: function(){								
								this.layout({
												name: 'fcose',
												idealEdgeLength: "100",
												quality: "proof",
								
								}).run();
				},

    style: fetch('cy-style.json').then(toJson),

    elements: fetch('data.json').then(toJson)
						
  });

})();

