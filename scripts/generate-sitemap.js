const fs = require("fs");

const globby = require("globby");

// var client = require("graphql-client")({
//   url: "https://strapigift.herokuapp.com/graphql",
// });

const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/_*.js",
    "!pages/api",
  ]);

  // const res = await client.query(`
  //   query Articles {
  //     articles {
  //       id
  //       slug
  //     }
  //   }`);

  // const {
  //   data: { articles },
  // } = res;

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("pages", "")
                  .replace(".js", "")
                  .replace(".mdx", "");
                const route = path === "/index" ? "" : path;
                if (route.includes("[slug]")) return null;
                return `
                        <url>
                            <loc>${`https://giftjet.co${route}`}</loc>
                        </url>
                    `;
              })
              // .join("")}
              // ${articles
              //   .map((article) => {
              //     return `
              //             <url>
              //                 <loc>${`https://giftjet.co/${article.slug}/`}</loc>
              //             </url>
              //         `;
              //   })
                .join("")}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  fs.writeFileSync("public/sitemap.xml", formatted);
})();