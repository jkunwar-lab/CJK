define("UsrYachts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachts"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "c384af94-915a-b5b4-470d-79162010a870",
							"code": "PDS_UsrNumber",
							"caption": "#ResourceString(PDS_UsrNumber)#",
							"dataValueType": 27,
							"width": 106
						},
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 158
						},
						{
							"id": "155d95aa-4af1-3e69-e9d3-f4ea9cf32e09",
							"code": "PDS_UsrDriveType",
							"caption": "#ResourceString(PDS_UsrDriveType)#",
							"dataValueType": 10,
							"width": 135
						},
						{
							"id": "f4255737-4f88-fe6b-16dd-46affe124ed1",
							"code": "PDS_UsrStatus",
							"caption": "#ResourceString(PDS_UsrStatus)#",
							"dataValueType": 10,
							"width": 101
						},
						{
							"id": "a9fc0666-9f5e-dce9-4d8d-0d51a29ac605",
							"code": "PDS_UsrCaptain",
							"caption": "#ResourceString(PDS_UsrCaptain)#",
							"dataValueType": 10,
							"width": 121
						},
						{
							"id": "e71ea852-ff3b-4303-9288-5663ac84cb72",
							"code": "PDS_UsrPrice",
							"caption": "#ResourceString(PDS_UsrPrice)#",
							"dataValueType": 32,
							"width": 225
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"columns": {
							"dragAndDrop": false,
							"resizing": true,
							"adding": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true
				}
			},
			{
				"operation": "move",
				"name": "DataTable",
				"parentName": "ListTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrYachts",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrNumber": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrDriveType": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrCaptain": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "UsrName"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrYachts",
					"attributes": {
						"UsrNumber": {
							"path": "UsrNumber"
						},
						"UsrName": {
							"path": "UsrName"
						},
						"UsrDriveType": {
							"path": "UsrDriveType"
						},
						"UsrStatus": {
							"path": "UsrStatus"
						},
						"UsrCaptain": {
							"path": "UsrCaptain"
						},
						"UsrPrice": {
							"path": "UsrPrice"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});