Ext.define('TutorialApp.view.main.Main', {
	extend: 'Ext.tab.Panel',

	requires: [
			'TutorialApp.view.main.MainController',
			// 'TutorialApp.view.main.MainModel',
			
	],

	xtype: 'app-main',

	controller: 'main',
	plugins: 'viewport',
	title: 'Главное меню',

	    items: [{
        title: 'Товары',
        items: [{
            xtype: 'mainlist'
        }],
			},
			{
					title: 'Выход',
					items: [{
            tbar: [{
											text: 'Выход',
											handler: 'onClickButton'
									}],
        }],
		 		}]	
});