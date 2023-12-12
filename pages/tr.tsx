import Home from "~/screens/home";

export default function Tr() {
  return <Home locale="tr" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "tr",
    },
  };
}
