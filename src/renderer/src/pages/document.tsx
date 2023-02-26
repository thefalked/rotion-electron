import { ToC } from '../components/ToC'

export function Document() {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-rotion-300 font-semibold uppercase text-xs">
          Table of Contents
        </span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>Data base</ToC.Link>
            <ToC.Link>Auth</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corporis
        illo quaerat!
      </section>
    </main>
  )
}
