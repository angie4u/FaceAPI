window.onload = function () {    
  var subscriptionKey = sessionStorage.getItem('subscriptionKey')
  var endpoint = sessionStorage.getItem('endpoint')
  var _personGroupId = sessionStorage.getItem('personGroupId')
  var _personId = sessionStorage.getItem('personId')
  var _faceId = sessionStorage.getItem('faceId')

  var jsonObject = {faceId: _faceId, personId: _personId, personGroupId: _personGroupId}
  var body = JSON.stringify(jsonObject, null, '\t')
  
  document.getElementById('verifySubmit').addEventListener('click', function () {
    var uri = endpoint + '/verify' 
    var settings = {
      'url': uri,
      'method': 'POST',
      'headers': {
        'content-type': 'application/json',
        'ocp-apim-subscription-key': subscriptionKey
      },
      'processData': false,
      'data': body
    }

    $.ajax(settings).done(function (response) {
      console.log(response)
      var jsonToString = JSON.stringify(response, null, '\t')
      document.getElementById('verificationResult').value = jsonToString
    })
  })  
}
  