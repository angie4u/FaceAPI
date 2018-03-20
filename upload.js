window.onload = function () {
  var subscriptionKey = sessionStorage.getItem('subscriptionKey')
  var endpoint = sessionStorage.getItem('endpoint')
  var personGroupId = sessionStorage.getItem('personGroupId')
  var personId = sessionStorage.getItem('personId')

  document.getElementById('photoSubmit').addEventListener('click', function () {
    var uploadImage = document.getElementById('uploadImage').files[0]
    var uri = endpoint + '/persongroups/' + personGroupId + '/persons/' + personId + '/persistedFaces'

    var settings = {
      'url': uri,
      'method': 'POST',
      'headers': {
        'content-type': 'application/octet-stream',
        'ocp-apim-subscription-key': subscriptionKey
      },
      'processData': false,
      'data': uploadImage
    }

    $.ajax(settings).done(function (response) {
      console.log(response)
      var jsonToString = JSON.stringify(response, null, '\t')
      document.getElementById('photoResult').value = jsonToString
    })
  })
}
