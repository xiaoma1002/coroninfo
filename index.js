import { select, json, geoPath, geoNaturalEarth1  } from 'd3';
import { feature } from 'topojson';
const svg = select('svg');

const projection = geoNaturalEarth1();
const pathGenerator = geoPath().projection(projection);


svg.append('path')
	.attr('d', pathGenerator({type: "Sphere"}))
	.attr('class','Sphere');


json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
	.then(data => {
  	const countries = feature(data, data.objects.countries);
  	console.log(countries);
  
  	svg.selectAll('path')
      .data(countries.features)
      .enter().append('path')// we use path in css
      .attr('d', pathGenerator);
	});