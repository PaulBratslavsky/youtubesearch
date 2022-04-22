

module.exports = {
  kind: "singleType",
  collectionName: "config",

  info: {
    singularName: "config",
    pluralName: "config",
    displayName: "Config",
    description: "Config for the Youtube Search plugin",
  },

  options: {
    draftAndPublish: false,
  },

  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    }
  },

  attributes: {
    apiKey: {
      type: "string",
      required: true,
    },

    description: {
      type: "string",
    },

  },
};
