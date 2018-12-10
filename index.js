// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  function filterDriver(driver){
    return (driver.revenue > revenue);
  }
  return drivers.filter(filterDriver);
}
 function driverNamesWithRevenueOver(drivers,revenue){
   return driversWithRevenueOver(drivers,revenue).map(function(driver){return driver.name;});

 }
 function exactMatch(drivers,object){
   function exactlyMatches(driver){
    const attr=Object.keys(object)[0]
    return driver[attr]===object[attr]
  }
  return drivers.filter(exactlyMatches);
 }

 function exactMatchToList(drivers, object){
 function driverName(driver){ return driver.name;}
 return exactMatch(drivers,object).map(driverName);
 }
