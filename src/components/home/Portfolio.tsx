import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";
import ExportedImage from "next-image-export-optimizer";

type PortfolioProps = {
  className?: string;
};

export default function Portfolio({ className = "" }: PortfolioProps) {
  return (
    <>
      <Wrapper paddedContentTop="md" className={`${className}`}>
        <Heading as="h2" size="xl" hasMarginBottom>
          Portfolio
        </Heading>
      </Wrapper>
      <div className="grid w-[90%] grid-cols-2 gap-8 md:grid-cols-4 xl:grid-cols-8">
        {commercial.map((image, i) => (
          <ExportedImage
            key={i}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`${
              i === 0 || i === 3 || i === 7 || i === 7 || i === 9
                ? "col-span-2"
                : "col-span-1"
            }`}
          />
        ))}
      </div>
    </>
  );
}
