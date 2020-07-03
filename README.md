# SOAP-project
SOAP : Systemic Overview of the Anthropocene Pitfalls

A causality diagram of our most pressing world issues

Visible ---> [here](https://gdurrens.github.io/SOAP-project/)

HOW TO MODIFY :
---------------

Just edit the data.json file with a text editor to add nodes or edges or modify their labels.
the json is made of blocks : nodes and links (the arrows)
nodes have numbers as ids.
links have "e#" as ids (e for edge)


HOW IT WORKS:
-------------

the network construction is relying on [Cytoscape.js](https://js.cytoscape.org/)
and the cose-bilkent layout algorithm.




## Dependencies

 * Cytoscape.js ^3.2.0
 * cose-base ^1.0.0


CREDITS:
--------

# Cose-Bilkent algorithm:

U. Dogrusoz, E. Giral, A. Cetintas, A. Civril, and E. Demir, "[A Layout Algorithm For Undirected Compound Graphs](http://www.sciencedirect.com/science/article/pii/S0020025508004799)", Information Sciences, 179, pp. 980-994, 2009.
