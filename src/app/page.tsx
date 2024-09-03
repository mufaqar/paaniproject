import Banner from "@/components/home/banner";
import Counter from "@/components/home/counter";
import GridBox from "@/components/home/gridBox";
import ReportBox from "@/components/home/reportBox";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className={`md:py-10 pt-5 pb-5 bg-[url('/images/counter-1.webp')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/60`}>
        <div className="container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-5 items-center">
          <Counter
            icon="/images/well.webp"
            value="20,204"
            title="Wells Built"
          />
          <Counter
            icon="/images/meal.webp"
            value="2.5"
            title="Million Meals Provided"
          />
          <Counter
            icon="/images/globe.webp"
            value="5"
            title="Active Projects"
          />
          <Counter
            icon="/images/heart.webp"
            value="1.7"
            title="Million Lives Changed"
          />
        </div>
      </section>
      <section className={`md:py-[170px] pt-20 pb-20 bg-[url('/images/eid-bg.webp')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/60`}>
        <div className="container mx-auto px-4">
          <h2 className="md:text-[39px] md:leading-normal text-2xl font-bold text-white text-center mb-4">
            2024 Eid al-Adha
          </h2>
          <p className="text-base font-medium text-white text-center mb-5">
            Please donate – we are on the ground fundraising for Qurbani now.
          </p>
          <Link href="#" className='text-base text-white font-semibold bg-primary px-4 py-2.5 rounded flex w-fit mx-auto'>
            Donate Now
          </Link>
        </div>
      </section>
      <section className={`md:py-10 pt-5 pb-5 bg-footerBg`}>
        <div>
          <p className="text-sm font-bold text-white text-center mb-3">
            OUR IMPACT
          </p>
          <h2 className="md:text-[26px] md:leading-normal text-2xl font-bold text-white text-center">
            Latest Reports
          </h2>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-5 items-center mt-5">
          <ReportBox
            img="pdf1.webp"
            title=" Water Wells"
          />
          <ReportBox
            img="pdf2.webp"
            title="Flood Relief"
          />
          <ReportBox
            img="pdf3.webp"
            title="Ramadan"
          />
        </div>
      </section>
      <section className="md:py-[70px] pt-10 pb-10 bg-[url('/images/philosophy.webp')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/60">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Our Philosophy
          </h2>
          <p className="text-base font-bold text-white text-center">
            Our philosophy is twofold: transparency and sustainability. Transparency to our donors on how we optimize their donations. And a promise of sustainable interventions to the communities we serve.
          </p>
        </div>
      </section>
      <section className="md:py-[70px] pt-10 pb-10 bg-black">
        <div >
          <h2 className="md:text-[26px] md:leading-normal text-2xl font-bold text-white text-center">
            Our Impact on UN Sustainable Development Goals
          </h2>
          <div className="container mx-auto px-4 grid md:grid-cols-5 grid-cols-1 md:gap-16 gap-5 items-center mt-5">
            <Image src="/images/goal1.png" alt="goal-img" width={480} height={480} />
            <Image src="/images/goal2.png" alt="goal-img" width={480} height={480} />
            <Image src="/images/goal3.png" alt="goal-img" width={480} height={480} />
            <Image src="/images/goal4.png" alt="goal-img" width={480} height={480} />
            <Image src="/images/goal5.png" alt="goal-img" width={480} height={480} />
          </div>
        </div>
      </section>
      <section className={`md:py-10 pt-5 pb-5 bg-footerBg`}>
        <div className="container mx-auto px-4 mt-5">
          <GridBox
            img="/images/smiling.webp"
            subtitle="MAKE A DIFFERENCE"
            title="Start Your Own Campaign"
            content="Want to launch your own fundraising campaign for a clean water well in honor of a loved one or simply to give back? Start fundraising now through Launchgood and leave a lasting impact on underserved communities in Pakistan."
            btnTxt="Launch Campaign"
            link="#"
            Cstm_class="md:flex-row"
          />
          <GridBox
            img="/images/truck.webp"
            subtitle="CORPORATE MATCH GIVING"
            title="2x Your Donation"
            content="Did you know that your employer can match your donation? Use our search engine and see if your employer will double your generous donation without any added expense on you."
            btnTxt="Get Matched"
            link="#"
            Cstm_class="md:flex-row-reverse"
          />
        </div>
      </section>
      <section className="md:pt-[206px] md:pb-[116px] pt-10 pb-10 bg-[url('/images/cta.webp')] bg-fixed bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/60">
        <div className="container max-w-[780px] mx-auto px-4">
          <h2 className="md:text-[38px] md:leading-normal text-2xl font-bold text-white text-center mb-4">
            The Ripple Effect Starts with You
          </h2>
          <p className="text-base font-normal text-white text-center">
            As we fight Pakistan’s water crisis, let us utilize our resources to maximize the positive impact we can have on impoverished and underserved communities. Take the first step today with the Paani Project.
          </p>
          <div className="flex flex-row gap-4 w-fit mx-auto mt-5">
            <Link href="#" className='text-base text-white font-semibold bg-primary px-4 py-2.5 rounded inline-flex'>
              Volunteer
            </Link>
            <Link href="#" className='text-base text-white font-semibold bg-primary px-4 py-2.5 rounded inline-flex'>
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
