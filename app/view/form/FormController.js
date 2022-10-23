Ext.define('TutorialApp.view.form.FormController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.form-panel',

	onCancelClick: function () { 
		this.getView().destroy();
	}
	
});