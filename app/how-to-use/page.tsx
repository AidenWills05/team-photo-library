import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const steps = [
  {
    title: "Find photos",
    description:
      "Open the Photo Library page to browse the available shared photos.",
  },
  {
    title: "Open a photo",
    description:
      "Click any image to view a larger version in a new browser tab.",
  },
  {
    title: "Download a photo",
    description:
      "Use the Download button below a photo to save a copy to your device.",
  },
];

export default function HowToUsePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.95),transparent_20%),radial-gradient(circle_at_82%_18%,rgba(220,232,242,0.75),transparent_24%),radial-gradient(circle_at_50%_85%,rgba(236,226,210,0.8),transparent_28%),linear-gradient(135deg,#f7f4ef_0%,#f4efe7_38%,#eef4f7_62%,#ffffff_100%)] text-neutral-950">
      <SiteHeader />

      <section className="flex-1 px-6 pb-20 pt-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            Help
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Using the Photo Library
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            This library is a simple place to view and download shared team
            photos.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-neutral-200 bg-white/75 p-6 shadow-sm backdrop-blur"
              >
                <p className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
                  {index + 1}
                </p>

                <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
                  {step.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-neutral-200 bg-white/75 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
              Need something added?
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600">
              If photos are missing or need to be updated, contact the person
              managing the library and include the photo files or folder link.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}