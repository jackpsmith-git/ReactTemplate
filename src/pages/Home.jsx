import icon from '../assets/icons/vite.svg'
import { Button } from '../components/Button'

export const Home = () => {
  return (<>
    <section className='py-15 flex flex-col justify-center mx-10 gap-2'>
      <img src={icon} width={150} className='self-center'/>
      <h1 className='text-lg font-bold'>Heading</h1>
      <h2 className='text-lg font-semibold'>Subheading</h2>
      <h3 className='text-lg italic'>Section Heading</h3>
      <p className='text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse tempus semper nisl id consectetur. Vestibulum at pretium lorem, non 
        rutrum turpis. Sed vel est lectus. Donec et massa eu erat accumsan blandit at eget 
        felis. Ut sagittis quis ante non imperdiet. Duis vestibulum iaculis purus sit amet 
        faucibus. Vivamus vel neque pharetra, lobortis ante quis, gravida mi. Nullam tellus 
        mi, dignissim bibendum facilisis ut, sagittis sed velit. Aenean molestie nec leo ut 
        imperdiet. Curabitur sagittis fermentum ante vel lobortis. Mauris suscipit varius ex.
        Maecenas gravida fringilla nulla ultricies imperdiet. Praesent leo ipsum, lobortis 
        ut vestibulum viverra, accumsan vitae metus.
      </p>

      <Button>I am a responsive button.</Button>
      <Button className='max-w-75 mx-auto'>
        I am also a responsive button.
      </Button>

    </section>
  </>)
}