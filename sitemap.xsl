<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            max-width: 75rem;
            margin: 0 auto;
            padding: 2rem;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            margin: 2rem 0;
          }
          th, td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid #ddd;
            vertical-align: top;
          }
          th {
            background-color: #f8f9fa;
            font-weight: 600;
          }
          tr:hover {
            background-color: #f5f5f5;
          }
          .url {
            color: #0366d6;
            text-decoration: none;
            display: block;
            margin-bottom: 0.25rem;
          }
          .url:hover {
            text-decoration: underline;
          }
          h1 {
            color: #24292e;
            margin-bottom: 1rem;
          }
          .stats {
            color: #586069;
            font-size: 0.875rem;
          }
          .alternates {
            font-size: 0.8rem;
            color: #666;
            margin-top: 0.25rem;
            line-height: 1.4;
          }
          .lang-link {
            color: #0366d6;
            text-decoration: none;
            white-space: nowrap;
          }
          .lang-link:hover {
            text-decoration: underline;
          }
          .separator {
            color: #ccc;
            margin: 0 0.25rem;
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p class="stats">
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">
              This sitemap index contains <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </xsl:when>
            <xsl:otherwise>
              This sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </xsl:otherwise>
          </xsl:choose>
        </p>

        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="sitemap:urlset">
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Last Modified</th>
          <th>Change Frequency</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <xsl:for-each select="sitemap:url">
          <tr>
            <td>
              <a class="url" href="{sitemap:loc}">
                <xsl:value-of select="sitemap:loc"/>
              </a>
              <xsl:if test="xhtml:link">
                <div class="alternates">
                  Alternate languages:
                  <xsl:for-each select="xhtml:link">
                    <xsl:if test="position() > 1">
                      <span class="separator">|</span>
                    </xsl:if>
                    <a class="lang-link" href="{@href}">
                      <xsl:value-of select="@hreflang"/>
                    </a>
                  </xsl:for-each>
                </div>
              </xsl:if>
            </td>
            <td><xsl:value-of select="sitemap:lastmod"/></td>
            <td><xsl:value-of select="sitemap:changefreq"/></td>
            <td><xsl:value-of select="sitemap:priority"/></td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </xsl:template>

  <xsl:template match="sitemap:sitemapindex">
    <table>
      <thead>
        <tr>
          <th>Sitemap</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <xsl:for-each select="sitemap:sitemap">
          <tr>
            <td>
              <a class="url" href="{sitemap:loc}">
                <xsl:value-of select="sitemap:loc"/>
              </a>
            </td>
            <td>
              <xsl:value-of select="sitemap:lastmod"/>
            </td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </xsl:template>
</xsl:stylesheet>
