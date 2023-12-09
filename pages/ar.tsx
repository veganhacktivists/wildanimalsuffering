import Home from "~/screens/home";

export default function Ar() {
  return <Home locale="ar" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "ar",
    },
  };
}
