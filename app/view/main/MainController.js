Ext.define('TutorialApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',



	alias: 'controller.main',
	onItemSelected: function (grid, record) {
		console.log(grid)
		let win = Ext.create("Ext.Window", {
			controller: 'form-panel',
			requires: [
					'TutorialApp.view.login.LoginController',
					'Ext.form.Panel'
			],
			id: 'itemCard',
			title: 'Карточка товара',
			layout:'fit',
			heigth: 600,
			width: 400,
			bodyPadding: 10,
			closable: false,
			items: [{
				xtype: 'form',
				id: 'itemForm',
				items: [{
						xtype: 'field',
						fieldLabel: 'ID',
						value: record.get("id"),
						inputType: 'string',
						allowBlank: false,
					}, {
						xtype: 'field',
						fieldLabel: 'Наименования',
						width: 300,
						value: record.get("name"),
						inputType: 'string'
					}, {
						xtype: 'numberfield',
						fieldLabel: 'Цена',
						minValue: 0,
						allowDecimals: true,
						incrementValue: 0.5,
						value: record.get("cost")
					},
					{
						xtype: 'numberfield',
						fieldLabel: 'Количество',
						value: record.get("count"),
						minValue: 0,
						stepValue: 1,
						maxValue: 100,
					}
				],
				buttons: [{
					text: 'Сохранить',
					// disabled: true,
					listeners: {
						click: 'onConfirm'
					}
				}, {
					text: 'Отмена',
					listeners: {
						click: 'onCancelClick'
					}
				}]


			}]

	})

	win.show();
},
	onClickButton: function () {
			// Remove the localStorage key/value
			localStorage.removeItem('TutorialLoggedIn');

			// Remove Main View
			this.getView().destroy();

			// Add the Login Window
			Ext.create({
					xtype: 'login'
			});
	}
});