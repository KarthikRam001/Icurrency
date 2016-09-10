$('document').ready(function(){
    getData();
});

//Getting data from API
function getData() {
        // set endpoint and access key
        endpoint = 'live'
        access_key = '7f526d5d29bfea665cbf796dbf2f48bb';

    // get the most recent exchange rates via the "live" endpoint:
    $.ajax({
        url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {
            //check if success id true of false
            if(json['success'] === false){
                //show error
                var trHTML = '<div class="text-vertical-center-container"><div  class="text-vertical-center"><h3>Sorry! Something Wrong Happened</h3><br>';
                trHTML+= '<button type="button" onclick="window.location.reload();"><div class="reloadButton"></div></button></div></div>';
            } else {
                //Set head of the table
                var trHTML = '<tr><th>Currency</th><th>Value</th></tr>';
                //for each item in json['qoutes']...
                $.each(json['quotes'], function (key, item) {
                    //...add new table row
                    trHTML += '<tr><td>' + key.slice(3) + '</td><td>' + json['quotes'][key] + '</td></tr>';
                });
            }
            //set innerHTML of the table
            $('#currencyTable').append(trHTML);

        }
    });
}
