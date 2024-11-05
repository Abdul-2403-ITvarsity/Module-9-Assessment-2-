

            var timer = setInterval(displayWorldTime, 1000);
            var cities = [
                {name: "Istanbul", utcOffset: 3, flag: "Turkey.png"},
                {name: "New York City", utcOffset: -5, flag: "United-States-of-America.png"},
                {name: "Tokyo", utcOffset: 9, flag: "Japan.png"},
                {name: "Moscow", utcOffset: 3, flag: "Russia.png"},
                {name: "Rio De Janeiro", utcOffset: -3, flag: "Brazil.png"},
                {name: "Sydney", utcOffset: 11, flag: "Australia.png"},
                {name: "Vancouver", utcOffset: -8, flag: "Canada.png"},
                {name: "Beijing", utcOffset: 8, flag: "China.png"}
            ];

            cities.sort(compare);

            function compare(a, b){
                var cityA = a.name;
                var cityB = b.name;

                var comparison = 0;
                if(cityA > cityB){
                    comparison = 1;
                } else if(cityA < cityB){
                    comparison = -1;
                }
                return comparison;
            }



            function getUtcTime(){
                var dt = new Date();
                var utcOffset = dt.getTimezoneOffset() * 60000;
                var utcTime = new Date(dt.getTime() + utcOffset);
                return utcTime.getTime();
            }

            function getCurrentTime(utcOffset){
                var mil = 1000 * 60 * 60;
                var time = new Date(getUtcTime() + utcOffset * mil);
                return time.toLocaleTimeString();
            }

            function displayWorldTime(){
                var dt = new Date();
                document.getElementById("local").innerHTML = "Local Time : " + dt.toLocaleTimeString();

                var output = `<table id="cities">`;
                output += `
                 <tr>
                    <th class="col1"></th>
                    <th class="col2"></th>
                    <th></th>
                 </tr>
                  `;  
                
                  for (a = 0; a < cities.length; a++) {
                    output += `
                    <tr>
                        <td><img src="images/${cities[a].flag}" alt="${cities[a].name}"/></td>
                        <td>${cities[a].name}</td>
                        <td>${getCurrentTime(cities[a].utcOffset)}</td>
                    </tr>    
    `;
   
        
        
        
    
    
}
                output += `</table>`;
                document.getElementById("output").innerHTML = output;
            }
            
        