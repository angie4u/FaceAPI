window.onload = function () {
    var subscriptionKey = sessionStorage.getItem('subscriptionKey')
    var endpoint = sessionStorage.getItem('endpoint')
    var personGroupId = sessionStorage.getItem('personGroupId')
    var personId = sessionStorage.getItem('personId')
    
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    var video = document.getElementById('video')
    var mediaConfig = { video: true }
    var errBack = function (e) {
        console.log('An error has occurred!', e)
    }

    // Put video listeners into place
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(mediaConfig).then(function (stream) {
        video.src = window.URL.createObjectURL(stream)
        video.play()
        })
    }

    /* Legacy code below! */
    else if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia(mediaConfig, function (stream) {
        video.src = stream
        video.play()
        }, errBack)
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(mediaConfig, function (stream) {
        video.src = window.webkitURL.createObjectURL(stream)
        video.play()
        }, errBack)
    } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
        navigator.mozGetUserMedia(mediaConfig, function (stream) {
        video.src = window.URL.createObjectURL(stream)
        video.play()
        }, errBack)
    }

    function dataURLtoBlob (dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
        while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
        }
        return new Blob([u8arr], {type: mime})
    }

    document.getElementById('snap').addEventListener('click', function () {
        context.drawImage(video, 0, 0, 640, 480)
    })

    document.getElementById('send').addEventListener('click', function () {
            
        var params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false'
        }
        var uri = endpoint +'/detect?' + $.param(params)

        var imgURL = canvas.toDataURL()
        var imageBinary = dataURLtoBlob(imgURL)
        var body = imageBinary

        var settings = {            
            "url": uri,
            "method": "POST",
            "headers": {
              "content-type": "application/octet-stream",
              "ocp-apim-subscription-key": subscriptionKey
            },
            "processData": false,
            "data": body
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response)
            var jsonToString = JSON.stringify(response, null, '\t')
            document.getElementById('takePhotoResult').value = jsonToString

            sessionStorage.setItem('faceId', response[0].faceId)
          });
            
    })    
    
}
  