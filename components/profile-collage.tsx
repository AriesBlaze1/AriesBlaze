import Image from 'next/image';

export function ProfileCollage() {
  return (
    <div className="profile-collage" role="group" aria-label="Portraits of John Oyekunle">
      <figure className="profile-print profile-print-one">
        <span className="profile-print-image">
          <Image src="/images/ariesblaze-portrait-01.jpeg" alt="John Oyekunle in a black and white portrait" fill sizes="(max-width: 760px) 43vw, 250px" />
        </span>
        <figcaption>John Oyekunle</figcaption>
      </figure>
      <figure className="profile-print profile-print-two">
        <span className="profile-print-image">
          <Image src="/images/ariesblaze-portrait-02.jpeg" alt="John Oyekunle, software developer" fill sizes="(max-width: 760px) 43vw, 250px" />
        </span>
        <figcaption>AriesBlaze</figcaption>
      </figure>
    </div>
  );
}
