const os = require("os");

const cpus = os.cpus();

console.log(cpus);

const ram = () => {
  const gbFreeMem = os.freemem() / 1024 / 1024 / 1024;
  const gbTotalMem = os.totalmem() / 1024 / 1024 / 1024;

  const ramInfos = {
    freeMem: Math.floor(gbFreeMem),
    totalMem: Math.floor(gbTotalMem),
    freePercentage: Math.floor((gbFreeMem / gbTotalMem) * 100),
    unit: "GB",
  };

  console.log(ramInfos);

  return ramInfos;
};

ram();

const osInfos = () => {
  const userInfo = os.userInfo();
  console.log(userInfo.username);

  //const { username } = os.userInfo();
  //console.log(username);

  const { username, homedir, shell } = os.userInfo();

  const infos = {
    architecture: os.arch(),
    platform: os.platform(),
    type: os.type(),
    uptime: Math.floor(os.uptime() / 3600), // en heure
    username: username,
    homedir,
    shell,
  };

  console.log(infos);

  return infos;
};

osInfos();
