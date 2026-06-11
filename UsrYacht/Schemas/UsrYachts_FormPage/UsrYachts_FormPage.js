define("UsrYachts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentsTabContainer",
				"values": {
					"caption": "#ResourceString(AttachmentsTabContainer_caption)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "501d7748-7639-43a0-9b0d-122abd8d140b",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_Run",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_Run_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"menuItems": [],
					"clickMode": "menu",
					"visible": true,
					"icon": "actions-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_vwupvbe",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_vwupvbe_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAvgTicketPrice",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					}
				},
				"parentName": "Button_Run",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_4fdeoag",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_4fdeoag_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					},
					"icon": "pencil-button-icon"
				},
				"parentName": "Button_Run",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_AddRentals",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_AddRentals_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrYachtAddRental",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					}
				},
				"parentName": "Button_Run",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Button_JSTest",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_JSTest_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn9_rojc1au",
					"control": "$PDS_UsrColumn9_rojc1au",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn17_770cvu6",
					"control": "$PDS_UsrColumn17_770cvu6",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_mahnbe4",
					"control": "$PDS_UsrTicketPrice_mahnbe4",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn8_a2xau9w",
					"control": "$PDS_UsrColumn8_a2xau9w",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn10_6yq72jj",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrColumn10_6yq72jj",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_n95mqo7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_n95mqo7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Captain",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn11_yaxbkkg",
					"control": "$PDS_UsrColumn11_yaxbkkg",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EmailInput_CaptainEmail",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(EmailInput_CaptainEmail_label)#",
					"control": "$PDS_UsrCaptainEmail_fw8390e",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_CaptainEmail_caption)#",
					"visible": true,
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn14_k7qpqfd",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrColumn14_k7qpqfd",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "PassengerCount",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn12_jf80c2n",
					"control": "$PDS_UsrColumn12_jf80c2n",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn16_rixu2oj",
					"control": "$PDS_UsrColumn16_rixu2oj",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn13_k42x0v4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrColumn13_k42x0v4",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_lh8eqot",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCity_lh8eqot",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn15_e7arp7m",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrColumn15_e7arp7m",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "addRecord_tvs73jl",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tvs73jl_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_74pvk3q",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCountry_74pvk3q",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "MultiSelect_Categories",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(MultiSelect_Categories_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrCategoryInYacht",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_vcypg5g",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_vcypg5g_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_blp2znx",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_vcypg5g",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_v94w9my",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_blp2znx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_8bdf0me",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_8bdf0me_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_v94w9my",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_h9mk5o5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_h9mk5o5_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_v74azcfDS"
						}
					}
				},
				"parentName": "FlexContainer_v94w9my",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_jd6ivv5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_jd6ivv5_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_v94w9my",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_nani8ea",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_nani8ea_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_v74azcf"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_jd6ivv5",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_fvz9bvh",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_fvz9bvh_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_jd6ivv5",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_tbgtlml",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_tbgtlml_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_tbgtlml_GridDetail_v74azcf",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_v74azcf"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_tbgtlml_SearchValue",
							"GridDetailSearchFilter_tbgtlml_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_v94w9my",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_68aa06n",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_vcypg5g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_v74azcf",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_v74azcf",
					"primaryColumnName": "GridDetail_v74azcfDS_Id",
					"columns": [
						{
							"id": "e2784be3-aaac-485b-3915-c83efd91b181",
							"code": "GridDetail_v74azcfDS_UsrRentalStart",
							"caption": "#ResourceString(GridDetail_v74azcfDS_UsrRentalStart)#",
							"dataValueType": 8,
							"width": 147
						},
						{
							"id": "c03ad7c7-d587-7782-6bad-3db8e63edf08",
							"code": "GridDetail_v74azcfDS_UsrRentalEnd",
							"caption": "#ResourceString(GridDetail_v74azcfDS_UsrRentalEnd)#",
							"dataValueType": 8,
							"width": 133
						},
						{
							"id": "08d31ce0-7cc0-e3dd-ed37-325327806f57",
							"code": "GridDetail_v74azcfDS_UsrTotalPrice",
							"caption": "#ResourceString(GridDetail_v74azcfDS_UsrTotalPrice)#",
							"dataValueType": 32,
							"width": 168
						},
						{
							"id": "fa67ddca-65cf-0f83-2ed1-f96299d95ef2",
							"code": "GridDetail_v74azcfDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_v74azcfDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 240
						},
						{
							"id": "9d8a4f65-ec9e-0066-d59a-973f98c3d8af",
							"code": "GridDetail_v74azcfDS_UsrManager",
							"caption": "#ResourceString(GridDetail_v74azcfDS_UsrManager)#",
							"dataValueType": 10
						},
						{
							"id": "25bb530a-5aa4-9ebc-e3fc-67d613d21b9e",
							"code": "GridDetail_v74azcfDS_UsrComment",
							"caption": "#ResourceString(GridDetail_v74azcfDS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_68aa06n",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrColumn8_a2xau9w": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MyMaxValidator": {
								"type": "usr.DGMaxValidator",
								"params": {
									"maxValue": 5000,
									"message": "#ResourceString(LengthCannotBeMore)#"
								}
							}
						}
					},
					"PDS_UsrColumn9_rojc1au": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							},
							"MyMaxValidator": {
								"type": "usr.DGMaxValidator",
								"params": {
									"maxValue": 100000,
									"message": "#ResourceString(PriceCannotBeMore)#"
								}
							}
						}
					},
					"PDS_UsrColumn10_6yq72jj": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrColumn10_6yq72jj_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrColumn11_yaxbkkg": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(CrewCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrColumn12_jf80c2n": {
						"modelConfig": {
							"path": "PDS.UsrPassengerCount"
						}
					},
					"PDS_UsrColumn13_k42x0v4": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrColumn13_k42x0v4_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrColumn14_k7qpqfd": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrColumn14_k7qpqfd_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrColumn15_e7arp7m": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrColumn15_e7arp7m_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrColumn16_rixu2oj": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrColumn17_770cvu6": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCity_lh8eqot": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCity_lh8eqot_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCountry_74pvk3q": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCountry_74pvk3q_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrTicketPrice_mahnbe4": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrCaptainEmail_fw8390e": {
						"modelConfig": {
							"path": "PDS.UsrCaptainEmail_fw8390e"
						}
					},
					"GridDetail_v74azcf": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_v74azcfDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_tbgtlml_GridDetail_v74azcf",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrRentalEnd"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_v74azcfDS_UsrRentalStart": {
									"modelConfig": {
										"path": "GridDetail_v74azcfDS.UsrRentalStart"
									}
								},
								"GridDetail_v74azcfDS_UsrRentalEnd": {
									"modelConfig": {
										"path": "GridDetail_v74azcfDS.UsrRentalEnd"
									}
								},
								"GridDetail_v74azcfDS_UsrTotalPrice": {
									"modelConfig": {
										"path": "GridDetail_v74azcfDS.UsrTotalPrice"
									}
								},
								"GridDetail_v74azcfDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_v74azcfDS.UsrCustomer"
									}
								},
								"GridDetail_v74azcfDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_v74azcfDS.UsrManager"
									}
								},
								"GridDetail_v74azcfDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_v74azcfDS.UsrComment"
									}
								},
								"GridDetail_v74azcfDS_Id": {
									"modelConfig": {
										"path": "GridDetail_v74azcfDS.Id"
									}
								}
							}
						}
					},
					"MultiSelect_Categories_List_Items_Predefined_Filter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_v74azcfDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYachts",
							"attributes": {
								"UsrCaptainEmail_fw8390e": {
									"path": "UsrCaptain.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_v74azcfDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrRentalStart": {
									"path": "UsrRentalStart"
								},
								"UsrRentalEnd": {
									"path": "UsrRentalEnd"
								},
								"UsrTotalPrice": {
									"path": "UsrTotalPrice"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrColumn9_rojc1au;
					console.log("Price = " + price);
					request.$context.PDS_UsrColumn16_rixu2oj = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrColumn9_rojc1au' || 		        // if price changed
					   request.attributeName === 'PDS_UsrColumn12_jf80c2n' ) { 		// or Passenger count changed
						let price = await request.$context.PDS_UsrColumn9_rojc1au;
						let passengers = await request.$context.PDS_UsrColumn12_jf80c2n;
						let ticket_price = price / passengers;
						request.$context.PDS_UsrTicketPrice_mahnbe4 = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "usr.RunWebServiceRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");
					
					// get id from drive type lookup type object
					var typeObject = await request.$context.PDS_UsrColumn13_k42x0v4;
					var driveTypeId = "";
					if (typeObject) {
						driveTypeId = typeObject.value;
					}
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();
					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "YachtService";
					const methodName = "GetMaxPriceByDriveTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/D1_Studio/0/rest/YachtService/GetMaxPriceByDriveTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						driveTypeId: driveTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);
					const methodName2 = "GetAvgPriceByDriveTypeId";
					const endpoint2 = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName2);

					const response2 = await httpClientService.post(endpoint2, params);
					console.log("response avg price = " + response2.body.GetAvgPriceByDriveTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}

			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			},
			"usr.DGMaxValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let maxValue = config.maxValue;
						let valueIsCorrect = value <= maxValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGMaxValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "maxValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}				
		}/**SCHEMA_VALIDATORS*/
	};
});