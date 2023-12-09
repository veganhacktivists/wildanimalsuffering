import Home from "~/screens/home";

export default function Id() {
  return <Home locale="id" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "id",
    },
  };
}
