import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import { SelectedPage } from "../../shared/types";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
    const innputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
    const { register, trigger, formState: { errors } } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();

        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* Header */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duaration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Build strength and confidence with expert guidance. From focused 
                        training to dynamic workouts, we help you push limits, stay motivated, 
                        and achieve real results. Your fitness journey starts here.
                    </p>
                </motion.div>

                {/* FROM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 3xl:basis-2/4 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duaration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/54cdb89fe61ccf9682a802d7915cd4bd"
                            method="POST"
                        >
                            {/* NAME INPUT FIELD */}
                            <input
                                className={innputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />

                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required!"}
                                    {errors.name.type === "maxLength" && "Max length is 100 chars!"}
                                </p>
                            )}

                            {/* EMAIL INPUT FIELD */}
                            <input
                                className={innputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                })}
                            />

                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required!"}
                                    {errors.email.type === "pattern" && "Invalid email address!"}
                                </p>
                            )}

                            {/* MESSAGE INPUT FIELD */}
                            <textarea
                                className={innputStyles}
                                rows={4}
                                cols={50}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            ></textarea>

                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "This field is required!"}
                                    {errors.message.type === "maxLength" && "Max length is 2000 chars!"}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white cursor-pointer"
                            >SUBMIT</button>
                        </form>
                    </motion.div>

                    <motion.div
                        className="relative mt-16 basis-2/5 3xl:basis-1/4 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-[url('./assets/EvolveText.png')]">
                            <img
                                className="w-full"
                                alt="contact-us-page-graphic"
                                src={ContactUsPageGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs;