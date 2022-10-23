/**
 * This view is an example list of people.
 */
Ext.define('TutorialApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'TutorialApp.store.Personnel'
    ],

    title: 'Список товаров',

    store: {
        type: 'personnel'
    },
		padding: 20,
    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Имя', dataIndex: 'name', flex: 1 },
        { text: 'Описание', dataIndex: 'description', flex: 1 },
        { text: 'Цена', dataIndex: 'cost', flex: 1 },
        { text: 'Кол-во', dataIndex: 'count', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
