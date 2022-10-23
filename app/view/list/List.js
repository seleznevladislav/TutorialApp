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
			// plugins: {
			// 		'ux-panelfielddragzone': {
			// 				ddGroup: 'dd-field-to-grid'
			// 		}
			// },
			defaults: {
				labelWidth: 150
			},
			items: [{
				xtype: 'textfield',
				fieldLabel: 'ID:',
				// value: 'test'
			}, {
				xtype: 'textfield',
				fieldLabel: 'Описание:',
				// value: ''
			}]
		},
		{
			xtype: 'gridpanel',
			padding: '10, 10 0 10',
			flex: 1,
			store: {
				type: 'Store'
			},

			columns: [{
					text: 'ID',
					dataIndex: 'id',
					groupable: true,
					filterType: 'string'
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
					flex: 1
				}
			],
			listeners: {
				select: 'onItemSelected'
			},
		},
	]	
});
