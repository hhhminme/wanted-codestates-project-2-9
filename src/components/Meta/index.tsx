/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ data }: { data: any }) => {
  const title = data?.title;
  const description = data?.description;
  const image = data?.image !== undefined && `${data?.image}`;
  const canonical = `${data?.canonical}`;
  const type = data?.type === undefined ? "website" : data?.type;
  const width = data?.image && (data?.width || 1200);
  const height = data?.image && (data?.height || 630);

  return (
    <Helmet titleTemplate="%s">
      <html lang="ko" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {image ? <link rel="image_src" href={image} /> : null}
      {image ? <meta itemProp="image" content={image} /> : null}
      <meta property="og:site_name" content="YOUR WEB SITE" />
      <meta property="og:title" content={title} />
      {description ? <meta property="og:description" content={description} /> : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:type" content={type} />
      {image ? <meta property="og:image" content={image} /> : null}
      {width ? <meta property="og:image:width" content={width} /> : null}
      {height ? <meta property="og:image:height" content={height} /> : null}
      <meta property="fb:pages" content="YOUR WEB SITE" />
      change type of twitter if there is no image?
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      {image ? <meta name="twitter:image" content={image} /> : null}
      <meta name="twitter:site" content="@YOURWEBSITE" />
    </Helmet>
  );
};

export default Meta;
