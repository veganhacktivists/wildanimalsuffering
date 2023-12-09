import Home from "~/screens/home";

export default function Hy() {
  return <Home locale="hy" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "hy",
    },
  };
}
