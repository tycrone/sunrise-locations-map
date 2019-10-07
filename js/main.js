 const app = {};


 app.initMap = function() {

 	let map;

	    navigator.geolocation.getCurrentPosition(function(position) {
	    const lati = (position.coords.latitude)
	    const long = (position.coords.longitude)
	    let myLatLng = {lat: lati, lng: long};
	    let sunriseLocations = [
	    	//{name: "Head Office", srLat: 43.186966, srLng: -80.028948}, 
	      	
	      	{locnum: "locnum0", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Fairview Mall</h2> <p class='infobox-p-1'>1800 Sheppard Ave E<br/>Toronto, ON. M2J 5A7</p><p class='infobox-p-2'>416-494-9563</p>", srLat: 43.778119, srLng: -79.343087},
	    	{locnum: "locnum1", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Cambridge Centre</h2> <p class='infobox-p-1'>355 Hespeler Rd<br/>Cambridge, ON. N1R 6B3</p><p class='infobox-p-2'>519-622-4768</p>",srLat: 43.392260, srLng: -80.320916},   
	    	{locnum: "locnum2", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Bayshore Shopping Centre</h2> <p class='infobox-p-1'>100 Bayshore Dr<br/>Ottawa, ON. K2B 8C1</p><p class='infobox-p-2'>613-726-3345</p>",srLat: 45.347316, srLng: -75.806220},   
	    	{locnum: "locnum3", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Bayfield Mall</h2> <p class='infobox-p-1'>320 Bayfield St<br/>Barrie, ON. L4M 3C1</p><p class='infobox-p-2'>705-730-5680</p>",srLat: 44.401224, srLng: -79.703443},   
	    	{locnum: "locnum4", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Quinte Mall</h2> <p class='infobox-p-1'>390 N Front S<br/>Belleville, ON. K8P 3E1</p><p class='infobox-p-2'>613-969-1396</p>", srLat: 44.188816, srLng: -77.401814}, 
	    	{locnum: "locnum5", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Bramalea City Centre</h2> <p class='infobox-p-1'>25 Peel Centre Dr<br/>Brampton, ON. L6T 3R5</p><p class='infobox-p-2'>905-793-0488</p>", srLat: 43.716415, srLng: -79.722247},
	    	{locnum: "locnum6", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Lynden Park Mall</h2> <p class='infobox-p-1'>84 Lynden Road<br/>Brantford, ON. N3R 6B8</p><p class='infobox-p-2'>519-756-8722</p>", srLat: 43.170574, srLng: -80.240414},  
	    	{locnum: "locnum7", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Cloverdale Mall </h2> <p class='infobox-p-1'>250 East Malls Hwy<br/>Etobicoke, ON. M9B 3Y8</p><p class='infobox-p-2'>416-236-9891</p>", srLat: 43.392283, srLng: -80.320897},	
	    	{locnum: "locnum8", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Sherway Gardens</h2> <p class='infobox-p-1'>25 Sherway Gardens Rd<br/>Etobicoke, ON. M9C 1B8</p><p class='infobox-p-2'>416-621-9681</p>", srLat: 43.611260, srLng: -79.558391},
	    	{locnum: "locnum9", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Stone Road Mall</h2> <p class='infobox-p-1'>435 Stone Road W<br/>Guelph, ON. N1G 2X6</p><p class='infobox-p-2'>519-780-2667</p>", srLat: 43.518804, srLng: -80.237270}, 
	    	{locnum: "locnum10", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Fairview Park</h2> <p class='infobox-p-1'>2960 Kingsway Dr<br/>Kitchener, ON. N2C 1X1</p><p class='infobox-p-2'>519-748-2230</p>", srLat: 43.424666, srLng: -80.438568}, 
	    	{locnum: "locnum11", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Masonville Place</h2> <p class='infobox-p-1'>1680 Richmond St<br/>London, ON. N6G 3Y9</p><p class='infobox-p-2'>519-673-4646</p>", srLat: 43.025568, srLng: -81.278013},
	    	{locnum: "locnum12", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>White Oaks Mall</h2> <p class='infobox-p-1'>1105 Wellington Rd<br/>London, ON. N6E 1V4</p><p class='infobox-p-2'>519-649-4493</p>", srLat: 42.931439, srLng: -81.223870},  	     
	      	{locnum: "locnum13", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Limeridge Mall </h2> <p class='infobox-p-1'>999 Upper Wentworth St<br/>Hamilton, ON. L9A 4X5</p><p class='infobox-p-2'>905-385-2325</p>", srLat: 43.217131, srLng: -79.860970},
	      	{locnum: "locnum14", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Upper Canada Mall</h2> <p class='infobox-p-1'>17600 Younge St<br/>Newmarket, ON. L3Y 4Z1</p><p class='infobox-p-2'>905-953-9881</p>", srLat: 44.056457, srLng: -79.484780},
	      	{locnum: "locnum15", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Northgate Shopping Centre</h2> <p class='infobox-p-1'>1500 Fisher St<br/>North Bay, ON. P1B 2H3</p><p class='infobox-p-2'>705-495-4017</p>", srLat: 46.313708, srLng: -79.440001},
	      	{locnum: "locnum16", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Place D’Orléans</h2> <p class='infobox-p-1'>110 Place D’Orleans Dr<br/>Orleans, ON. K1C 2L9</p><p class='infobox-p-2'>613-824-9347</p>", srLat: 45.478703, srLng: -75.515742},
	      	{locnum: "locnum17", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Carlingwood Mall</h2> <p class='infobox-p-1'>2121 Carling Ave<br/>Ottawa, ON. K2A 1H2</p><p class='infobox-p-2'>613-792-3865</p>", srLat: 45.372739, srLng: -75.769275},
	      	{locnum: "locnum18", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>St. Laurent Shopping Centre</h2> <p class='infobox-p-1'>1200 St Laurent Blvd<br/>Ottawa, ON. K1K 3B8</p><p class='infobox-p-2'>613-746-4771</p>", srLat: 45.422016, srLng: -75.639098},
	      	{locnum: "locnum19", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Heritage Place</h2> <p class='infobox-p-1'>1350 16th St E<br/>Owen Sound, ON. N4K 6N7</p><p class='infobox-p-2'>519-376-0217</p>", srLat: 44.576446, srLng: -80.920304},
	      	{locnum: "locnum20", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Lansdowne Mall</h2> <p class='infobox-p-1'>645 Lansdowne St<br/>Peterborough, ON. K9J 7Y5</p><p class='infobox-p-2'>705-750-1632</p>", srLat: 44.282142, srLng: -78.331775},
	      	{locnum: "locnum21", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Pickering Town Centre</h2> <p class='infobox-p-1'>1355 Kingston Rd<br/>Pickering, ON. L1V 1B8</p><p class='infobox-p-2'>905-420-7069</p>", srLat: 43.835202, srLng: -79.085223},
	      	{locnum: "locnum22", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Station Mall</h2> <p class='infobox-p-1'>293 Bay St<br/>Sault Ste. Marie, ON. P6A 1X3</p><p class='infobox-p-2'>705-256-6111</p>", srLat: 46.511583, srLng: -84.338187},
	      	{locnum: "locnum23", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Scarborough Town Centre</h2> <p class='infobox-p-1'>300 Borough Dr<br/>Scarborough, ON. M1P 4P5</p><p class='infobox-p-2'>416-290-5841</p>", srLat: 43.775732, srLng: -79.257449},
	      	{locnum: "locnum24", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>The Pen Centre</h2> <p class='infobox-p-1'>221 Glendale Ave<br/>St.Catharines, ON. L2T 2K9</p><p class='infobox-p-2'>905-682-7729</p>", srLat: 43.136089, srLng: -79.224097},
	      	{locnum: "locnum25", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>New Sudbury Centre </h2> <p class='infobox-p-1'>1349 Lasalle Blvd<br/>Sudbury, ON. P3A 1Z2</p><p class='infobox-p-2'>705-525-0262</p>", srLat: 46.520509, srLng: -80.947138},
	      	{locnum: "locnum84", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Dufferin Mall</h2> <p class='infobox-p-1'>900 Dufferin<br/>Toronto, ON M6H 4A9</p><p class='infobox-p-2'>647-954-1477</p>", srLat: 43.656218, srLng: -79.435541}
  	      	{locnum: "locnum26", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Intercity Shopping Centre</h2> <p class='infobox-p-1'>1000 Fort William Rd<br/>Thunder Bay, ON. P7B 6B9</p><p class='infobox-p-2'>807-345-2112</p>", srLat: 48.405085, srLng: -89.243437},
	      	{locnum: "locnum27", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Rideau Centre</h2> <p class='infobox-p-1'>50 Rideau St<br/>Ottawa, ON. K1N 9J7</p><p class='infobox-p-2'>613-234-2394</p>", srLat: 45.425503, srLng: -75.691819},
	      	{locnum: "locnum28", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Devonshire Mall</h2> <p class='infobox-p-1'>3100 Howard Ave<br/>Windsor, ON. N8X 3Y8</p><p class='infobox-p-2'>519-967-1806</p>", srLat: 42.274177, srLng: -83.000795},
	    	{locnum: "locnum85", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Conestoga Mall</h2> <p class='infobox-p-1'>550 King St. N.<br/>Waterloo, ON. N2L 5W6</p><p class='infobox-p-2'>519-208-5515</p>", srLat: 43.498082, srLng: -80.526963},
    	    {locnum: "locnum86", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Intercity Shopping Centre</h2> <p class='infobox-p-1'>5100 Erin Mills Pkwy<br/>Mississauga, ON. L5M 5P5</p><p class='infobox-p-2'>905-997-6755</p>", srLat: 43.558855, srLng: -79.711651},
    	

			{locnum: "locnum29", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Metropolis at Metrotown</h2> <p class='infobox-p-1'>4700 Kingsway<br/>Burnaby, BC V5H 4M1</p><p class='infobox-p-2'>604-438-6576</p>", srLat: 49.227476, srLng: -122.999826},
	      	{locnum: "locnum30", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Coquitlam Centre</h2> <p class='infobox-p-1'>2929 Barnet Hwy<br/>Coquitlam, BC V3B 5R5</p><p class='infobox-p-2'>604-472-0072</p>", srLat: 49.279315, srLng: -122.797615},
	      	{locnum: "locnum31", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Orchard Park Shopping Centre</h2> <p class='infobox-p-1'>2271 Harvey Ave<br/>Kelowna, BC V1Y 6H2</p><p class='infobox-p-2'>250-980-1215</p>", srLat: 49.880007, srLng: -119.440986},
	      	{locnum: "locnum32", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Willowbrook Shopping Centre</h2> <p class='infobox-p-1'>19705 Fraser Highway<br/>Langley, BC V3A 7E9</p><p class='infobox-p-2'>604-510-0477</p>", srLat: 49.114753, srLng: -122.675126},
	      	{locnum: "locnum33", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Woodgrove Centre</h2> <p class='infobox-p-1'>6631 Island Highway North<br/>Nanaimo, BC V9T 4T7</p><p class='infobox-p-2'>250-933-1022</p>", srLat: 49.235959, srLng: -124.050595},
	      	{locnum: "locnum34", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Pine Centre Mall</h2> <p class='infobox-p-1'>3055 Massey Dr<br/>Prince George, BC V2N 2S9</p><p class='infobox-p-2'>250-563-7253</p>", srLat: 53.897396, srLng: -122.777676},
	      	{locnum: "locnum35", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Guildford Town Centre</h2> <p class='infobox-p-1'>10355 152 St<br/>Surrey, BC V3R 7C1</p><p class='infobox-p-2'>604-584-0943</p>", srLat: 49.190246, srLng: -122.803394},
	      	{locnum: "locnum36", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Tsawwassen Mills</h2> <p class='infobox-p-1'>5000 Canoe Pass Way<br/>Tsawwassen, BC V4M 0B3</p><p class='infobox-p-2'>604-940-4595</p>", srLat: 49.038440, srLng: -123.083353},
	      	{locnum: "locnum37", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Mayfair Shopping Centre</h2> <p class='infobox-p-1'>3147 Douglas St<br/>Victoria, BC V8Z 6E3</p><p class='infobox-p-2'>250-386-0579</p>", srLat: 48.446946, srLng: -123.370118},

	      	{locnum: "locnum38", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Chinook Centre</h2> <p class='infobox-p-1'>6455 Macleod Trail SW<br/>Calgary, AB T2H 0K9</p><p class='infobox-p-2'>587-352-3992</p>", srLat: 50.998262, srLng: -114.073390},
	      	{locnum: "locnum39", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Market Mall</h2> <p class='infobox-p-1'>3625 Shaganappi Trail NW<br/>Calgary, AB T3A 0E2</p><p class='infobox-p-2'>403-288-3532</p>", srLat: 51.084535, srLng: -114.154974},
	      	{locnum: "locnum40", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Marlborough Mall</h2> <p class='infobox-p-1'>3800 Memorial Dr NE<br/>Calgary, AB T2A 2K2</p><p class='infobox-p-2'>403-387-0223</p>", srLat: 51.057736, srLng: -113.979560},
	      	{locnum: "locnum41", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Southcentre Mall</h2> <p class='infobox-p-1'>100 Anderson Rd SE<br/>Calgary, AB T2J 3V1</p><p class='infobox-p-2'>403-726-5073</p>", srLat: 50.952560, srLng: -114.066236},
	      	{locnum: "locnum42", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Sunridge Mall</h2> <p class='infobox-p-1'>2525 36 St NE<br/>Calgary, AB T1Y 5T4</p><p class='infobox-p-2'>587-623-9489</p>", srLat: 51.073782, srLng: -113.985766},
	      	{locnum: "locnum43", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Bonnie Doon Shopping Centre</h2> <p class='infobox-p-1'>160 82nd Avenue & 83rd St<br/>Edmonton, AB T6C 2B1</p><p class='infobox-p-2'>587-458-4602</p>", srLat: 53.520949, srLng: -113.457124},
	      	{locnum: "locnum44", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Londonderry Mall</h2> <p class='infobox-p-1'>137 Ave & 66th St<br/>Edmonton, AB T5C 3C8</p><p class='infobox-p-2'>780-670-4340</p>", srLat: 53.602273, srLng: -113.446167},
	      	{locnum: "locnum45", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>West Edmonton Mall</h2> <p class='infobox-p-1'>8882 170th St, Unit 1392<br/>Edmonton, AB T5T 4M2</p><p class='infobox-p-2'>780-444-4510</p>", srLat: 53.522843, srLng: -113.628463},
	      	{locnum: "locnum46", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Kingsway Mall</h2> <p class='infobox-p-1'>1 Kingsway Garden Mall NW<br/>Edmonton, AB T5G 3A6</p><p class='infobox-p-2'>780-670-9558</p>", srLat: 53.562224, srLng: -113.504775},
	      	{locnum: "locnum47", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Peter Pond Mall</h2> <p class='infobox-p-1'>9713 Hardin St<br/>Fort McMurray, AB T9H 1L2</p><p class='infobox-p-2'>780-743-8060</p>", srLat: 56.725138, srLng: -111.377792},
	      	{locnum: "locnum48", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Prairie Mall Shopping Centre</h2> <p class='infobox-p-1'>11801 100 St<br/>Grande Prairie, AB T8V 3Y2</p><p class='infobox-p-2'>780-830-0383</p>", srLat: 55.187949, srLng: -118.792048},
	      	{locnum: "locnum49", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Park Place Mall</h2> <p class='infobox-p-1'>501 First Ave S<br/>Lethbridge, AB T1J 4L9</p><p class='infobox-p-2'>403-388-4792</p>", srLat: 49.698857, srLng: -112.839871},
	      	{locnum: "locnum50", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Medicine Hat Mall</h2> <p class='infobox-p-1'>3292 Dunmore Rd SE<br/>Medicine Hat, AB T1B 2R4</p><p class='infobox-p-2'>403-525-6762</p>", srLat: 50.004021, srLng: -110.647235},
	      	{locnum: "locnum51", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Bower Place</h2> <p class='infobox-p-1'>4900 Molly Banister Dr<br/>Red Deer, AB T4R 1N9</p><p class='infobox-p-2'>587-457-0865</p>", srLat: 52.243069, srLng: -113.810084},
	      	{locnum: "locnum52", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Crossiron Mills</h2> <p class='infobox-p-1'>261055 Crossiron Blvd<br/>Rocky View 44, AB T4A 0G3</p><p class='infobox-p-2'>587-535-4878</p>", srLat: 52.243069, srLng: -113.810084},

	      	{locnum: "locnum53", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Cornwall Centre</h2> <p class='infobox-p-1'>2102 11th Ave<br/>Regina, SK S4P 3Y6</p><p class='infobox-p-2'>306-545-3300</p>", srLat: 50.451511, srLng: -104.610525},
	      	{locnum: "locnum54", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Southland Mall</h2> <p class='infobox-p-1'>2965 Gordon Rd<br/>Regina, SK S4S 6H7</p><p class='infobox-p-2'>306-525-2228</p>", srLat: 50.402852, srLng: -104.622646},
	      	{locnum: "locnum55", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Lawson Heights Mall</h2> <p class='infobox-p-1'>134 Primrose Dr<br/>Saskatoon, SK S7K 5S6</p><p class='infobox-p-2'>306-955-9984</p>", srLat: 52.169155, srLng: -106.639779},
	      	{locnum: "locnum56", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Midtown Plaza</h2> <p class='infobox-p-1'>201 First Ave S<br/>Saskatoon, SK S7K 1J9</p><p class='infobox-p-2'>306-955-9904</p>", srLat: 52.127699, srLng: -106.667586},

	      	{locnum: "locnum57", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Kildonan Place</h2> <p class='infobox-p-1'>1555 Regent Ave W<br/>Winnipeg, MB R2C 3B3</p><p class='infobox-p-2'>204-421-6220</p>", srLat: 49.898415, srLng: -97.060318},
	      	{locnum: "locnum58", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Polo Park</h2> <p class='infobox-p-1'>1485 Portage Ave<br/>Winnipeg, MB R3G 0W4</p><p class='infobox-p-2'>204-272-2939</p>", srLat: 49.884023, srLng: -97.198518},
	      	{locnum: "locnum59", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>St. Vital Centre</h2> <p class='infobox-p-1'>86-1225 St Mary’s Rd<br/>Winnipeg, MB R2M 5E5</p><p class='infobox-p-2'>204-505-1123</p>", srLat: 49.829313, srLng: -97.114025},

	      	{locnum: "locnum60", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Place du Royaume</h2> <p class='infobox-p-1'>1401 Boulevard Talbot<br/>Chicoutimi, QC G7H 5N6</p><p class='infobox-p-2'>418-545-4612</p>", srLat: 48.404395, srLng: -71.055297},
	      	{locnum: "locnum61", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Les Promenades Drummondville</h2> <p class='infobox-p-1'>755 Boulevard Rene-Levesque<br/>Drummondville, QC J2C 6Y7</p><p class='infobox-p-2'>819-474-6600</p>", srLat: 45.899402, srLng: -72.517717},
	      	{locnum: "locnum62", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Les Promenades Gatineau</h2> <p class='infobox-p-1'>1100 Boulevard Maloney Quest<br/>Gatineau, QC J8T 6G3</p><p class='infobox-p-2'>819-568-2902</p>", srLat: 45.475646, srLng: -75.697300},
	      	{locnum: "locnum63", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Les Galeries de Hull</h2> <p class='infobox-p-1'>320 Boulevard Saint-Joseph<br/>Gatineau, QC J8Y 3Y8</p><p class='infobox-p-2'>819-778-3290</p>", srLat: 45.441493, srLng: -75.731972},
	      	{locnum: "locnum64", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Carrefour Angrignon</h2> <p class='infobox-p-1'>7077 Newman Blvd<br/>Lasalle, QC H8N 1X1</p><p class='infobox-p-2'>514-366-8395</p>", srLat: 45.447717, srLng: -73.615061},
	      	{locnum: "locnum65", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Carrefour Laval</h2> <p class='infobox-p-1'>3035 Boulevard le Carrefour<br/>Laval, QC H7T 1C8</p><p class='infobox-p-2'>450-687-5647</p>", srLat: 45.569530, srLng: -73.752632},
	      	{locnum: "locnum66", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Les Galeries Chagnon</h2> <p class='infobox-p-1'>1200 Boulevard Alphonse-Desjardins<br/>Levis, QC G6V 6Y8</p><p class='infobox-p-2'>418-837-2718</p>", srLat: 46.796429, srLng: -71.170426},
	      	{locnum: "locnum67", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Place Versailles</h2> <p class='infobox-p-1'>7275 Sherbrooke St E<br/>Montréal, QC H1N 1E9</p><p class='infobox-p-2'>514-354-7442</p>", srLat: 45.591502, srLng: -73.541912},
	      	{locnum: "locnum68", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Fairview Pointe Claire</h2> <p class='infobox-p-1'>6815 Trans Canadian Hwy<br/>Pointe-Claire, QC H9R 5J1</p><p class='infobox-p-2'>514-695-5861</p>", srLat: 45.464331, srLng: -73.830925},
	      	{locnum: "locnum69", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Fleur de Lys Centre Commercial</h2> <p class='infobox-p-1'>550 Wilfrid-Hamel Blvd<br/>Quebec City, QC G1M 2S6</p><p class='infobox-p-2'>418-523-4426</p>", srLat: 46.822841, srLng: -71.251777},
	      	{locnum: "locnum70", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Laurier Québec</h2> <p class='infobox-p-1'>2700 Boulevard Laurier<br/>Quebec City, QC G1V 2L8</p><p class='infobox-p-2'>418-657-2804</p>", srLat: 46.770340, srLng: -71.286074},
	      	{locnum: "locnum71", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Galeries Rive Nord</h2> <p class='infobox-p-1'>100 Boulevard Brien<br/>Repentigny, QC J6A 5N4</p><p class='infobox-p-2'>450-585-9664</p>", srLat: 45.742586, srLng: -73.458595},
	      	{locnum: "locnum72", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Place Rosemère</h2> <p class='infobox-p-1'>401 Boul Labelle<br/>Rosemère, QC J7A 3T2</p><p class='infobox-p-2'>450-437-5201</p>", srLat: 45.630144, srLng: -73.820069},
	      	{locnum: "locnum73", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Carrefour du Nord</h2> <p class='infobox-p-1'>900 Boulevard Grignon<br/>Saint-Jerome, QC J7Y 3S7</p><p class='infobox-p-2'>450-436-1048</p>", srLat: 45.794028, srLng: -74.017869},
	      	{locnum: "locnum74", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Carrefour de L’Estrie</h2> <p class='infobox-p-1'>3050 De Portland Boul<br/>Sherbrooke, QC J1L 1K1</p><p class='infobox-p-2'> 819-933-7900</p>", srLat: 45.401473, srLng: -71.954283},
	      	{locnum: "locnum75", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Promenades St-Bruno</h2> <p class='infobox-p-1'>135 Boulevard des Promenades<br/>St-Bruno-de-Montarville, QC J3V 5K3</p><p class='infobox-p-2'> 450-653-5681</p>", srLat: 45.504894, srLng: -73.377948},
	      	{locnum: "locnum76", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Centre Commercial Les Rivières</h2> <p class='infobox-p-1'>4125 Boulevard des Forges<br/>Trois-Rivieres, QC G8Y 1W1</p><p class='infobox-p-2'>819-693-6855</p>", srLat: 46.355773, srLng: -72.588921},
	      	{locnum: "locnum77", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>La Grande Place des Bois-Francs</h2> <p class='infobox-p-1'>1111 Boulevard Jutras E<br/>Victoriaville, QC G6S 1C1</p><p class='infobox-p-2'>819-357-2000</p>", srLat: 46.355773, srLng: -72.588921},
	      	{locnum: "locnum78", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Galeries De La Capitale</h2> <p class='infobox-p-1'>5401 Boulevard des Galeries<br/>Ville de Quebec, QC G2K 1N4</p><p class='infobox-p-2'>418-624-8873</p>", srLat: 46.830342, srLng: -71.298228},

	      	{locnum: "locnum79", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Mic Mac Mall</h2> <p class='infobox-p-1'>21 Micmac Blvd<br/>Dartmouth, NS B3A 4K7</p><p class='infobox-p-2'>902-463-3410</p>", srLat: 44.686352, srLng: -63.559446},
	      	{locnum: "locnum80", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>CF Champlain</h2> <p class='infobox-p-1'>477 Paul St<br/>Dieppe, NB E1A 4X5</p><p class='infobox-p-2'>506-852-3292</p>", srLat: 46.096119, srLng: -64.761088},
	      	{locnum: "locnum81", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Regent Mall</h2> <p class='infobox-p-1'>1381 Regent St<br/>Fredericton, NB E3C 1A2</p><p class='infobox-p-2'>506-447-9677</p>", srLat: 46.096119, srLng: -64.761088},
	      	{locnum: "locnum82", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>McAllister Place</h2> <p class='infobox-p-1'>	519 Westmorland Rd<br/>Saint John, NB E2J 3W9</p><p class='infobox-p-2'>506-632-0480</p>", srLat: 45.307218, srLng: -66.016327},
	      	{locnum: "locnum83", name: "<h2 class='infobox-h2-1'>Sunrise Records</h2><h2 class='infobox-h2-2'>Avalon Mall</h2> <p class='infobox-p-1'>48 Kenmount Rd<br/>St. John’s, NL A1B 1W3</p><p class='infobox-p-2'>709-552-1902</p>", srLat: 47.561327, srLng: -52.754267}];	    

	    let locationsQuantity = sunriseLocations.length;

		map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          //mapTypeId: 'satellite',
          zoom: 12,
          styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#c4c4c4"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#707070"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#be2026"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ff000a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#575757"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#999999"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "-52"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]

	        });


		let markerNew = new google.maps.Marker({
          position: myLatLng,
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          title: 'Hello World!'
        });

        const infoWindow = new google.maps.InfoWindow();
        google.maps.event.addListener(markerNew, 'click', () => {
        infoWindow.setContent('You are here');
        infoWindow.open(app.map, markerNew);
       })


        let trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);

        let sunriseWindow;

        //function to find matching key value pair in locations array
		function findObjectByKey(array, key, value) {
		    for (var i = 0; i < array.length; i++) {
		        if (array[i][key] === value) {
		            return array[i];
		        }
		    }
		    return null;
		}

		console.log(locationsQuantity);

        for (i = 0; i < locationsQuantity; i++) {
		
			let locSelected = "locnum" + i;
      		let locClicked = "#locnum" + i; 

			let locTargeted = findObjectByKey(sunriseLocations, 'locnum', locSelected);

			if (locTargeted != null){ 
				let locTargetedLat = locTargeted.srLat;
				let locTargetedLong = locTargeted.srLng;
				

				let sunriseIcon = './img/sr-icon-2.png';

				let sunriseMarker = new google.maps.Marker({
		        position: {lat: locTargetedLat, lng: locTargetedLong},
	       	    icon: sunriseIcon, 
	    	    map: map,
	        	draggable: false,
	          	animation: google.maps.Animation.DROP,
	       		});

		        let storeName = locTargeted.name;

	        	sunriseWindow = new google.maps.InfoWindow();
	        	google.maps.event.addListener(sunriseMarker, 'click', () => {
	        	sunriseWindow.setContent(storeName);
	        	sunriseWindow.open(app.map, sunriseMarker);

	        	return sunriseWindow;
	      		})


				$( locClicked ).click(function() {
					let newLatLng = {lat: locTargetedLat, lng: locTargetedLong};

					let newCenter = new google.maps.LatLng(newLatLng);
	   				map.panTo(newCenter);
	   				sunriseWindow.setContent(storeName);
	  		      	sunriseWindow.open(app.map, sunriseMarker);
	  		      	document.body.scrollTop = 0; // For Safari
	  				document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
				});
			};
		};

      });
    } 

  app.init =() => {
    app.initMap();
  };

   app.init();
