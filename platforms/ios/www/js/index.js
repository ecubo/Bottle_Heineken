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

        var inicicializado, initY, finalY, currentY, options, watchID;

        $('button').on('click', function() {
            inicicializado = false;

            options = { frequency: 200 };  // Update every 3 seconds
            watchID = navigator.accelerometer.watchAcceleration(onSuccess2, onError2, options);
        });

        function onSuccess(acceleration) {
            if (!inicicializado) {
                $('#init').text('Acceleration Y: ' + acceleration.y);
                initY = acceleration.y;
                inicicializado = true;
            }
            else {
                $('#final').text('Acceleration Y: ' + acceleration.y);
                finalY = acceleration.y;
                inicicializado = false;

                if (initY < -2 && finalY > 5) {
                    $('body').css('background-color','#0f0');
                }
                else {
                    $('body').css('background-color','#f00');
                }

                options = { frequency: 200 };  // Update every 3 seconds
                watchID = navigator.accelerometer.watchAcceleration(onSuccess2, onError2, options);
            }
        };

        function onError() {
            alert('onError!');
        };

        function onSuccess2(acceleration) {
            $('#y').text(acceleration.y);
            currentY = acceleration.y;
            if (currentY < -2) {
                $('body').css('background-color','#fff');
                navigator.accelerometer.clearWatch(watchID);
                navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
                setTimeout(function(){ 
                    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
                }, 700);
            }
        };

        function onError2() {
            alert('onError!');
        };










    }
};

app.initialize();