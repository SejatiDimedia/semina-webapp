import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-headline">
          Accelerate Your <span className="text-gradient-blue">Future</span>{" "}
          <br className="d-none d-lg-block" />
          by Learning from <span className="text-gradient-pink">The Best</span>
        </div>
        <p className="hero-paragraph">
          Temukan ribuan seminar dan kelas interaktif yang dikurasi khusus untuk{" "}
          <br className="d-none d-lg-block" />
          membantu meningkatkan keahlian profesional dan memperluas jaringan Anda.
        </p>
        <a href="#grow-today" className="btn-green">
          Browse Now
        </a>
      </div>

      <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center gap-5 header-image">
        <img src="/images/1.png" alt="semina" className="img-1" />
        <img src="/images/2.png" alt="semina" className="img-2" />
        <img src="/images/1.png" alt="semina" className="img-1" />
      </div>
    </>
  );
}
