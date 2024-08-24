import Image from "next/image"

const logos = [
  {
    name: 'Vercel',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
  },
  {
    name: 'Nextjs',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
  },
  {
    name: 'Tailwind',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881514/tailwind_logo_dark_qxqxqx.svg',
  },
  {
    name: 'Prisma',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881550/prisma_logo_dark_mnfcft.svg',
  },
  {
    name: 'NextAuth',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881585/nextauth_logo_dark_trfbod.svg',
  },
  {
    name: 'Shadcn',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881620/shadcn_logo_dark_gdrpqy.svg',
  },
]
  
  const TechStack = () => {
    return (
      <div className="w-full py-12">
        <div className="mx-auto w-full px-4 md:px-8">
          <div
            className="group relative mt-6 flex gap-6 overflow-hidden p-2"
            style={{
              maskImage:
                'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
            }}
          >
            {Array(5)
              .fill(null)
              .map((index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                >
                  {logos.map((logo, key) => (
                    <Image
                      width={100}
                      height={100}
                      key={key}
                      src={logo.url}
                      className="h-10 w-28 px-2 brightness-0  dark:invert"
                      alt={`${logo.name}`}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default TechStack;
  