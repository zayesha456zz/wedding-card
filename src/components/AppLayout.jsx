import Watermark from './Watermark';

const AppLayout = ({ children }) => {
  return (
    // 'flex justify-center' poore layout ko screen ke center mein layega
    <div className="w-full min-h-screen flex justify-center bg-gray-100">
      
      {/* 'max-w-7xl' use kiya hai jo terminal ki warning ko khatam karega.
        Yeh desktop par proper width dega aur mobile par responsive rahega.
      */}
      <div className="w-full max-w-7xl min-h-screen bg-white relative shadow-2xl overflow-hidden">
        <Watermark />
        <main>{children}</main>
      </div>
      
    </div>
  );
};

export default AppLayout;