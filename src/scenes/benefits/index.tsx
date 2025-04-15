import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
            "Our gym is equipped with the latest in fitness technology, premium training equipment to elevate your workouts.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            "Train in an environment designed for excellence. Our cutting-edge equipment, modern studios, and thoughtfully designed spaces.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
            "Train with the best in the industry. Our certified coaches bring years of experience and knowledge to every session",
    },
];
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duaration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="lg:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) =>
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    )}
                </motion.div>

                {/* GRAPHICS & DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 lg:flex">
                    {/* GRAPHIC */}
                    <img className="mx-auto" src={BenefitsPageGraphic} alt="BenefitsPageGraphic" />

                    {/* DESCRPTION */}
                    <div>
                        <div className="relative">
                            <div className="before:absolute before:-top-20 beofre:-left-20 before:z-[1] before:content-[url('./assets/AbstractWaves.png')]" >
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duaration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duaration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <p className="my-5">
                                Be part of a fitness revolution that's transforming lives every
                                single day. With state-of-the-art equipment, a wide variety of classes,
                                and expert trainers who are passionate about your progress, our members
                                are seeing real results and loving every moment of it. Don’t just dream
                                about a healthier, stronger version of yourself come build it with us.
                                Join millions who’ve already taken the first step toward a better lifestyle.
                            </p>
                            <p className="mb-5">
                                From high-intensity interval training to calming yoga sessions,
                                there’s something for everyone, no matter your age, experience,
                                or fitness level. Our supportive community and motivating environment
                                empower you to push past limits and unlock your full potential.
                            </p>
                        </motion.div>

                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-[url('./assets/Sparkles.png')]">
                                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits;