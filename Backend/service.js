var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'Backend - Site',
  description: 'Aplicação backend do site portfolio',
  script: 'C:UsersjjesusDesktopSite Juliana - PortfolioBackendindex.js'
});
 
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 
svc.install();