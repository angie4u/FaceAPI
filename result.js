
window.onload = function () {   
  // var subscriptionKey = 'd53674714284400c885dd25bfd9f1617'
  // var endpoint = 'https://westus.api.cognitive.microsoft.com/face/v1.0'
  // var _personGroupId = 'group1'
  // var _personId = '1cbc6f6e-57d0-467d-ba8e-9939e015b695'   
  // var _faceId = '5ae1b6bc-7f75-48fb-a382-fadf4a387468'

  var subscriptionKey = sessionStorage.getItem('subscriptionKey')
  var endpoint = sessionStorage.getItem('endpoint')
  var _personGroupId = sessionStorage.getItem('personGroupId')
  var _personId = sessionStorage.getItem('personId')
  var _faceId = sessionStorage.getItem('faceId')

  var jsonObject = {faceId: _faceId, personId: _personId, personGroupId: _personGroupId}
  var body = JSON.stringify(jsonObject, null, '\t')
  
  document.getElementById('verifySubmit').addEventListener('click', function () {
    //var uploadImage = document.getElementById('uploadImage').files[0]
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
  