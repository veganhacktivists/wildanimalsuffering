import Home from "~/screens/home";

export default function Ja() {
  return <Home locale="ja" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "ja",
    },
  };
}
