import NextTopLoader from "nextjs-toploader";

export default function Toploader() {
  return (
    <>
      <NextTopLoader
        color="#FF5C00"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        zIndex={1600}
      />
    </>
  );
}
