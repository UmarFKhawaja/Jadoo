const CONFIG = {
  Accept: {
    Patch: {
      Names: [],
      Prefixes: []
    },
    Minor: {
      Names: [
        '@types/node'
      ],
      Prefixes: []
    },
    Major: {
      Names: [],
      Prefixes: []
    },
  },
  Reject: {
    Names: [],
    Prefixes: []
  }
};

module.exports = {
  target: (name, { current, latest, versionType }) => {
    if (CONFIG.Accept.Patch.Names.includes(name)) {
      return 'patch';
    } else if (CONFIG.Accept.Minor.Names.includes(name)) {
      return 'minor';
    } else if (CONFIG.Accept.Major.Names.includes(name)) {
      return 'greatest';
    } else if (CONFIG.Accept.Patch.Prefixes.some((prefix) => name.startsWith(prefix))) {
      return 'patch';
    } else if (CONFIG.Accept.Minor.Prefixes.some((prefix) => name.startsWith(prefix))) {
      return 'minor';
    } else if (CONFIG.Accept.Major.Prefixes.some((prefix) => name.startsWith(prefix))) {
      return 'greatest';
    }

    return 'greatest';
  },
  reject: CONFIG.Reject.Names
};
