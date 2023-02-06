import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger);

export const useGsapHeroImageReveal = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        y: '-100vh'
      },
      {
        y: 0,
        duration: 2,
        ease: 'power4.out'
      })
  }, [item])
}

export const useGsapHeroHeadlineReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map(item => item.current);

    gsap.fromTo(el,
      {
        y: '100vh'
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: 'power4.out',
        stagger: 0.2
      })
  }, [items, delay])
}

export const useGsapLinksReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map(item => item.current);

    gsap.fromTo(el,
      {
        y: -200,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay,
        ease: 'power4.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: el
        }
      })
  }, [items, delay])
}

export const useGsapBioReveal = (item, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        y: '100vh'
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: 'power4.out',
        stagger: 0.3,
      })
  }, [item, delay])
}

export const useGsapSocialsReveal = (item, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        x: '-100vh'
      },
      {
        x: 0,
        duration: 2,
        delay,
        ease: 'power4.out',
        stagger: 0.3,
      })
  }, [item, delay])
}

export const useGsapTitleReveal = (item, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        y: 500
      },
      {
        y: 0,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el
        }
      })
  }, [item, delay])
}

export const useGsapProjectReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map(item => item.current);

    gsap.fromTo(el,
      {
        y: 500,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay,
        ease: 'power4.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: el
        }
      })
  }, [items, delay])
}

export const useGsapAboutReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map(item => item.current);

    gsap.fromTo(el,
      {
        y: 500,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay,
        ease: 'power4.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: el
        }
      })
  }, [items, delay])
}

export const useGsapContactReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map(item => item.current);

    gsap.fromTo(el,
      {
        y: 500,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay,
        ease: 'power4.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: el
        }
      })
  }, [items, delay])
}

export const useGsapFooterReveal = (item, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        y: '-100'
      },
      {
        y: 0,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el
        }
      })
  }, [item, delay])
}

export const useGsapSkillsLineReveal = (items) => {
  useEffect(() => {
    items.forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          onEnter() {
            el.classList.add('reveal');
          }
        }
      })
    })

  }, [items])
}

export const useGsapSkillsItemReveal = (el) => {
  useEffect(() => {
    gsap.fromTo(el,
      {
        y: 200
      },
      {
        y: 0,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el
        }
      })

  }, [el])
}