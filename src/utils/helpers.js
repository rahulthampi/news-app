const helpers = {
  shortenString: (str, length = 50, suffix = '...') => {
    if (str.length > length) return str.substring(0, length - suffix.length) + suffix;
    return str;
  },
};

export default helpers;
