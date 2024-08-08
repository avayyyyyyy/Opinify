export function StepsPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            3 Steps to Leverage Opinify
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Follow these three simple steps to collect valuable feedback and
            improve your website using Opinify.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold">Embed</h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              Add the Opinify widget to your website with a simple embed code to
              start collecting feedback from your users.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold">Collect</h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              Gather valuable insights from your users as they interact with
              your website, helping you understand their needs and preferences.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold">Improve</h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              Use the collected feedback to make data-driven improvements to
              your website, enhancing the user experience and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
