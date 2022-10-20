Ext.define('TutorialApp.view.main.Main', {
	extend: 'Ext.container.Container',

	requires: [
			'TutorialApp.view.main.MainController',
			'TutorialApp.view.main.MainModel'
	],

	xtype: 'app-main',

	controller: 'main',
	plugins: 'viewport',
	viewModel: {
			type: 'main'
	},

	layout: {
			type: 'border'
	},

	items: [{
			xtype: 'panel',
			bind: {
					title: '{name}'
			},
			region: 'west',
			html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
			width: 250,
			split: true,
			tbar: [{
					text: 'Выход',
					handler: 'onClickButton'
			}]
	},{
			region: 'center',
			xtype: 'tabpanel',
			items:[{
					title: 'Tab 1',
					html: '<h2>Content appropriate for the current navigation.</h2>'
			}]
	}]
});