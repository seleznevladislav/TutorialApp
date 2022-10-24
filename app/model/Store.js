Ext.define('TutorialApp.model.Store', {
    extend: 'TutorialApp.model.Base',

    fields: [
        {id:'id', type: 'int'}, 
				{name: 'name', type: 'string'},
				{description:'description', type: 'string'},
				{cost: 'cost', type: 'int'},
				{count: 'count', type: 'int'}
    ]
});
