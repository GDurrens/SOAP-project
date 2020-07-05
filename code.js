var saveAsSvg = function(filename) {
				var svgContent = cy.svg({scale: 1, full: true, bg: '#ffff00'});
				var blob = new Blob([svgContent], {type:"image/svg+xml;charset=utf-8"});
				saveAs(blob, "SOAP.svg");
	
};

document.addEventListener('DOMContentLoaded',function(){
	
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
				"opacity": 0.7,
				"curve-style": "bezier",
				"font-size": "0.3em",
				"text-wrap": "wrap",
				"text-max-width": "50px",
				"text-justification": "center",
				"label": "data(label)",
				"text-opacity": 0,
				"target-arrow-shape": "triangle-backcurve",
				"target-arrow-color": "rgb(255,200,200)"
				}
			}],
		
		elements: fetch("data.json").then(function( res ){ return res.json(); }),

		ready: function(){
			this.layout({
				name: 'cose-bilkent',
				idealEdgeLength: "100",
				quality: "proof",
				randomize: true,
				nodeRepulsion: 4500,
								

			}).run();
			}
		
	});
	
	cy.on('mouseover', 'edge', function(evt){
			var edge = evt.target;			
  			edge.style("text-opacity", 1);
		
			edge.once('mouseout', function(evt){
				var node = evt.target;				
				edge.style("text-opacity", 0);
				});
		
			});
	
	

});



