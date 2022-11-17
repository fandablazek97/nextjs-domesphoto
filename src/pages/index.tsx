import Hero from "@components/home/Hero";
import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import UiSection from "@ui/UiSection";
import Portfolio from "@components/home/Portfolio";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Ui framework"
        description="Nextjs ui framework v2 made with typescript"
        noIndex={false}
        noFollow={false}
      />
      {/* Hero section */}
      <Hero />

      <div className="w-screen bg-zinc-900/80">
        <Wrapper paddedContent="md">
          <UiSection id="o-mne" title="O mně">
            <div className="space-y-10">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                deleniti voluptate nostrum vitae voluptas impedit quibusdam modi
                dignissimos quod quaerat?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem ducimus repudiandae dolorem. Quo autem aspernatur aut
                repellat commodi ab eum quas quis, a, rerum architecto
                blanditiis, sit reprehenderit placeat amet non asperiores id eos
                dignissimos rem quibusdam atque. Quod molestias distinctio
                dolorum praesentium laudantium sapiente commodi beatae tempore
                eligendi voluptas.
              </p>
            </div>
          </UiSection>
        </Wrapper>

        <Portfolio />

        <Wrapper paddedContent="lg">
          <Heading as={"h2"} size="2xl">
            {" "}
            Lorem ipsum dolor
          </Heading>
        </Wrapper>
        <Wrapper paddedContent="lg">
          <Heading as={"h2"} size="2xl">
            {" "}
            Lorem ipsum dolor
          </Heading>
        </Wrapper>
        <Wrapper paddedContent="lg">
          <Heading as={"h2"} size="2xl">
            {" "}
            Lorem ipsum dolor
          </Heading>
        </Wrapper>
        <Wrapper paddedContent="lg">
          <Heading as={"h2"} size="2xl">
            {" "}
            Lorem ipsum dolor
          </Heading>
        </Wrapper>
        <Wrapper paddedContent="lg">
          <Heading as={"h2"} size="2xl">
            {" "}
            Lorem ipsum dolor
          </Heading>
        </Wrapper>
      </div>
    </>
  );
};

export default Home;
