var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        //document.addEventListener('deviceready', this.onDeviceReady, false);
        this.onDeviceReady();
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {

        FastClick.attach(document.body);

        $('button').on('click', function() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

            var options = { frequency: 200 };  // Update every 3 seconds
            var watchID = navigator.accelerometer.watchAcceleration(onSuccess2, onError2, options);
        });




function onSuccess(acceleration) {
    $('#init').text('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');

};

function onError() {
    alert('onError!');
};

function onSuccess2(acceleration) {
    $('#x').text(acceleration.x);
    $('#y').text(acceleration.x);
    $('#z').text(acceleration.x);
};

function onError2() {
    alert('onError!');
};










    }
};

app.initialize();