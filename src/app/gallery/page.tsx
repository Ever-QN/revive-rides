import Image from "next/image"

export default function Gallery() {
  return (
    <section className="w-full p-4">
      <div className="px-4 grid items-center justify-center gap-4 text-center md:px-6">
        <div className="space-y-2 pt-16 lg:pt-0">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We take pride in our craftsmanship. Here are some of the 2000+ cars we have repaired and restored.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 xl:gap-8">
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Broken black sedan"
              className="object-cover w-full aspect-[3/2] group-hover:scale-105 group-hover:transition-transform transition-transform rounded-lg"
              height="400"
              src="/images/gallery-images/brokencar.jpg"
              width="600"
              >
            </Image>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Fixed black sedan"
              className="object-cover w-full aspect-[3/2] group-hover:scale-105 group-hover:transition-transform transition-transform rounded-lg"
              height="400"
              src="/images/gallery-images/fixedcar.jpg"
              width="600"
              >
            </Image>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Broken red sedan in a scrapyard outside"
              className="object-cover w-full aspect-[3/2] group-hover:scale-105 group-hover:transition-transform transition-transform rounded-lg"
              height="400"
              src="/images/gallery-images/brokenredcar.jpg"
              width="600"
              >
            </Image>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Fixed red sedan in a garage"
              className="object-cover w-full aspect-[3/2] group-hover:scale-105 group-hover:transition-transform transition-transform rounded-lg"
              height="400"
              src="/images/gallery-images/redcarfixed.jpg"
              width="600"
              >
            </Image>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Red truck with a crushed front end in a garage with the hood up"
              className="object-cover w-full aspect-[3/2] group-hover:scale-105 group-hover:transition-transform transition-transform rounded-lg"
              height="400"
              src="/images/gallery-images/brokenredtruck.jpg"
              width="600"
              >
            </Image>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Fixed red truck outside"
              className="object-cover w-full aspect-[3/2] group-hover:scale-105 group-hover:transition-transform transition-transform rounded-lg"
              height="400"
              src="/images/gallery-images/fixedredtruck.jpg"
              width="600"
              >
            </Image>
          </div>
          {/* <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Broken SUV in a garage beside a white truck"
              className="object-cover w-full aspect-[3/2] group-hover:scale-105 group-hover:transition-transform transition-transform rounded-lg"
              height="400"
              src="/images/gallery-images/brokensuv.jpg"
              width="600"
              >
            </Image>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Fixed SUV outside"
              className="object-cover w-full aspect-[3/2] group-hover:scale-105 group-hover:transition-transform transition-transform rounded-lg"
              height="400"
              src="/images/gallery-images/fixedsuv.jpg"
              width="600"
              >
            </Image>
          </div> */}
          {/* <div className="relative group overflow-hidden rounded-lg">
            <video muted width="200" height="300" src="/videos/redcarfixed.mp4" controls preload="auto" />
          </div> */}
        </div>
        
      </div>
    </section>
  )
}

