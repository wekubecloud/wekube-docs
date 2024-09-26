import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // docSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  docSidebar: [
    "intro",
    {
      type: "category",
      label: "快速开始",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "quick-start",
        },
      ],
    },
    {
      type: "category",
      label: "应用市场",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "app-market",
        },
      ],
    },
    {
      type: "category",
      label: "服务政策",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "msa",
        },
      ],
    },
  ],
};

export default sidebars;
