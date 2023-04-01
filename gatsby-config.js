/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Konspekt`,
    description: `End-to-end workflow and toolchain for academic writing and community about digital writing tools`,
    keywords: `academic writing, research writing, workflow, toolchain, PKM, personal knowledge management, Zettelkasten, latex, pandoc, markdown, konspekt, conspectus`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "vo3bhh1p1b92",
        accessToken: "NuruLt_nRhiCqt9s6jRSy4sUN1VrzbpwfpZdQdcu5E8",
      },
    },
  ],
};
