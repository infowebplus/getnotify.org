// @ts-check
// https://docusaurus.io/docs/sidebar

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'API',
      items: ['api/intro', 'api/authentication', 'api/endpoints'],
    },
    {
      type: 'category',
      label: 'Client / User guide',
      items: ['client/intro', 'client/dashboard', 'client/sending-messages'],
    },
  ],
};

export default sidebars;
