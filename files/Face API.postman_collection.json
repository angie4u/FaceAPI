{
	"variables": [],
	"info": {
		"name": "Face API",
		"_postman_id": "bf6a2e7e-0134-126e-ef42-808327d2205f",
		"description": "",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
	},
	"item": [
		{
			"name": "Create Person Group",
			"request": {
				"url": "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/group1",
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"description": ""
					},
					{
						"key": "Ocp-Apim-Subscription-Key",
						"value": "d53674714284400c885dd25bfd9f1617",
						"description": ""
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"group1\",\r\n    \"userData\": \"user-provided data attached to the person group.\"\r\n}"
				},
				"description": ""
			},
			"response": []
		},
		{
			"name": "Create Person",
			"request": {
				"url": "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/group1/persons",
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"description": ""
					},
					{
						"key": "Ocp-Apim-Subscription-Key",
						"value": "d53674714284400c885dd25bfd9f1617",
						"description": ""
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"eunji\",\r\n    \"userData\": \"User-provided data attached to the person.\"\r\n}"
				},
				"description": ""
			},
			"response": []
		},
		{
			"name": "Add Person Face",
			"request": {
				"url": "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/group1/persons/1cbc6f6e-57d0-467d-ba8e-9939e015b695/persistedFaces",
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/octet-stream",
						"description": ""
					},
					{
						"key": "Ocp-Apim-Subscription-Key",
						"value": "d53674714284400c885dd25bfd9f1617",
						"description": ""
					}
				],
				"body": {
					"mode": "file",
					"file": {
						"src": ""
					}
				},
				"description": ""
			},
			"response": []
		},
		{
			"name": "Face Detect",
			"request": {
				"url": {
					"raw": "https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false",
					"protocol": "https",
					"host": [
						"westus",
						"api",
						"cognitive",
						"microsoft",
						"com"
					],
					"path": [
						"face",
						"v1.0",
						"detect"
					],
					"query": [
						{
							"key": "returnFaceId",
							"value": "true",
							"equals": true,
							"description": ""
						},
						{
							"key": "returnFaceLandmarks",
							"value": "false",
							"equals": true,
							"description": ""
						}
					],
					"variable": []
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/octet-stream",
						"description": ""
					},
					{
						"key": "Ocp-Apim-Subscription-Key",
						"value": "d53674714284400c885dd25bfd9f1617",
						"description": ""
					}
				],
				"body": {
					"mode": "file",
					"file": {
						"src": ""
					}
				},
				"description": ""
			},
			"response": []
		},
		{
			"name": "Verify",
			"request": {
				"url": "https://westus.api.cognitive.microsoft.com/face/v1.0/verify",
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"description": ""
					},
					{
						"key": "Ocp-Apim-Subscription-Key",
						"value": "d53674714284400c885dd25bfd9f1617",
						"description": ""
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"faceId\": \"3ffec8f3-c676-4f67-8950-daeeaab140ad\",\r\n    \"personId\": \"1cbc6f6e-57d0-467d-ba8e-9939e015b695\",\r\n    \"personGroupId\": \"group1\"\r\n}\r\n"
				},
				"description": ""
			},
			"response": []
		}
	]
}