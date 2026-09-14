"use client"

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

type Hobby = {
  name: string
  name_en: string
  description: string
  description_en: string
  img: string
}

export const HobbiesCarousel = ({
  hobbies,
  autoplay = false,
}: {
  hobbies: Hobby[]
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % hobbies.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + hobbies.length) % hobbies.length)
  }

  useEffect(() => {
    if (!autoplay || hobbies.length <= 1) return

    const interval = setInterval(handleNext, 5000)

    return () => clearInterval(interval)
  }, [autoplay, hobbies.length])

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10

  return (
    <div className="mx-auto max-w-sm px-4 py-12 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
        {/* Images */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {hobbies.map((hobby, index) => {
              const isActive = index === active

              return (
                <motion.div
                  key={hobby.img}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    scale: isActive ? 1 : 0.95,
                    z: isActive ? 0 : -100,
                    rotate: isActive ? 0 : randomRotateY(),
                    zIndex: isActive ? 40 : hobbies.length - index,
                    y: isActive ? [0, -20, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={hobby.img}
                    alt={hobby.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white">
                {document.documentElement.lang === "en"
                  ? hobbies[active].name_en
                  : hobbies[active].name}
              </h3>

              <motion.p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                {(document.documentElement.lang === "en"
                  ? hobbies[active].description_en
                  : hobbies[active].description
                )
                  .split(" ")
                  .map((word, index) => (
                    <motion.span
                      key={`${active}-${index}`}
                      initial={{
                        filter: "blur(8px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex gap-3 md:mt-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous hobby"
              className="group flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-emerald-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 text-neutral-600 transition-transform duration-300 group-hover:-translate-x-0.5 dark:text-neutral-300" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next hobby"
              className="group flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-emerald-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <IconArrowRight className="h-4 w-4 text-neutral-600 transition-transform duration-300 group-hover:translate-x-0.5 dark:text-neutral-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// "use client"

// import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
// import { AnimatePresence, motion } from "motion/react"
// import { useEffect, useState } from "react"

// type Hobby = {
//   name: string
//   name_en: string
//   description: string
//   description_en: string
//   img: string
// }

// interface HobbiesCarouselProps {
//   hobbies: Hobby[]
//   autoplay?: boolean
// }

// export const HobbiesCarousel = ({
//   hobbies,
//   autoplay = false,
// }: HobbiesCarouselProps) => {
//   const [active, setActive] = useState(0)
//   const [language, setLanguage] = useState<"es" | "en">("es")

//   useEffect(() => {
//     const updateLanguage = () => {
//       setLanguage(document.documentElement.lang === "en" ? "en" : "es")
//     }

//     updateLanguage()

//     const observer = new MutationObserver(updateLanguage)

//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["lang"],
//     })

//     return () => observer.disconnect()
//   }, [])

//   useEffect(() => {
//     if (!autoplay || hobbies.length <= 1) return

//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % hobbies.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [autoplay, hobbies.length])

//   if (!hobbies.length) return null

//   const currentHobby = hobbies[active]

//   const handleNext = () => {
//     setActive((prev) => (prev + 1) % hobbies.length)
//   }

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 + hobbies.length) % hobbies.length)
//   }

//   const randomRotateY = () => Math.floor(Math.random() * 21) - 10

//   const title = language === "en" ? currentHobby.name_en : currentHobby.name

//   const description =
//     language === "en" ? currentHobby.description_en : currentHobby.description

//   return (
//     <div className="mx-auto max-w-sm px-4 py-12 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
//       <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
//         {/* Image */}
//         <div className="relative h-80 w-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentHobby.img}
//               initial={{
//                 opacity: 0,
//                 scale: 0.9,
//                 rotate: randomRotateY(),
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 rotate: 0,
//                 y: [0, -20, 0],
//               }}
//               exit={{
//                 opacity: 0,
//                 scale: 0.9,
//                 rotate: randomRotateY(),
//               }}
//               transition={{
//                 duration: 0.4,
//                 ease: "easeInOut",
//               }}
//               className="absolute inset-0 origin-bottom"
//             >
//               <img
//                 src={currentHobby.img}
//                 alt={title}
//                 width={500}
//                 height={500}
//                 draggable={false}
//                 loading={active === 0 ? "eager" : "lazy"}
//                 className="h-full w-full rounded-3xl object-cover object-center"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col justify-between py-2">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`${active}-${language}`}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -20, opacity: 0 }}
//               transition={{
//                 duration: 0.2,
//                 ease: "easeInOut",
//               }}
//             >
//               <h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white">
//                 {title}
//               </h3>

//               <motion.p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">
//                 {description.split(" ").map((word, index) => (
//                   <motion.span
//                     key={`${active}-${language}-${index}`}
//                     initial={{
//                       filter: "blur(8px)",
//                       opacity: 0,
//                       y: 5,
//                     }}
//                     animate={{
//                       filter: "blur(0px)",
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     transition={{
//                       duration: 0.2,
//                       ease: "easeInOut",
//                       delay: 0.02 * index,
//                     }}
//                     className="inline-block"
//                   >
//                     {word}&nbsp;
//                   </motion.span>
//                 ))}
//               </motion.p>
//             </motion.div>
//           </AnimatePresence>

//           {/* Controls */}
//           <div className="mt-8 flex gap-3 md:mt-0">
//             <button
//               type="button"
//               onClick={handlePrev}
//               aria-label={
//                 language === "en" ? "Previous hobby" : "Hobby anterior"
//               }
//               className="group flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-emerald-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
//             >
//               <IconArrowLeft className="h-4 w-4 text-neutral-600 transition-transform duration-300 group-hover:-translate-x-0.5 dark:text-neutral-300" />
//             </button>

//             <button
//               type="button"
//               onClick={handleNext}
//               aria-label={language === "en" ? "Next hobby" : "Siguiente hobby"}
//               className="group flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-emerald-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
//             >
//               <IconArrowRight className="h-4 w-4 text-neutral-600 transition-transform duration-300 group-hover:translate-x-0.5 dark:text-neutral-300" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
