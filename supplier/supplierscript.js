var sapp=angular.module('suppliermod',['angularUtils.directives.dirPagination','ui.router'])
               .config(function($stateProvider)
                          { 
                           $stateProvider.caseInsensitiveMatch=true;
                    
                             $stateProvider
                              .state('myaccount',{
                                url:'/myaccount',
                              templateUrl:'myaccount.html',
                              controller:'myaccountcont'
                           })
                             $stateProvider
                              .state('supplier',{
                                url:'/supplier',
                              templateUrl:'supplier.html',
                              controller:'suppliercont'
                           })
                          /* $stateProvider
                              .state('dealer-details',{
                                url:'/dealer-details',
                              templateUrl:'dealer-details.html',
                                 controller:'suppliercont' 
                           });*/
                          $stateProvider
                              .state('dealer-details',{
                                url:'/dealer-details',
                              templateUrl:'dealer-details.html',
                                 controller:'dealdetcont'
                           });
                             
               })
                       .controller('suppliercont',function($scope,$http,$state,$rootScope)
                          {/*var product1={};
                           $scope.product1=product1;*/
                          /*var productlist=[{}];
                              $scope.productlist=productlist;
                                $scope.idd;          
                              $scope.editable=false;
                             var flag=true;
                           $scope.products;*/
                      /*    $scope.saverow=function()*/
                        /*  {*/  /* $scope.productlist.push($scope.product);
                                 $scope.productlist[$scope.productlist.length-1].tqty=$scope.tqty;
                                 $scope.productlist[$scope.productlist.length-1].aqty=$scope.aqty;
                                 $scope.productlist[$scope.productlist.length-1].lavail=$scope.lavail;
                                 $scope.productlist[$scope.productlist.length-1].fprice=$scope.fprice;
                               $scope.productlist[$scope.productlist.length-1].date=$scope.date;
                               $scope.productlist[$scope.productlist.length-1].agent=$scope.agent;*/
                             /* console.log($scope.productlist);
                              $scope.product1.productlist1=$scope.productlist;*/
                            /*  console.log($scope.product1.date);*/
                          /*   localStorage.ldata=JSON.stringify($scope.product1);
				             
				                console.log(localStorage.ldata);
				                $scope.fetchtask();
                                 $scope.editable=true;
				 }
				 $scope.fetchtask=function(){*/
				//var fdata=JSON.parse(localStorage.ldata);
					 /*$scope.product1=JSON.parse(localStorage.ldata);
               $scope.productlist=$scope.product1.productlist1;*/
				  //console.log(fdata);
					 
				/* }
                          */
/*                 $scope.saverow=function()*/
                      /*{  $scope.productlist[$scope.productlist.length-1].date=$scope.date;
                         idd=$scope.productlist.length-1;
                         $scope.productlist.forEach(function(elem,index)
										 { 
                                         if(($scope.productlist[idd].item==elem.item)&&($scope.productlist[idd].gtype==elem.gtype)&&($scope.productlist[idd].date==elem.date))
                                         { if(index!=idd)
                                           {alert("please enter unique value of combination of item+gtype+date");
                                             flag=false;
                                             }
                                           else
                                            if(flag)*/
                                           /*{ */
                                             /*$scope.productlist[idd].stock_id=$scope.productlist[idd].item+$scope.productlist[idd].gtype+$scope.productlist[idd].date;
                                             console.log($scope.productlist);
                                           $scope.editable=true;
                                   localStorage.ldata=JSON.stringify($scope.productlist);
                                    console.log(localStorage.ldata);
                                  $scope.fetchtask();
                                }
                                               
                                         }
                                           else
                                           { $scope.productlist[idd].stock_id=$scope.productlist[idd].item+$scope.productlist[idd].gtype+$scope.productlist[idd].date;
                                            console.log($scope.productlist);
                                           $scope.editable=true;
                                   localStorage.ldata=JSON.stringify($scope.productlist);
                                    console.log(localStorage.ldata);*/
                             /*     $scope.fetchtask();
                        
                                           }
                                         
                              });
                    
                      }
                      $scope.fetchtask=function()
                      {$scope.productlist=JSON.parse(localStorage.ldata);
                       console.log(localStorage.ldata);
                      }
                        $scope.addrow=function()
                          {   
                            $scope.productlist.push({item:'',gtype:'',tqty:'',aqty:'',lavail:'',fprice:'',agent:''});
                              $scope.editable=false;
                          }
                        
                         $scope.deleterow=function(id)
                          {$scope.productlist.forEach(function(elem,index)
										 {
		                                  if(index==id)
					                      {$scope.productlist.splice(index,1);
				                            }
				                         });
                            localStorage.ldata=JSON.stringify($scope.productlist);*/
                           /*
                             $scope.product1.productlist1=productlist;
                             localStorage.ldata=JSON.stringify($scope.product1);
				             */
                              
                        /*  }
                          $scope.editdata=function(id)
                          {$scope.productlist.forEach(function(elem,index)
										 {
		                                  if(index==id)
                                              {$scope.editable=false;}
                              });
                           
                          }
                          $scope.statusobj={};
                          $scope.getproduct=function(p,s)
                          {$scope.products=p;
                           $scope.statusobj=s;
                              
                          }
                         $scope.saveproduct=function()
                          {$scope.productlist.p=$scope.products;
                            localStorage.ldata=JSON.stringify($scope.productlist);
                           $scope
                            }
                          $scope.statusdata;
                          $scope.statusdata=$http.get('status.json')
                                              .then(function(response)
                                                   { $scope.statusdata=response.data;});*/
                          /* $scope.combinearray=$scope.productlist.map(function(value,index)
                                                                    {return{ 
                                                                             data:value,
                                                                             value:$scope.statusdata[index]
                                                                        
                                                                            }
                               
                                                                     });*/
                     
                          $scope.supplier={};
                          $scope.productlist=[{}];
                           $scope.noneditables=[];
                           
                           var flag=true;
                           console.log($rootScope.supid);
                                              $http.get('mainjson.json')
                                              .then(function(response)
                                                   {
                                                     response.data.forEach(function(elem,index)
                                                                          { if(elem.sup_id==$rootScope.supid)
                                                                             $scope.supplier=elem;
                                                                            
                                                                           });
                                                    console.log($scope.supplier);
                                                   /* localStorage.ldata=JSON.stringify($scope.productlist);*/
                                                      localStorage.ldata=JSON.stringify($scope.supplier);
                                                    /*$scope.productlist=response.data[0].stock;*/
                                                     console.log(localStorage.ldata);
                                                   });  
                        /* console.log($scope.productlist);     
                       localStorage.ldata=JSON.stringify($scope.productlist);
                        console.log(localStorage.ldata);*/
                         $scope.fetchtask=function()
                      {/*$scope.productlist=JSON.parse(localStorage.ldata);*/
                        $scope.supplier=JSON.parse(localStorage.ldata);
                         console.log($scope.supplier);
                       /*  $scope.supplier.forEach(function(elem,index)
                          {$scope.productlist=elem.stock;
                        });
                              */                                              
                        $scope.productlist=$scope.supplier.stock
                        $scope.productlist.forEach(function(elem,index)
                            { $scope.noneditables[index]=true;
                            
                             });
                          console.log($scope.noneditables);    
                        console.log(localStorage.ldata);
                    
                      }
                        
                    /*  {$scope.productlist=JSON.parse(localStorage.ldata);
                       console.log(localStorage.ldata);
                    
                      }*/
    
                        
                           $scope.addrow=function()
                          {   
                            $scope.productlist.push({ stock_id:"",date:"",item:"",gtype:"",tqty:"",minqty:"",lavail:"",fprice:"",agent:"",
              negotiation:"",orders:[]});
                             $scope.noneditables[$scope.noneditables.length]=false;
                          }
                     $scope.saverow=function()
                     /*{ $scope.supplier.forEach(function(elem,index)
                         { elem.stock=$scope.productlist;
                                                         
                         });
                         $http.post('/mainjson.json',$scope.supplier);}*/
                    { 
                         idd=$scope.productlist.length-1;
                         $scope.productlist.forEach(function(elem,index)
										 { 
                                         if(($scope.productlist[idd].item==elem.item)&&($scope.productlist[idd].gtype==elem.gtype)&&($scope.productlist[idd].date==elem.date))
                                         { if(index!=idd)
                                           {alert("please enter unique value of combination of item+gtype+date");
                                             flag=false;
                                             }
                                           else
                                            if(flag)
                                           { 
                                             $scope.productlist[idd].stock_id=$scope.productlist[idd].item+$scope.productlist[idd].gtype+$scope.productlist[idd].date;
                                             console.log($scope.productlist);
                                           $scope.editable=true;
                                    
                                         $scope.supplier.stock=$scope.productlist;
                                                                            
                                                                        
                                   localStorage.ldata=JSON.stringify($scope.supplier);
                                    console.log(localStorage.ldata);
                                  $scope.fetchtask();
                                }
                                               
                                         }
                                           else
                                           {
                                            $scope.productlist[idd].stock_id=$scope.productlist[idd].item+$scope.productlist[idd].gtype+$scope.productlist[idd].date;
                                            console.log($scope.productlist);
                                           $scope.editable=true;
                                         $scope.supplier.stock=$scope.productlist;
                                   localStorage.ldata=JSON.stringify($scope.supplier);
                                    console.log(localStorage.ldata);
                                  $scope.fetchtask();
                        
                                           }
                                         
                              });
                    
                      }
                /* $rootScope.ord=[{}];*/
                      /*$scope.id3;
                      $scope.gotomyorder=function(id)
                      {
                         $scope.id3=id;
                           console.log($scope.id3);
                          $state.go('dealer-details');
                      }
                      console.log($scope.id3);*/
                     $rootScope.stkid;
                     $rootScope.flag1=true;
                     $scope.gotomyorder=function(obj)
                       {$rootScope.stkid=obj.stock_id;
                        $state.go('dealer-details');
                         $rootScope.flag1=false;
                       }
                 /* $scope.gotomyorder=function(obj)
                       {$rootScope.neg=obj.negotiation;
                        $rootScope.ord=obj.orders;
                        console.log($rootScope.ord);
                        $state.go('dealer-details');
                       }
                         */
                        /* $scope.gotomyorder=function(obj)
                         { supplierservice.setorder(obj);
                           $state.go('dealer-details');
                         }*/
                     
                             $scope.editdata=function(id)
                          {$scope.productlist.forEach(function(elem,index)
										 {
		                                  if(index==id)
                                              {$scope.editable=false;
                                               $scope.noneditables[index]=false;}
                              });
                           
                          }
                         $scope.deleterow=function(id)
                          {$scope.productlist.forEach(function(elem,index)
										 {
		                                  if(index==id)
					                      {$scope.productlist.splice(index,1);
				                            }
				                         });
                                      $scope.supplier.stock=$scope.productlist;
                                   localStorage.ldata=JSON.stringify($scope.supplier);
                           console.log(localStorage.ldata);
                           /* localStorage.ldata=JSON.stringify($scope.productlist);*/
                          }
               })
                 .controller('dealdetcont',function($scope,$filter,$rootScope)
                             {/*$scope.ord2={};
                              $scope.ord1=[{}];
                               $scope.getord=function()
                               { $scope.ord2=supplierservice.getorder();
                                 $scope.ord1=$scope.ord2.orders; 
                               }*/
                          $scope.neg;
                         console.log($rootScope.stkid);
                        console.log(localStorage.ldata);
                          $scope.suplist={};
                       $scope.ord=[{}];
                          /*  var ordproducts={};*/
                          
                              $scope.suplist=JSON.parse(localStorage.ldata);
                              console.log($scope.suplist);
                             $scope.plist=[{}];
                              $scope.plist= $scope.suplist.stock;
                              $scope.showproducts=function()
                               {  console.log($rootScope.flag1);
                                   if(!$rootScope.flag1)
                               {   
                                console.log($rootScope.flag1);
                                   $scope.plist.forEach(function(elem,index)
                                  {if(elem.stock_id==$rootScope.stkid)
                                      { $scope.ord=elem.orders;
                                        
                                       }
                                     $scope.neg=elem.negotiation;
                                  });
                               }
                               $scope.applyneg=function()
                               {$scope.neg=true;
                                   
                               }
                               $scope.addmore=function()
                               { $scope.ordproducts.itemhis.push({dtime:"",offer:"",price:"",qty:""});
                                   
                               }
                               /* {console.log("inside main ");
                                 console.log($rootScope.flag1);
                                 $scope.plist.forEach(function(elem,index)
                                  {
                                     elem.orders.forEach(function(ele,ind)
                                      { console.log(elem.orders.ele);
                                         $scope.ord.push(elem.orders.ele);
                                     });
                                       console.log($scope.ord);
                                  });
                                    
                                 }*/
                                  
                               }
                               /* $scope.ordproducts={};*/
                            
                                   /*$scope.ordproducts={};*/
                                 $scope.getproduct=function(o)
                                 {/*$scope.id=o;
                                  console.log($scope.id);*/
                                
                                   $scope.ordproducts=o;
                                    console.log( $scope.ordproducts);
                                
                                 }
                              
                                 $scope.showall=function()
                                 { console.log($scope.all);
                                    console.log($scope.fltr.oitem);
                                     if($scope.all==true)
                                     {$scope.fltr.oitem="";
                                      $scope.fltr.status="";
                                     }
                                  
                                     
                                 }
            
                        
                               /*console.log( "hii:= "+JSON.stringify($scope.ordproducts));*/
                        
                 })
                  .controller('myaccountcont',function($scope,$http,$rootScope)
                             {/*detail={name:'ankita',
                                      address:'2/10 p&t colony pusa road,new delhi-110005',
                                      mobno:9013335930,
                                      rank:23,
                                      dealsin:'deal'
                                     }
                                   $scope.detail=$http.get('details.json')
                                              .then(function(response)
                                                   { $scope.detail=response.data;})*/
                           
                              $scope.getdetail=function()
                              {  $scope.detail=$http.get('details.json')
                                              .then(function(response)
                                                   { $scope.detail=response.data;
                                                      $rootScope.supid=$scope.detail.supplierid;
                               console.log($rootScope.supid);});
                              
                              /* $scope.detail=detail;*/   
                              }
                            
                                   
                            
                      
                             });





































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































