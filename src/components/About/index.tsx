import { AboutMeType } from '@/utils/types'
// import { aboutPage } from '@/utils/data'

const AboutMe = ({ start, experience, nextStep, purpose}: AboutMeType) => {
  return (
    <section data-testid="about-me-section" className='md:p-14'>
      <div className='text-gray-200 bg-black sticky top:0 z-10'>
        <h2  className="text-center py-6text-6xl md:text-2xl">
          Hello,
        </h2>
        <h3 className='text-4xl font-SansNarrow font-semi-bold'>
          I'm Alexandra
        </h3>
        <p data-testid="start">{start}</p>
        <p data-testid="experience">{experience}</p>
        <p data-testid="next-step">{nextStep}</p>
        <p data-testid="purpose">{purpose}</p>
      </div>
    </section>
  )
}

export default AboutMe