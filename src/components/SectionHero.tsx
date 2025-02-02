import { Container } from "./Container";

import ImageAppleStore from "@/assets/btn-apple-store.svg";
import ImagePlayStore from "@/assets/btn-google-play.svg";
import Arrow from "@/assets/arrow-explorer.svg";
import WomanImage from "@/assets/woman.png";

import Image from "next/image";

export function SectionHero() {
  return (
    <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover overflow-hidden">
      <Container>
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-white text-7xl font-bold mb-4 ">
            Tenha seu banco na palma da sua mão.
          </h1>
          <p className="text-white text-xl max-w-[408px] mb-8">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito pra você.
          </p>
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={ImageAppleStore} alt="Apple store" />
            </button>
            <button>
              <Image src={ImagePlayStore} alt="Google play store" />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image 
            src={Arrow} 
            alt="Arrow down" />
            <span className="text-white text-sm font-bold">Continue explorando</span>
          </button>
        </div>
        <Image 
        src={WomanImage}
        alt="Woman Image"
        className="mr-[-41px]"
        />
      </Container>
    </section>
  );
}
