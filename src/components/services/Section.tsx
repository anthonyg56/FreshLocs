import Heading from '../layout/Heading'
import services from '@/utils/data/services'
import ServiceTile from './ServiceTile'

export default function MiniServices() {
  return (
    <div className='slide'>
      <div className='sect overflow-hidden'>
        <div className='lg:grid lg:grid-rows-[25%_75%] h-full'>
          <Heading title="OUR SERVICES" subTitle="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text." />

          <div className={`md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] md:gap-[20px]`}>
            {services.map((item, index) => <ServiceTile
              data={item}
              index={index}
              key={item.title}
            />)}
          </div>
        </div>
      </div>
    </div>
  )
}
