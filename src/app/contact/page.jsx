import PageBackground from "@/components/Background";

const Contact = () => {
  return (
    <div>
      <PageBackground src="/chicken.png" />
      <div className="flex flex-col items-center justify-center text-center px-6">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-12">
          CONTACT US (why tho? 🤨)
        </h1>

        {/* Two-column text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
          <pre className="whitespace-pre-wrap text-white text-lg md:text-xl">
            {`You probably thought about contacting us.
Took a moment, considered it, and ended up here.

There's no support team.
No hotline.
No “we'll get back to you shortly.”

It's just shortened links and a very simple setup.

If something stops working:
• try refreshing
• close and reopen the tab
• move on and come back later`}
          </pre>

          <pre className="whitespace-pre-wrap text-white text-lg md:text-xl">
            {`Email support doesn't exist.
Neither does a phone number.
There's no office address.

We don't actively monitor messages.
We don't provide direct support.
And that's intentional.

If you still feel the need to reach out,
it's probably better to step away for a bit.

cutr  
short links  
minimal overhead  
no customer support`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export const metadata = {
  title: "skibi.di - contact us",
  description: "contact skibi.di",
};
