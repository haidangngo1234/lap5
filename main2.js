const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d9c862f0dmsh6d8cb44ff4dd32fp13edfdjsn482ac6824bcc',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
async function getData () {
try {
	const response = await fetch(url, options);
	const result = await response.text();

    var data  = JSON.parse(result);
    var nhietDo = data.current.temp_c;
    document.getElementById("hehe").innerHTML= nhietDo 
    // console.log(nhietDo); 
    var gio = data.current.temp_c;
	document.getElementById("haha").innerHTML= gio
    // console.log(typeof(data));
	// console.log(result);
} catch (error) {
	console.error(error);
}
}
getData (); 