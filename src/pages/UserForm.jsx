import UserInputs from '../components/UserInputs';
import Preview from '../components/Preview';

function UserForm() {
  return (
    <main className='flex flex-col md:flex-row max-w-6xl mx-auto mt-10'>
      <section className='md:w-1/2'>
        <UserInputs />
      </section>

      <section className='md:w-1/2'>
        <Preview />
      </section>
    </main>
  )
}

export default UserForm;