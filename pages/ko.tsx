import Home from "~/screens/home";

export default function Ko() {
  return <Home locale="ko" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "ko",
    },
  };
}
