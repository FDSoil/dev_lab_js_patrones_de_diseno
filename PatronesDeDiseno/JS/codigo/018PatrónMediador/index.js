var orgChart = {

    getEmployeeDetail: function() { 
        return {
            on: function(str, fun) {

            }
        } 
    },
 
    addNewEmployee: function(){
 
        // getEmployeeDetail proporciona una vista con la que los usuarios interactúan
        var employeeDetail = this.getEmployeeDetail();

 
        //cuando se completa la información del empleado, el mediador (el objeto 'orgchart') 
        //decide qué debe suceder a continuación

        employeeDetail.on("complete", function(employee){
 
            //configurar objetos adicionales que tienen eventos adicionales, que son utilizados 
            //por el mediador para hacer cosas adicionales

            var managerSelector = this.selectManager(employee);
            managerSelector.on("save", function(employee){
                employee.save();
            });
 
        });
  },
 
  // ...
}

orgChart.addNewEmployee();

