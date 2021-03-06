(function (d3, topojson) {
  'use strict';

  const svg = d3.select('svg');

  const projection = d3.geoNaturalEarth1();
  const pathGenerator = d3.geoPath().projection(projection);

  const g = svg.append('g');
  g.append('path')
  	.attr('d', pathGenerator({type: "Sphere"}))
  	.attr('class','Sphere');

  svg.call(d3.zoom().on('zoom',()=>{
  	g.attr('transform', d3.event.transform);
  }));
  // svg.call(zoom().on('zoom',() => {
  // 	console.log('zoom');
  // });

  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json')
  	.then(data => {
    	const countries = topojson.feature(data, data.objects.countries);
    	console.log(countries);
    
    	g.selectAll('path')
        .data(countries.features)
        .enter().append('path')// we use path in css
          .attr('d', pathGenerator)
          .attr('class', 'country')
    		.append('title')
    			.text(d=>d.properties.name);
  	});

}(d3, topojson));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbGVjdCwganNvbiwgZ2VvUGF0aCwgZ2VvTmF0dXJhbEVhcnRoMSwgem9vbSwgZXZlbnQgfSBmcm9tICdkMyc7XG5pbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAndG9wb2pzb24nO1xuY29uc3Qgc3ZnID0gc2VsZWN0KCdzdmcnKTtcblxuY29uc3QgcHJvamVjdGlvbiA9IGdlb05hdHVyYWxFYXJ0aDEoKTtcbmNvbnN0IHBhdGhHZW5lcmF0b3IgPSBnZW9QYXRoKCkucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKTtcbmcuYXBwZW5kKCdwYXRoJylcblx0LmF0dHIoJ2QnLCBwYXRoR2VuZXJhdG9yKHt0eXBlOiBcIlNwaGVyZVwifSkpXG5cdC5hdHRyKCdjbGFzcycsJ1NwaGVyZScpO1xuXG5zdmcuY2FsbCh6b29tKCkub24oJ3pvb20nLCgpPT57XG5cdGcuYXR0cigndHJhbnNmb3JtJywgZXZlbnQudHJhbnNmb3JtKVxufSkpO1xuLy8gc3ZnLmNhbGwoem9vbSgpLm9uKCd6b29tJywoKSA9PiB7XG4vLyBcdGNvbnNvbGUubG9nKCd6b29tJyk7XG4vLyB9KTtcblxuanNvbignaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93b3JsZC1hdGxhc0AyL2NvdW50cmllcy01MG0uanNvbicpXG5cdC50aGVuKGRhdGEgPT4ge1xuICBcdGNvbnN0IGNvdW50cmllcyA9IGZlYXR1cmUoZGF0YSwgZGF0YS5vYmplY3RzLmNvdW50cmllcyk7XG4gIFx0Y29uc29sZS5sb2coY291bnRyaWVzKTtcbiAgXG4gIFx0Zy5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdwYXRoJykvLyB3ZSB1c2UgcGF0aCBpbiBjc3NcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoR2VuZXJhdG9yKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY291bnRyeScpXG4gIFx0XHQuYXBwZW5kKCd0aXRsZScpXG4gIFx0XHRcdC50ZXh0KGQ9PmQucHJvcGVydGllcy5uYW1lKTtcblx0fSk7Il0sIm5hbWVzIjpbInNlbGVjdCIsImdlb05hdHVyYWxFYXJ0aDEiLCJnZW9QYXRoIiwiem9vbSIsImV2ZW50IiwianNvbiIsImZlYXR1cmUiXSwibWFwcGluZ3MiOiI7OztFQUVBLE1BQU0sR0FBRyxHQUFHQSxTQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7O0VBRTFCLE1BQU0sVUFBVSxHQUFHQyxtQkFBZ0IsRUFBRSxDQUFDO0VBQ3RDLE1BQU0sYUFBYSxHQUFHQyxVQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7O0VBRXZELE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDZCxJQUFJLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0VBRXpCLEdBQUcsQ0FBQyxJQUFJLENBQUNDLE9BQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSTtHQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRUMsUUFBSyxDQUFDLFNBQVMsRUFBQztHQUNwQyxDQUFDLENBQUMsQ0FBQzs7Ozs7QUFLSkMsU0FBSSxDQUFDLCtEQUErRCxDQUFDO0lBQ25FLElBQUksQ0FBQyxJQUFJLElBQUk7S0FDWixNQUFNLFNBQVMsR0FBR0MsZ0JBQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztLQUV2QixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQ3hCLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7V0FDcEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUM7V0FDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7T0FDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNkLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OyJ9