Ext.define('TutorialApp.view.form.FormController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.form-panel',
	requires: [
		'TutorialApp.store.Store'
	],

	onCancelClick: function () { 
		this.getView().destroy();
	},
	onConfirm: function(button, record) {
		let id = button.up('form').items.items[0].value
		let cost = button.up('form').items.items[2].value
		let count = button.up('form').items.items[3].value
		const grid = Ext.getCmp('gridPanel-1')
		const store = grid.getStore()
		store.getById(id).setConfig('cost', cost)  // Я не знаю почему 
		store.getById(id).setConfig('count', count) // эти две строчки не помогают
		store.config.data.items[id-1].cost = cost
		store.config.data.items[id-1].count = count
		// console.log(grid.getStore().getById(id))
		grid.getView().refresh()
		this.getView().destroy()
	}
});