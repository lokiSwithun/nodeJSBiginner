const os=require('os');  

console.log("Operating system Architecture: \n", os.arch());
console.log("Machine Information: \n", os.cpus());
console.log("endianess: \n", os.endianness());
console.log("free memory: ", os.freemem());
console.log("Home Directory: ", os.homedir());
console.log("host name: ", os.hostname());
console.log("average load: ", os.loadavg());
console.log("network interfaces: ", os.networkInterfaces());
console.log("OS platform: ", os.platform());
console.log("OS release date: ", os.release());
console.log("temporary directory: ", os.tmpdir());
console.log("total memory: ", os.totalmem());
console.log("OS type: ", os.type());
console.log("OS uptime: ", os.uptime());

