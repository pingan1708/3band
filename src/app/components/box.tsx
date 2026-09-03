import {types} from '@/app/type/type'
import { artist } from '@/app/data/data'
import Image from 'next/image';


export default function ProfileCard() {
  return (
    <div className="max-w-3xl space-y-4 p-10">
      {artist.map((artist) => (
        <div
          key={artist.name}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-4"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Image
              src={artist.imageSrc}
              alt={artist.name}
              width={128}
              height={128}
              className="w-45 h-45 object-cover rounded-lg flex-shrink-0"
              priority
            />

            <div className="flex-1 text-center sm:text-left">
              <h3 className="mt-1 text-lg font-bold text-gray-900 leading-snug">
                {artist.name}
              </h3>
              <h4 className="mt-1 text-sm font-semibold text-gray-700 leading-snug">
                สมาชิก
              </h4>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {artist.members.map((member, index) => (
                  <span key={member}>
                    {member}
                    {index < artist.members.length - 1 && <br/>}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}