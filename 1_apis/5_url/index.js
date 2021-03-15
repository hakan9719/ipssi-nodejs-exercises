const url = require("url");

const urls = require("./url");
// const { urls, unicodeUrls, ASCIIUrls } = require("./url");

// for (let i = 0; i <= urls.urls.length; ++i) {}
const getUrlInfos = () => {
  const urlInfos = [];

  urls.urls.forEach((val) => {
    const formattedURL = new URL(val);

    urlInfos.push({
      href: formattedURL.href,
      protocol: formattedURL.protocol,
      origin: formattedURL.origin,
      hostname: formattedURL.hostname,
      pathname: formattedURL.pathname,
      params: formattedURL.searchParams,
    });
  });

  return urlInfos;
};

console.log(getUrlInfos());

const transformToAscii = () => {
  urls.unicodeUrls.forEach((val) => {
    const formattedURL = new URL(val);

    console.log(url.domainToASCII(formattedURL.hostname));
  });
};

transformToAscii();

const transformToUnicode = () => {
  urls.ASCIIUrls.forEach((val) => {
    const formattedURL = new URL(val);

    console.log(url.domainToUnicode(formattedURL.hostname));
  });
};

transformToUnicode();
