import Home from "~/screens/home";

export default function Vi() {
  return <Home locale="vi" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "vi",
    },
  };
}
