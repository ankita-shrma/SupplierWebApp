sapp.factory('supplierservice',function(){
               var ordersobj={};
              
                  setorder:function(obj)
                    {  ordersobj.orders=obj.orders;
                    }
                  getorder:function()
                  {return ordersobj;}
                return
                {setorder:setorder,
                 getorder:getorder
                }
});

             