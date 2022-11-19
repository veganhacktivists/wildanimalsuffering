import { Resource } from "./resource";

export function Podcasts() {
  return (
    <>
      <Resource
        thumbnail="podcasts/knowing-animals.jpg"
        containThumbnail
        title="Reducing Wild Animal Suffering with Kyle Johannsen"
        links={[
          [
            "Listen",
            "https://podcasts.apple.com/ie/podcast/episode-162-reducing-wild-animal-suffering-with-kyle/id997543452?i=1000513889611",
          ],
        ]}
      >
        On this episode, we are joined by Dr Kyle Johannsen. Kyle is an adjunct
        associate professor of philosophy at Queen's University in Canada. We
        discuss his 2020 book Wild Animal Ethics, which was published by
        Routledge.
      </Resource>

      <Resource
        thumbnail="podcasts/wildness.jpg"
        containThumbnail
        title="Who cares about wild animals? with Maia Laperle"
        links={[["Listen", "https://www.wildanimalinitiative.org/podcast"]]}
      >
        Maia introduces the values and tenets of wild animal welfare while
        interviewing leaders in the wild animal welfare space. In each episode,
        host Maia Laperle explores fundamental concepts in wild animal welfare,
        and what we do and don't know about life in the wild.
      </Resource>

      <Resource
        thumbnail="podcasts/the-reality-check.jpg"
        containThumbnail
        title="Brian Tomasik on Wild Animal Suffering"
        links={[["Listen", "https://www.youtube.com/watch?v=ra1l7SDzvBY"]]}
      >
        Our guest Brian Tomasik opens our eyes to Wild Animal Suffering. Brian
        Tomasik writes about ethics, animal welfare, and far-future scenarios
        from a suffering-focused perspective on his main website, "Essays On
        Reducing Suffering".
      </Resource>

      <Resource
        thumbnail="podcasts/80000-hours.jpg"
        containThumbnail
        title="Persis Eskander on wild animal welfare and what, if anything, to do about it"
        links={[
          [
            "Listen",
            "https://80000hours.org/podcast/episodes/persis-eskander-wild-animal-welfare/",
          ],
        ]}
      >
        Elephants in chains at travelling circuses; pregnant pigs trapped in
        coffin sized crates at factory farms; deers living in the wild. We
        should welcome the last as a pleasant break from the horror, right?
        Maybe, but maybe not. While we tend to have a romanticised view of
        nature, life in the wild includes a range of extremely negative
        experiences.
      </Resource>

      <Resource
        thumbnail="podcasts/philosophy.jpg"
        containThumbnail
        title="Kyle Johannsen, Wild Animal Ethics: The Moral and Political Problem of Wild Animal Suffering"
        links={[
          [
            "Listen",
            "https://podcasts.apple.com/no/podcast/kyle-johannsen-wild-animal-ethics-moral-political-problem/id426208821?i=1000504944783",
          ],
        ]}
      >
        Many sentient (or possibly sentient) wild animals follow a reproductive
        strategy whereby they have large numbers of offspring, the vast majority
        of which suffer and die quickly or suffer and die slowly. Either way,
        there is a huge amount of suffering in the wild.
      </Resource>
    </>
  );
}
