Ext.define('TutorialApp.view.main.Main', {
	extend: 'Ext.tab.Panel',

	requires: [
			'TutorialApp.view.main.MainController',
			'TutorialApp.view.main.MainModel',
	],

	xtype: 'app-main',

	controller: 'main',
	plugins: 'viewport',
	viewModel: {
			type: 'main'
	},
	title: 'Главное меню',

	    items: [{
        title: 'Товары',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }],
				tbar: [{
					text: 'Выход',
					handler: 'onClickButton'
		 		}]	
    }
    ]
	// layout: {
	// 		type: 'border'
	// },

	// items: [{
	// 		xtype: 'panel',
	// 		bind: {
	// 				title: 'Главное окно'
	// 		},
			
	// 		region: 'center',
	// 		html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
	// 		width: 250,
	// 		split: true,
	// 		tbar: [{
	// 				text: 'Выход',
	// 				handler: 'onClickButton'
	// 		}],
	// }
	//]
});