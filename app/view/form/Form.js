Ext.define('TutorialApp.view.form.Form', {
	extend: 'Ext.window.Window',
	xtype: 'form-panel',
	controller: 'form-panel',
	requires: [
			'TutorialApp.view.login.LoginController',
			'Ext.form.Panel'
	],
	heigth: 600,
	width: 400,
	bodyPadding: 10,
	title: 'Карточка товара',

	closable: true,
	autoShow: true,

	items: {
			xtype: 'form',
			items: [{
				xtype: 'field',
        fieldLabel: 'ID',
        emptyText: '{id}',
				inputType: 'string'
    }, {
				xtype: 'field',
        fieldLabel: 'Описание',
        emptyText: '{description}',
        inputType: 'string'
    }, {
        xtype: 'spinnerfield',
        fieldLabel: 'Цена',
    },
		{
			xtype: 'spinnerfield',
			fieldLabel: 'Количество',
		}],
			buttons: [{
				text: 'Сохранить',
				disabled: true,
			},{
					text: 'Отмена',
					listeners: {
							click: 'onCancelClick'
					}
			}]
	}
});