import { artist } from '@/app/data/data';
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="max-w-3xl space-y-4 p-10 mx-auto">
      {artist.map((item) => (
        <div
          key={item.name}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Image
              src={item.imageSrc}
              alt={item.name}
              width={176}
              height={176}
              className="w-44 h-44 object-cover rounded-lg flex-shrink-0"
              priority
            />

            <div className="flex-1 text-center sm:text-left">
              <h3 className="mt-1 text-xl font-bold text-gray-900 leading-snug">
                {item.name}
              </h3>
              <h4 className="mt-2 text-sm font-semibold text-gray-700 leading-snug">
                สมาชิก
              </h4>

              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {item.members.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center sm:items-start"
                  >
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                    />
                    <span className="mt-1 text-xs font-medium text-gray-700 text-center sm:text-left">
                      {member.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}