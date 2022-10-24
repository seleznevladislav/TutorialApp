Ext.define('TutorialApp.view.login.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',
	onLoginClick: function () {
		let textField = this.lookup('displayfield');

		const {
			username,
			password
		} = this.lookup('form').getValues()
		if ((username === "admin") && (password === "padmin")) {
			localStorage.setItem("TutorialLoggedIn", true);

			this.getView().destroy();

			Ext.widget('app-main');
		} else {
			Ext.Msg.alert('Ошибка', 'Неправильное имя или пароль.')
			textField.setValue('Неправильное имя или пароль.');
		}

	}
});