var controller = {
	view: {},
	models: {},
	setView: function(newView) {
			this.view = newView;
		},	
	addModel: function(newModel) {
			this.models[newModel.name] = newModel;
		}
};

module.exports = controller;