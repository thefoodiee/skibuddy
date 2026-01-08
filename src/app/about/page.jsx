import PageBackground from "@/components/Background"

const About = () => {
  return (
    <div>
      <PageBackground src="/zombie.png"  />
      <div className="content m-auto w-screen text-center">
        <pre className="whitespace-pre-wrap text-white text-xl">
          {`We had a simple thought: long links are unnecessary.
So cutr was created to make them shorter and easier to share.

You paste a link.
It gets processed.
You get a short, clean version that works the same, without the clutter.

It's useful for sharing,
easier to remember,
and looks better almost everywhere.

If someone asks why the link is so short,
the answer is simple — it's optimized.

Click it once, it opens.
That's it. No tricks.

It's not trying to be flashy.
It just does one thing well.

cutr
short links  
less clutter  
no nonsense`}
        </pre>
      </div>
    </div>
  )
}

export default About

export const metadata = {
  title: "skibi.di - about us",
  description: "about skibi.di",
};
