/**
 * Created by attila.deak on 3/30/2017.
 */
define(['TaskController', 'TaskModel', 'TaskView'],function(c, m, v){
    console.log("App running");
    var model = new m.task(),
        view = new v.view(model),
        controller = new c.controller(model, view);
});
