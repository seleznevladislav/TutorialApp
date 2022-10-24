Ext.define('TutorialApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	onItemSelected: function (sender, record) {
			console.log(sender.selected.items[0].data)
			
			Ext.create({
				xtype: 'form-panel'
			});
	},

	// onConfirm: function (choice) {
	// 		if (choice === 'yes') {
	// 			Ext.create({
	// 				xtype: 'login'
	// 			});
	// 		}
	// },

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