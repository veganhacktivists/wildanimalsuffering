import Home from "~/screens/home";

export default function Zh() {
  return <Home locale="zh" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "zh",
    },
  };
}
