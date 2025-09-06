import type { IConfig, ISitemapField } from "next-sitemap";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://umarweb.com";

const config: IConfig = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/404", "/500", "/api/*"],
  changefreq: "weekly",
  priority: 0.7,

  transform: async (config, path) => {
    const isHomePage = path === "/";
    return {
      loc: path,
      changefreq: isHomePage ? "daily" : "weekly",
      priority: isHomePage ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },

  additionalPaths: async (config): Promise<ISitemapField[]> => {
    const extras: ISitemapField[] = [
      {
        loc: "/projects",
        changefreq: "weekly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
        alternateRefs: [],
      },
      {
        loc: "/contact",
        changefreq: "monthly",
        priority: 0.5,
        lastmod: new Date().toISOString(),
        alternateRefs: [],
      },
    ];

    return extras;
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/*"] },
    ],
  },
};

export default config;
