window.onload = function () {
  // 입력한 API Endpoint 및 SubscriptionKey 값 가져오는 부분
  var subscriptionKey = document.getElementById('inputSubscriptionKey')
  var endpoint = document.getElementById('inputEndpoint')

  // PersonGroup Id 값 가져오는 부분
  var personGroupName = document.getElementById('inputPersonGroup')

  // PersonGroup Body 기본 입력 값 지정
  var personGroupJson = {name: 'personGroup', userData: 'user-provided data attached to the person group'}
  var personGroupDesc = JSON.stringify(personGroupJson, null, '\t')
  document.getElementById('inputPersonGroupDesc').defaultValue = personGroupDesc

  // Person Body 기본 입력 값 지정
  var personGroupName2 = document.getElementById('inputPersonGroup2')
  var personJson = {name: 'Person1', userData: 'User-provided data attached to the person'}
  var personDesc = JSON.stringify(personJson, null, '\t')
  document.getElementById('inputPersonDesc').defaultValue = personDesc

  document.getElementById('inputEndpoint').addEventListener('change', () => {
    sessionStorage.setItem('endpoint', endpoint.value)
  })

  document.getElementById('inputSubscriptionKey').addEventListener('change', () => {
    sessionStorage.setItem('subscriptionKey', subscriptionKey.value)
  })

  // PersonGroup 전송하기 버튼 객체 생성
  var sendPersonGroup = document.getElementById('personGroupSubmit')
  sendPersonGroup.addEventListener('click', function () {
    // personGroup 생성 요청

    // cognitive 서비스 호출
    var uriBase = endpoint.value + '/persongroups'
    var bodyDetail = document.getElementById('inputPersonGroupDesc')
    var uri = uriBase + '/' + personGroupName.value
    var body = bodyDetail.value

    var settings = {
      'url': uri,
      'method': 'PUT',
      'headers': {
        'content-type': 'application/json',
        'ocp-apim-subscription-key': subscriptionKey.value
      },
      'processData': false,
      'data': body
    }

    $.ajax(settings).done(function (response) {
      console.log(response)

      var jsonToString = JSON.stringify(response, null, '\t')
      document.getElementById('personGroupResult').value = jsonToString

      sessionStorage.setItem('personGroupId', personGroupName.value)
    })
  })

  var sendPerson = document.getElementById('personSubmit')
  sendPerson.addEventListener('click', function () {
    // 알맞은 코드를 채워넣어 보아요 //

    $.ajax(settings).done(function (response) {
      console.log(response)

      var jsonToString = JSON.stringify(response, null, '\t')
      document.getElementById('personResult').value = jsonToString

      sessionStorage.setItem('personId', response.personId)
    })
  })
}
