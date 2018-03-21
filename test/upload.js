window.onload = function () {
  var subscriptionKey = sessionStorage.getItem('subscriptionKey')
  var endpoint = sessionStorage.getItem('endpoint')
  var personGroupId = sessionStorage.getItem('personGroupId')
  var personId = sessionStorage.getItem('personId')

  document.getElementById('photoSubmit').addEventListener('click', function () {
    var uploadImage = document.getElementById('uploadImage').files[0]

    // 알맞은 코드를 채워 넣으세요 //

    $.ajax(settings).done(function (response) {
      console.log(response)
      var jsonToString = JSON.stringify(response, null, '\t')
      document.getElementById('photoResult').value = jsonToString
    })
  })
}
