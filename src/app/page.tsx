import Banner from "@/components/home/banner";
import Counter from "@/components/home/counter";
import GridBox from "@/components/home/gridBox";
import Image from "next/image";
import Link from "next/link";
import { ReliefData } from '@/const/relief'
import Cta from "@/components/home/cta";

export default function Home() {
  return (
    <main>
      <Banner
        subtitle="Transparent • Fast • Trustworthy"
        title="Paani Project"
        content="A global nonprofit fueled by young volunteers to supply clean water & foster empowerment across Pakistan."
        video="https://www.youtube.com/embed/8pvSZ_JSUhM" />
      <section className="py-8">
        <div className="container mx-auto px-4 bg-white md:py-20 py-16 rounded-[100px]">
          <div className="max-w-[920px] mx-auto flex md:flex-row flex-col md:gap-12 gap-5 items-center justify-between">
            <div className="max-w-[410px]">
              <h3 className="subTitle">
                Our Philosophy
              </h3>
              <h2 className="md:text-5xl text-3xl font-bold text-primary mt-5">
                Our Impact on UN Sustainable Development Goals
              </h2>
            </div>
            <div className="max-w-[410px]">
              <p className="text-lg font-normal text-primary">
                Our philosophy is twofold: transparency and sustainability. Transparency to our donors on how we optimize their donations. And a promise of sustainable interventions to the communities we serve.
              </p>
            </div>
          </div>
          <div className="max-w-[920px] mx-auto md:mt-16 mt-9 grid md:grid-cols-5 grid-cols-1 gap-5">
            <Image src="/images/goal1.png" alt="goal" width={480} height={480} />
            <Image src="/images/goal2.png" alt="goal" width={480} height={480} />
            <Image src="/images/goal3.png" alt="goal" width={480} height={480} />
            <Image src="/images/goal4.png" alt="goal" width={480} height={480} />
            <Image src="/images/goal5.png" alt="goal" width={480} height={480} />
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4 bg-secondryBg md:py-20 py-16 rounded-[100px]">
          <div className="max-w-[920px] mx-auto flex md:flex-row flex-col md:gap-12 gap-5 items-center justify-between">
            <div className="max-w-[410px]">
              <h3 className="subTitle">
                OUR IMPACT
              </h3>
              <h2 className="md:text-5xl text-3xl font-bold text-primary mt-5">
                Latest Reports
              </h2>
            </div>
            <div className="max-w-[410px]">
              <p className="text-lg font-normal text-primary">
                Our mission is to not only provide temporary relief where we can, but to work towards building permanent solutions against the most complex problems
              </p>
            </div>
          </div>
          <div className="max-w-[920px] mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-28 gap-5 md:mt-16 mt-9">
            {ReliefData?.map((item, idx) => {
              return <div key={idx} className="flex flex-col gap-5">
                <h3 className="md:text-[22px] md:leading-[28px] text-xl font-bold text-primary">
                  {item?.title}
                </h3>
                <div className="rounded-xl">
                  <Image src={item?.img} alt="img" width={1236} height={594} className="w-full h-full object-cover rounded-xl" />
                </div>
                <Link href={item?.link} className="text-lg font-normal text-primary underline hover:no-underline transition-all duration-300">
                  Download
                </Link>
              </div>
            })}
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4 bg-navlink md:py-20 py-16 rounded-[100px]">
          <div className="max-w-[920px] mx-auto flex md:flex-row flex-col md:gap-12 gap-5 items-start justify-between">
            <div className="max-w-[410px]">
              <h2 className="md:text-5xl text-3xl font-bold text-white mt-5">
                2024 Eid al-Adha
              </h2>
            </div>
            <div className="max-w-[410px]">
              <p className="text-lg font-normal text-white">
                Please donate – we are on the ground fundraising for Qurbani now.
              </p>
              <Link href="#" className='primaryBtn hover:bg-white inline-flex mt-5'>
                Donate Now
              </Link>
            </div>
          </div>
          <div className="max-w-[920px] mx-auto md:mt-16 mt-9 grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-5">
            <Counter value={"20,204"} title={"Wells Built"} icon={"/images/well.webp"} />
            <Counter value={"2.5"} title={"Million Meals Provided"} icon={"/images/meal.webp"} />
            <Counter value={"5"} title={"Active Projects"} icon={"/images/globe.webp"} />
            <Counter value={"1.7"} title={"Million Lives Changed"} icon={"/images/heart.webp"} />
          </div>
        </div>
      </section>
      <section className="py-8">
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
      </section>
      <Cta />
    </main>
  );
}
