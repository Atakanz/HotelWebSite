import React, {useState} from 'react';
import * as Fa from 'react-icons/fa';

function ContactForm() {
  const [message, setMessage] = useState('');
  return (
    <div className="flex justify-center items-center md:h-screen max-[768px]:mt-12">
      <div className="flex flex-col border-2 bg-stone-100 border p-8 rounded-base">
        <div className="flex flex-row justify-center items-center">
          <div>
            <Fa.FaWpforms size={30} className="mr-3" />
          </div>
          <div className="flex items-center">
            <h2>BİZE MESAJ GÖNDERİN</h2>
          </div>
        </div>
        <form>
          <div className="flex flex-col space-y-7 mt-6">
            <input type="text" placeholder="Ad" />
            <input type="text" placeholder="Soyad" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone number" />
            <textarea
              placeholder="Mesaj"
              rows={6}
              value={message}
              onChange={e => setMessage(e)}
            />
          </div>
        </form>
        <div className="flex justify-center mt-7">
          <button className="rounded-[10px]">GÖNDER</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
