import Home from "~/screens/home";

export default function Th() {
  return <Home locale="th" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "th",
    },
  };
}
