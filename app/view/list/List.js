Ext.define('TutorialApp.view.main.List', {
	extend: 'Ext.container.Container',
	xtype: 'mainlist',

	requires: [
		'TutorialApp.store.Store'
	],
	items: [{
			title: 'Список товаров',
			padding: '20, 10 0 10',
			bodyPadding: 5,
			defaults: {
				labelWidth: 150
			},
			items: [{
				xtype: 'textfield',
				fieldLabel: 'ID:',
				id: 'searchId',
				listeners: {
					specialkey: function (field, e) 
					{
						if (e.getKey() === e.ENTER)
						{
							let value = Ext.getCmp('searchId').value
						
							let dataIdx = Ext.getCmp('gridPanel-1').columns[0].dataIndex
							Ext.getCmp('gridPanel-1').getStore().addFilter(
								[{
								id: "filter-" + dataIdx,
								filterFn: function (record) {
									if (value == record.get(dataIdx)) 
									{
										return true
									}
								}
								}])
							if (value === '') 
							{
								Ext.getCmp('gridPanel-1').getStore().filters.removeAll()
							}
						}
					}
				}
			}, {
				xtype: 'textfield',
				fieldLabel: 'Описание:',
				id:'searchDescription',
				listeners: {
					specialkey: function (field, e) 
					{
						if (e.getKey() === e.ENTER)
						{
							let value = Ext.getCmp('searchDescription').value
							let dataIdx = Ext.getCmp('gridPanel-1').columns[2].dataIndex
							Ext.getCmp('gridPanel-1').getStore().addFilter([
							{
								description: "filter-" + dataIdx,
								filterFn: function (record) 
								{
									if (record.data.description.toLowerCase().indexOf(value.toLowerCase()) > -1) 
									{
										return true
									}
								}
							}])
							if (value === '') {
								Ext.getCmp('gridPanel-1').getStore().filters.removeAll()
							}
							}
					}	
				}
			}]
		},
		{
			xtype: 'gridpanel',
			padding: '10, 10 0 10',
			flex: 1,
			store: {
				type: 'Store'
			},
			id: 'gridPanel-1',
			columns: [{
					text: 'ID',
					dataIndex: 'id',
					groupable: true,
					filter: {},
					filterType: 'string',
				},
				{
					text: 'Имя',
					dataIndex: 'name',
					flex: 1,
				},
				{
					text: 'Описание',
					dataIndex: 'description',
					flex: 1,
					filter: {},
					filterType: 'string'
				},
				{
					text: 'Цена',
					dataIndex: 'cost',
					flex: 1
				},
				{
					text: 'Кол-во',
					dataIndex: 'count',
					flex: 1,
					renderer: function(value, meta) 
					{
						if(parseInt(value) === 0) meta.style = "background-color:red;";
						return value;
					}
				}
			],
			listeners: {
				select: 'onItemSelected'
			},
		},
	]
});