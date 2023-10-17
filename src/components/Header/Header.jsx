import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center border-b-2 p-4 md:flex max-w-7xl mx-auto'>
      <h1 className='font-bold text-4xl'>React Knowledge Cafe</h1>
      <img src={profile} alt="" />
      
    </div>
  );
};

export default Header;