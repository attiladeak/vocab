/**
 * Created by attila.deak on 4/3/2017.
 */
define(['app/EventDispatcher', 'jquery'],function(e, $) {
    var HomeModel = function () {
        //this.tasks = [];
        this.getCurrentUserEvent = new e.event(this);
        //this.setTasksAsCompletedEvent = new e.event(this);
        //this.deleteTasksEvent = new e.event(this);

    };

    HomeModel.prototype = {
        getCurrentUser: function () {
            var user = 'Unknown user';
            var posting = $.post('account/getCurrentUser');
            posting.done(donecallback.bind(this));

            function donecallback(result){
                this.getCurrentUserEvent.notify({user : result});
            };
            //this.getCurrentUserEvent.notify({user : user});
        },

        /*getTasks: function () {
            return this.tasks;
        },

        setSelectedTask: function (taskIndex) {
            this.selectedTasks.push(taskIndex);
        },

        unselectTask: function (taskIndex) {
            this.selectedTasks.splice(taskIndex, 1);
        },

        setTasksAsCompleted: function () {
            var selectedTasks = this.selectedTasks;
            for (var index in selectedTasks) {
                this.tasks[selectedTasks[index]].taskStatus = 'completed';
            }

            this.setTasksAsCompletedEvent.notify();

            this.selectedTasks = [];

        },


        deleteTasks: function () {
            var selectedTasks = this.selectedTasks.sort();

            for (var i = selectedTasks.length - 1; i >= 0; i--) {
                this.tasks.splice(this.selectedTasks[i], 1);
            }

            // clear the selected tasks
            this.selectedTasks = [];

            this.deleteTasksEvent.notify();

        }*/
    };

    return {
        model : HomeModel
    }
});
