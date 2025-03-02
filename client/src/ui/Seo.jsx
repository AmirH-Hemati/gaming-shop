import { Helmet } from "react-helmet";

function Seo({ description, keywords, title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

export default Seo;
