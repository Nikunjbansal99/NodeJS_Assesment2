const currenciesfn = (content,callback)=>{
    var currencies = content.match(/[0-9\s,.]+[$₹£]/g);
	//console.log(currencies);
    return callback(currencies)
}

const ticketclassfn = (content,callback)=>{
	var ticket_class = content.match(/Third|First|Second/gim);
	//console.log(ticket_class);
    return callback(ticket_class)
}

const ticketstatusfn = (content,callback)=>{
	var ticket_status = content.match(/CNF|WL|RAC/gim);
	//console.log(ticket_status);
    return callback(ticket_status)
}

const journeydatefn = (content,callback)=>{
	var lines = content.split("\n");
	//var l = lines.length - 1;
	journeydatesarr = []
	lines.forEach((line) => {
		var journey_date = line.match("[0-9]{2}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{4}");
		//if (journey_date!==null){
			//console.log(journey_date[0]);
		//}
		if (journey_date===null){
			var journey_date = line.match("[0-9]{2}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}");
			//console.log(journey_date[0]);
		}
		if (journey_date!==null){
			journeydatesarr.push(journey_date[0]);
		}
	});
    return callback(journeydatesarr)
}

const platformfn = (content,callback)=>{
	var platform = content.match(/1st|2nd|3rd|4th|5th|6th|7th|8th|9th/gim) ;
	//console.log(platform);
    return callback(platform)
}


function main(content,callback){
    const currencies = currenciesfn(content,(arr)=>{return arr});
    const ticketclass = ticketclassfn(content,(arr)=>{return arr});
    const ticketstatus = ticketstatusfn(content,(arr)=>{return arr});
    const journeydate = journeydatefn(content,(arr)=>{return arr});
    const platform = platformfn(content,(arr)=>{return arr});

    var results = {
        currencies     : currencies,
        ticketclass    : ticketclass,
        ticketstatus   : ticketstatus,
        journeydate    : journeydate,
        platform       : platform
    }
    if (callback && typeof(callback) === "function") {
        console.log("Performing Regex Operations for Extracting Data from Sentences:");
        callback(results); 
    }
}


module.exports={
    main       : main
}