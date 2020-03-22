import { select, json, geoPath, geoNaturalEarth1, zoom, event } from 'd3';
import { feature } from 'topojson';
const svg = select('svg');

const projection = geoNaturalEarth1();
const pathGenerator = geoPath().projection(projection);

const g = svg.append('g');
g.append('path')
	.attr('d', pathGenerator({type: "Sphere"}))
	.attr('class','Sphere');

svg.call(zoom().on('zoom',()=>{
	g.attr('transform', event.transform)
}));
// svg.call(zoom().on('zoom',() => {
// 	console.log('zoom');
// });

json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json')
	.then(data => {
  	const countries = feature(data, data.objects.countries);
  	console.log(countries);
  
  	g.selectAll('path')
      .data(countries.features)
      .enter().append('path')// we use path in css
        .attr('d', pathGenerator)
        .attr('class', 'country')
  		.append('title')
  			.text(d=>d.properties.name);
	});