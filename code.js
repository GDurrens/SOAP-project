(function(){
	
	var cy = window.cy = cytoscape({
		
		container: document.getElementById('cy'),

		style: [
			{			
			selector: 'node',
			style: {
				'text-valign': 'center',
				'text-halign': 'center',
				'width': '50',
				'height': '50',
				'font-size': '0.5em',
				'shape': 'round-rectangle', 
				'text-max-width': '50',
				'text-wrap': 'wrap',				
				'label': function(ele){return (ele.data("id") +"\n\n" + ele.data("label"));},
				'background-color': 'rgb(255,100,100)',
				'padding': '5px'
				}
			},		

			{
			selector: 'edge',
			style: {
				"width": 5,
				"line-color": "rgb(255,200,200)",
				"curve-style": "bezier",
				"font-size": "0.2em",
				"text-wrap": "wrap",
				"text-max-width": "50px",
				"text-justification": "center",
				"label": "data(label)",
				"target-arrow-shape": "triangle-backcurve",
				"target-arrow-color": "rgb(255,200,200)"
				}
			}],
		
		elements: fetch("data.json").then(function( res ){ return res.json(); }),

		ready: function(){
			this.layout({
				name: 'fcose',
				idealEdgeLength: "100",
				quality: "proof",

			}).run();
			}

	});

})();

