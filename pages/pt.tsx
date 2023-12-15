import Home from "~/screens/home";

export default function Pt() {
  return <Home locale="pt" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "pt",
    },
  };
}
