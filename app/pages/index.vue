<template>
    <section class="relative h-[700px] md:h-screen z-10" id="/">
        <!-- Background image -->
        <NuxtImg src="/bg/main.png" alt="main" width="100%" height="100%"
            class="w-full h-full object-cover absolute left-0 top-0 z-0" />

        <!-- Hero text content -->
        <div
            class="pt-[100px] md:pt-[150px] lg:pt-[200px] pl-6 md:pl-[60px] lg:pl-[156px] text-black w-full relative z-20">
            <h2 class="text-lg md:text-2xl xl:text-3xl font-rajdhani font-medium mb-2 text-primary">SHINTA SRIWIJAYA
                & CO</h2>
            <h1 class="text-3xl md:text-5xl xl:text-8xl font-bold font-inter leading-tight xl:max-w-[1115px]">
                Trusted Legal
                Solutions
                for Every
                Industry
            </h1>
        </div>

        <!-- Statue image - positioned absolutely on the right, clipped -->
        <div class="absolute bottom-0 left-0 z-10 h-full overflow-hidden w-full">
            <NuxtImg src="/img/statue.png" class="absolute bottom-0 -right-30 w-[336px] md:w-[400px] xl:w-[600px]" />
        </div>

        <!-- Overlaying white card -->
        <div
            class="absolute -bottom-40 left-0 right-0 z-20 flex justify-center md:justify-start md:pl-[60px] lg:pl-[156px] pb-4 md:pb-8">
            <div
                class="bg-white text-black md:max-w-[260px] lg:max-w-[520px] w-full flex flex-col gap-6 md:gap-4 items-center px-6 py-6 rounded-[24px] mx-4 md:mx-0 relative z-30">
                <div class="flex flex-col items-center justify-center text-center gap-4">
                    <p class="text-base md:text-md lg:text-2xl max-w-[378px] font-semibold leading-relaxed">
                        law firm offering strategic, client-focused legal services in Indonesia
                    </p>

                    <button
                        class="cursor-pointer border-2 border-[#91795C] rounded-full flex items-center gap-1 lg:gap-2 py-1 lg:py-2.5 px-2 lg:px-6 capitalize font-semibold text-[10px] lg:text-base hover:bg-[#91795C] hover:text-white transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5Z"
                                fill="#91795C" stroke="#91795C" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.0002 5.50024C8.41039 5.50024 5.50024 8.41039 5.50024 12.0002C5.50024 15.5901 8.41039 18.5002 12.0002 18.5002C15.5901 18.5002 18.5002 15.5901 18.5002 12.0002C18.5002 8.41039 15.5901 5.50024 12.0002 5.50024ZM4.75024 12.0002C4.75024 7.99618 7.99618 4.75024 12.0002 4.75024C16.0043 4.75024 19.2502 7.99618 19.2502 12.0002C19.2502 16.0043 16.0043 19.2502 12.0002 19.2502C7.99618 19.2502 4.75024 16.0043 4.75024 12.0002Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.75024 12C4.75024 11.7929 4.91814 11.625 5.12524 11.625H18.8752C19.0824 11.625 19.2502 11.7929 19.2502 12C19.2502 12.2071 19.0824 12.375 18.8752 12.375H5.12524C4.91814 12.375 4.75024 12.2071 4.75024 12Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.62533 12C9.67534 14.3152 10.5158 16.5393 12.0002 18.3061C13.4847 16.5393 14.3251 14.3152 14.3752 12C14.3251 9.68473 13.4847 7.46064 12.0002 5.6939C10.5158 7.46064 9.67534 9.68473 9.62533 12ZM12.0002 5.12498L11.7234 4.87207C9.94243 6.8218 8.93033 9.35206 8.87533 11.9922C8.87522 11.9974 8.87522 12.0026 8.87533 12.0078C8.93033 14.6479 9.94243 17.1782 11.7234 19.1279C11.7944 19.2057 11.8949 19.25 12.0002 19.25C12.1056 19.25 12.2061 19.2057 12.2771 19.1279C14.0581 17.1782 15.0702 14.6479 15.1252 12.0078C15.1253 12.0026 15.1253 11.9974 15.1252 11.9922C15.0702 9.35206 14.0581 6.8218 12.2771 4.87207L12.0002 5.12498Z"
                                fill="white" />
                        </svg>
                        Download Our Company Profile
                    </button>
                </div>
                <NuxtImg src="/img/card-1.png" class="w-full border-2 border-[#A08565] rounded-[16px] mt-2" />
                <!-- ipad -->
                <div class="absolute w-[450px] h-[80px] bottom-32 -right-112 hidden md:block lg:hidden">
                    <svg width="455" height="84" viewBox="0 0 455 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <foreignObject x="-22" y="-22" width="498.775" height="127.5">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style="backdrop-filter:blur(11px);clip-path:url(#bgblur_0_15628_16584_clip_path);height:100%;width:100%">
                            </div>
                        </foreignObject>
                        <path data-figma-bg-blur-radius="22"
                            d="M1 1V82.5H452.388L450.713 80.7988L395.382 24.583C380.532 9.49592 360.248 1 339.079 1H1Z"
                            fill="#A08565" fill-opacity="0.8" stroke="#F4EFE9" stroke-width="2" />
                        <defs>
                            <clipPath id="bgblur_0_15628_16584_clip_path" transform="translate(22 22)">
                                <path
                                    d="M1 1V82.5H452.388L450.713 80.7988L395.382 24.583C380.532 9.49592 360.248 1 339.079 1H1Z" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p
                        class="min-w-[328px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white">
                        Helping clients navigate Indonesia’s legal landscape with precision, insight, and integrity.
                    </p>
                </div>
                <!-- desktop -->
                <div class="absolute w-[806px] h-[160px] bottom-33 -right-202 hidden xl:block z-10">
                    <svg width="910" height="167" viewBox="0 0 910 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <foreignObject x="-44" y="-44" width="997.55" height="255">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style="backdrop-filter:blur(22px);clip-path:url(#bgblur_0_15628_14179_clip_path);height:100%;width:100%">
                            </div>
                        </foreignObject>
                        <path data-figma-bg-blur-radius="44"
                            d="M2 2V165H904.774L901.426 161.597L790.764 49.166C761.064 18.9918 720.497 2 678.158 2H2Z"
                            fill="#A08565" fill-opacity="0.8" stroke="#F4EFE9" stroke-width="4" />
                        <defs>
                            <clipPath id="bgblur_0_15628_14179_clip_path" transform="translate(44 44)">
                                <path
                                    d="M2 2V165H904.774L901.426 161.597L790.764 49.166C761.064 18.9918 720.497 2 678.158 2H2Z" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p
                        class="min-w-[656px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-medium">
                        Helping clients navigate Indonesia’s legal landscape with precision, insight, and integrity.
                    </p>

                </div>
            </div>
        </div>
    </section>
    <section id="about" class="bg-primary-50 pt-60 px-6 relative z-0 ">
        <div class="md:gap-10 md:flex lg:max-w-[834px] xl:max-w-[1608px] mx-auto">
            <div class="relative w-full md:w-2/3 xl:w-1/2">
                <motion.div
                    class="static md:absolute md:-right-20  md:top-10 mb-10 md:mb-0 flex flex-col gap-2 xl:-right-90"
                    :initial="{ opacity: 0, x: 300 }" :whileInView="{ opacity: 1, x: 0 }"
                    :inViewOptions="{ once: true, amount: 0.5 }" :transition="{ duration: 0.5 }"
                    :viewport="{ once: true, }">
                    <h1 class="text-primary font-rajdhani border-b-2 border-primary w-fit xl:text-3xl">
                        ABOUT US
                    </h1>

                    <h2 class="font-bold text-xl md:text-2xl md:max-w-[250px] xl:text-6xl xl:max-w-[624px] text-black">
                        Built on Principles. Driven by Results.
                    </h2>
                </motion.div>
                <motion.img src="/img/about-1.png" class="w-full" :initial="{ opacity: 0, x: -300 }"
                    :inViewOptions="{ once: true, amount: 0.5 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ duration: 0.5 }" :viewport="{ once: true }" />
            </div>

            <motion.div :initial="{ opacity: 0, x: 300 }" :inViewOptions="{ once: true, amount: 0.5 }"
                :whileInView="{ opacity: 1, x: 0 }" :transition="{ duration: 0.5 }" :viewport="{ once: true }"
                class="mt-10 md:mt-40 w-full md:w-1/3 xl:w-1/2 text-xs xl:text-2xl xl:mt-60 flex flex-col gap-4 text-secondary-100">
                <p class="text-justify order-1 xl-order-2">
                    We also offer comprehensive dispute resolution services, handling both in-court and out-of-court
                    matters
                    based on the client’s goals. Because every case is unique, we carefully analyze and investigate
                    each
                    situation to deliver effective legal solutions that fit the client’s industry, culture, and
                    business
                    objectives.
                </p>

                <p class="text-justify order-2 xl:order-1">
                    SS&Co. is a boutique Indonesian law firm with a young, dynamic, and creative team dedicated to
                    understanding each client’s needs and protecting their best interests. We help clients start and
                    operate
                    their businesses in Indonesia by choosing the right legal entity, managing licensing, and
                    building a
                    strong legal foundation. Our deep understanding of Indonesia’s business environment,
                    socio-political
                    context, and legal culture enables us to provide practical and strategic guidance tailored to
                    each
                    client.
                </p>
            </motion.div>
        </div>
    </section>

    <section id="why-choose-us" class="bg-primary-50 px-6 pt-40">
        <div class="flex flex-col gap-6 md:flex-row lg:max-w-[834px] xl:max-w-[1608px] mx-auto xl:gap-10">
            <div class="flex flex-col gap-2 w-full md:w-1/2 xl:gap-10">
                <motion.div class="flex flex-col gap-2 mb-6 md:mb-0 xl:gap-8" :initial="{ opacity: 0, x: -300 }"
                    :inViewOptions="{ once: true, amount: 0.5 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ duration: 0.5 }" :viewport="{ once: true }">
                    <h1 class="text-primary font-rajdhani border-b-2 border-primary w-fit xl:text-3xl">
                        WHY CHOOSE US
                    </h1>

                    <h2 class="font-bold text-xl md:text-3xl xl:text-6xl text-black">
                        Strategic legal solutions
                    </h2>
                </motion.div>
                <motion.img src="/img/why-choose-us.png" class="w-full block md:hidden"
                    :initial="{ opacity: 0, x: -300 }" :inViewOptions="{ once: true, amount: 0.5 }"
                    :whileInView="{ opacity: 1, x: 0 }" :transition="{ duration: 0.5 }" :viewport="{ once: true }" />
                <motion.div class="text-xs xl:text-2xl" :initial="{ opacity: 0, x: -300 }"
                    :inViewOptions="{ once: true, amount: 0.5 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ duration: 0.5 }" :viewport="{ once: true }">
                    <p class="text-justify text-secondary-100">
                        We take a value-driven approach by actively communicating and strategizing with our clients
                        to
                        meet
                        their needs and goals. With our growing experience and adaptability in a competitive legal
                        market,
                        we consistently work to deliver strong and desirable results.
                    </p>
                    <br>
                    <p class="text-justify text-secondary-100">
                        We stay focused on each client’s objectives, providing clear and strategic legal solutions
                        while
                        anticipating future risks and challenges. By aligning our work with our internal culture,
                        structure,
                        and processes, we are committed to one goal: ensuring client satisfaction.
                    </p>
                </motion.div>
            </div>
            <motion.img src="/img/why-choose-us.png" class="w-1/2 hidden md:block" :initial="{ opacity: 0, x: 300 }"
                :inViewOptions="{ once: true, amount: 0.5 }" :whileInView="{ opacity: 1, x: 0 }"
                :transition="{ duration: 0.5 }" :viewport="{ once: true }" />
        </div>
    </section>

    <section id="our-services" class="bg-primary-50 px-6 pt-20 ">
        <div class="flex flex-col gap-6 md:flex-row lg:max-w-[834px] xl:max-w-[1608px] mx-auto xl:gap-20">
            <motion.img src="/img/our-service.png" class="w-1/2 hidden md:block xl:w-[60%]"
                :initial="{ opacity: 0, x: -300 }" :inViewOptions="{ once: true, amount: 0.5 }"
                :whileInView="{ opacity: 1, x: 0 }" :transition="{ duration: 0.5 }" :viewport="{ once: true }" />
            <div class="w-full md:w-1/2 xl:w-[40%]">
                <motion.div class="flex flex-col gap-2 xl:gap-8 xl:mb-10" :initial="{ opacity: 0, x: 300 }"
                    :inViewOptions="{ once: true, amount: 0.5 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ duration: 0.5 }" :viewport="{ once: true }">
                    <h1 class="text-primary font-rajdhani border-b-2 border-primary w-fit xl:text-3xl">
                        OUR SERVICE
                    </h1>
                    <h2 class="font-bold text-xl xl:text-6xl text-black">
                        Practice Areas
                    </h2>
                </motion.div>
                <motion.img src="/img/our-service.png" class="w-full block md:hidden" :initial="{ opacity: 0, x: -300 }"
                    :inViewOptions="{ once: true, amount: 0.5 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ duration: 0.5 }" :viewport="{ once: true }" />
                <motion.div class="flex flex-col gap-2 text-xs xl:text-2xl xl:gap-10" :initial="{ opacity: 0, x: 300 }"
                    :inViewOptions="{ once: true, amount: 0.5 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ duration: 0.5 }" :viewport="{ once: true }">
                    <p class="text-justify text-secondary-100">
                        We stay focused on each client’s objectives, providing clear and strategic legal solutions
                        while
                        anticipating future risks and challenges. By aligning our work with our internal culture,
                        structure,
                        and processes, we are committed to one goal: ensuring client satisfaction.
                    </p>
                    <div class="grid grid-rows-4 text-secondary-100 text-sm grid-flow-col gap-x-1">
                        <div v-for="(item, index) in practiceAreas" :key="index" @click="selectedIndex = index" :class="[
                            'flex items-start gap-2 cursor-pointer transition-colors text-xs xl:text-2xl',
                        ]">
                            <span class="font-medium">{{ String.fromCharCode(97 + index) }}.</span>
                            <span>{{ item }}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

    </section>

    <section id="our-team" class="bg-primary-50 px-6 pt-20">
        <div class="lg:max-w-[834px] xl:max-w-[1608px] mx-auto">
            <motion.div :initial="{ opacity: 0, x: -300 }" :inViewOptions="{ once: true, amount: 0.5 }"
                :whileInView="{ opacity: 1, x: 0 }" :transition="{ duration: 0.5 }" :viewport="{ once: true }">
                <h1 class="text-primary font-rajdhani border-b-2 border-primary w-fit xl:text-3xl">
                    OUR TEAM
                </h1>
                <br>

                <h2 class="font-bold text-xl xl:text-6xl text-black">
                    Our Team of Legal Experts
                </h2>
                <br>
                <p class="text-justify text-secondary-100 text-xs xl:text-2xl">
                    Led by Shinta Sriwijaya, our legal team brings a wealth of experience,
                    cross-industry insights, and dedication to every client we serve.
                </p>
                <br>
            </motion.div>

            <div class="flex flex-col">
                <div v-for="team in teams" :key="team.title"
                    class="flex flex-col xl:gap-10 gap-3 md:gap-6 mb-3 md:mb-6 xl:mb-10">
                    <motion.h3 :initial="{ opacity: 0, x: -300 }" :inViewOptions="{ once: true, amount: 0.5 }"
                        :whileInView="{ opacity: 1, x: 0 }" :transition="{ duration: 0.5 }" :viewport="{ once: true }"
                        class="text-lg  bg-[#A08565] text-white px-4 py-2 rounded-t-xl rounded-br-xl font-rajdhani xl:text-3xl">
                        {{ team.title }}
                    </motion.h3>
                    <motion.div class="flex gap-4" :initial="{ opacity: 0, x: 300 }"
                        :inViewOptions="{ once: true, amount: 0.5 }" :whileInView="{ opacity: 1, x: 0 }"
                        :transition="{ duration: 0.5 }" :viewport="{ once: true }">
                        <div v-for="member in team.members" :key="member.name"
                            class="relative h-[222px] xl:h-[522px] w-[164px] md:w-[169px] md:h-[230px] xl:w-[384px] group">
                            <NuxtImg :src="member.image_card"
                                class="z-30 w-[153px] md:w-[160px] xl:w-[360px] absolute saturate-0 group-hover:saturate-100 transition-all duration-300" />
                            <div
                                class="absolute right-0 bottom-0 z-20 bg-white w-[152px] h-[166px] md:w-[160px] md:h-[173.5px] xl:w-[360px] xl:h-[392px] rounded-xl p-2 xl:p-4 flex items-end">
                                <div class="flex flex-col justify-between w-full xl:gap-20 gap-2">
                                    <div class="flex flex-col">
                                        <span class="font-bold text-black text-[10px] xl:text-[22px]">
                                            {{ member.name }}
                                        </span>
                                        <span class="text-secondary-100 text-[10px] xl:text-[18px]">
                                            {{ team.title }}
                                        </span>
                                    </div>
                                    <div class="flex justify-end">
                                        <NuxtLink :to="`/homepage/${member.slug}`"
                                            class="text-xs text-secondary-100 text-[11px] capitalize flex gap-2 xl:text-md items-center">
                                            see more
                                            <UIcon name="i-lucide-arrow-right"
                                                class="size-4 border border-secondary-100 rounded-full p-px"
                                                mode="svg" />
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>

    <motion.section id="newsletter" class="bg-primary-50 px-6 pt-20" :initial="{ opacity: 0, y: 300 }"
        :inViewOptions="{ once: true, amount: 0.5 }" :whileInView="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }"
        :viewport="{ once: true }">
        <div class="lg:max-w-[834px] xl:max-w-[1608px] mx-auto flex flex-col gap-6 xl:gap-10">
            <div>
                <h1 class="text-primary font-rajdhani border-b-2 border-primary w-fit uppercase mb-4 xl:text-3xl">
                    news letter
                </h1>

                <div class="flex justify-between items-center">
                    <h2 class="font-bold text-xl xl:text-6xl text-black">
                        Our Latest Newsletter
                    </h2>
                    <NuxtLink to="/newsletter"
                        class="bg-primary-90 text-white flex items-center p-2 gap-1 rounded-full text-xs xl:text-xl xl:py-3 xl:px-6 xl:gap-3">
                        Read More
                        <div class="bg-white rounded-full p-px xl:p-1">
                            <UIcon name="i-lucide-arrow-right" class="size-3 text-primary-90 xl:size-4" mode="svg" />
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <!-- card container -->
            <div class="grid grid-cols-2 gap-2 md:grid-cols-3 justify-around">
                <!-- newsletter card -->
                <div class="bg-white rounded-xl xl:w-[480px] md:w-[225px] w-full" v-for="newsletter in newsletters"
                    :key="newsletter.id">
                    <NuxtImg :src="newsletter.image || '/img/newsletter-card-1.png'"
                        class="w-full rounded-t-xl aspect-480/320" />
                    <div class="p-2 flex flex-col gap-2 xl:gap-4 xl:p-12">
                        <span class="font-bold text-[10px] xl:text-3xl">{{ newsletter.title }}</span>
                        <div class="text-gray-500 text-[8px] xl:text-2xl line-clamp-2" v-html="newsletter.content">
                        </div>
                        <NuxtLink :to="`/newsletter/${newsletter.slug}`"
                            class="text-[8px] flex gap-2 items-center xl:text-2xl">
                            Learn More
                            <!-- <UIcon name="i-lucide-arrow-right" class="size-3 md:size-6 border border-secondary-100 rounded-full p-px" mode="svg" /> -->

                            <button class="border border-primary-110 rounded-full p-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="#75624C" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15 8L19 12L15 16" stroke="#75624C" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </NuxtLink>

                    </div>

                </div>
            </div>
        </div>
    </motion.section>

    <section id="contact-us" class="bg-primary-50 px-6 pt-20 h-[600px] md:h-[550px] xl:h-auto xl:pb-32">
        <div class="relative lg:max-w-[834px] xl:max-w-[1608px] mx-auto">
            <motion.img src="/img/contact-us.png" class="relative z-0 w-full md:w-[500px] xl:w-[1007px] xl:h-[740px]"
                :initial="{ opacity: 0, x: -300 }" :inViewOptions="{ once: true, amount: 0.5 }"
                :whileInView="{ opacity: 1, x: 0 }" :transition="{ duration: 0.5 }" :viewport="{ once: true }" />

            <!-- contact us card form -->
            <motion.div :initial="{ opacity: 0, x: 300 }" :inViewOptions="{ once: true, amount: 0.5 }"
                :whileInView="{ opacity: 1, x: 0 }" :transition="{ duration: 0.5 }" :viewport="{ once: true }"
                class="p-4 bg-primary-50 w-[90%] md:w-[450px] absolute z-10 -bottom-44 md:top-30 right-0 border-2 border-white rounded-xl shadow-2xl backdrop-blur-sm flex flex-col gap-2 md:h-fit xl:w-[921px] xl:h-[680px] xl:p-14 xl:gap-8">
                <h2 class="font-bold text-md xl:text-6xl text-black">Contact Us</h2>
                <p class="text-[10px] text-gray-400 xl:text-2xl">
                    We offer legal help for everyone, providing clear and reliable solutions for businesses and
                    individuals
                </p>

                <form action="" class="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Company"
                        class="bg-white rounded-md p-2 text-[10px] xl:text-2xl xl:px-6 xl:py-4">
                    <input type="email" placeholder="Your Email Address"
                        class="bg-white rounded-md p-2 text-[10px] xl:text-2xl xl:px-6 xl:py-4">
                    <textarea placeholder="Question"
                        class="col-span-2 bg-white rounded-md p-2 text-[10px] xl:text-2xl xl:px-6 xl:py-4" rows="4" />
                    <button type="button"
                        class="bg-primary-90 text-white rounded-full p-2 text-[10px] xl:text-2xl xl:px-6 xl:py-4 flex gap-2 items-center w-fit font-bold xl:mt-10 xl:gap-4 cursor-pointer">
                        <span>
                            Send Question
                        </span>
                        <div class="bg-white rounded-full p-px xl:p-2">
                            <UIcon name="i-lucide-arrow-right" class="size-3 xl:size-5 text-primary" mode="svg" />
                        </div>
                    </button>
                </form>
            </motion.div>

            <!-- card contact information -->
            <motion.div :initial="{ opacity: 0, x: -300 }" :inViewOptions="{ once: true, amount: 0.5 }"
                :whileInView="{ opacity: 1, x: 0 }" :transition="{ duration: 0.5 }" :viewport="{ once: true }"
                class="bg-[#1D202A99] backdrop-blur-md text-white absolute -bottom-10 hidden md:flex rounded-b-xl rounded-tr-xl justify-center flex-col p-4 gap-4 xl:w-[500px] xl:h-[288px] xl:px-12 xl:py-16 xl:gap-8">
                <div class="flex gap-2 items-center xl:gap-8">
                    <div class="bg-white rounded-full p-2 xl:p-4">
                        <svg class="size-4 xl:size-8" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.665 11.2788V13.2788C14.6657 13.4644 14.6277 13.6482 14.5533 13.8183C14.479 13.9884 14.3699 14.1412 14.233 14.2667C14.0962 14.3922 13.9347 14.4878 13.7588 14.5472C13.5829 14.6067 13.3966 14.6288 13.2117 14.6121C11.1602 14.3892 9.18966 13.6882 7.45833 12.5654C5.84755 11.5419 4.48189 10.1762 3.45833 8.56543C2.33165 6.82623 1.63049 4.84609 1.41166 2.78543C1.395 2.60107 1.41691 2.41527 1.47599 2.23985C1.53508 2.06442 1.63004 1.90322 1.75484 1.76651C1.87964 1.6298 2.03153 1.52057 2.20086 1.44578C2.37018 1.37099 2.55322 1.33227 2.73833 1.3321H4.73833C5.06187 1.32891 5.37552 1.44348 5.62084 1.65445C5.86615 1.86542 6.02638 2.15839 6.07166 2.47876C6.15608 3.11881 6.31263 3.74725 6.53833 4.3521C6.62802 4.59071 6.64744 4.85004 6.59427 5.09935C6.5411 5.34866 6.41757 5.5775 6.23833 5.75876L5.39166 6.60543C6.3407 8.27446 7.72263 9.65639 9.39166 10.6054L10.2383 9.75876C10.4196 9.57952 10.6484 9.456 10.8977 9.40283C11.1471 9.34966 11.4064 9.36907 11.645 9.45876C12.2498 9.68446 12.8783 9.84101 13.5183 9.92543C13.8422 9.97112 14.1379 10.1342 14.3493 10.3838C14.5608 10.6333 14.6731 10.9518 14.665 11.2788Z"
                                fill="#A08565" />
                        </svg>
                    </div>

                    <span class="text-xs xl:text-2xl">
                        021 5748 508
                    </span>
                </div>
                <div class="flex gap-2 items-center xl:gap-8">
                    <div class="bg-white rounded-full p-2 xl:p-4">
                        <svg class="size-4 xl:size-8" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8 15.3346C8 15.3346 14 11.3346 14 6.66797C14 5.07667 13.3679 3.55055 12.2426 2.42533C11.1174 1.30011 9.5913 0.667969 8 0.667969C6.4087 0.667969 4.88258 1.30011 3.75736 2.42533C2.63214 3.55055 2 5.07667 2 6.66797C2 11.3346 8 15.3346 8 15.3346ZM10 6.66797C10 7.77254 9.10457 8.66797 8 8.66797C6.89543 8.66797 6 7.77254 6 6.66797C6 5.5634 6.89543 4.66797 8 4.66797C9.10457 4.66797 10 5.5634 10 6.66797Z"
                                fill="#A08565" />
                        </svg>
                    </div>
                    <span class="text-xs xl:text-2xl">
                        Contact@sscolaw.com
                    </span>
                </div>
            </motion.div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { motion } from "motion-v"

const practiceAreas = [
    'Dispute Resolution and Litigation',
    'Employment',
    'Commercial Contracts',
    'General Corporate and M&A',
    'Intellectual Property',
    'Compliance and Investigation',
    'Family Law',
    'Media and Entertainment'
]

const { data: teams } = await useFetch('/api/teams', { server: false, lazy: true })
const { data: newsletters } = await useFetch('/api/newsletters/top', { server: false, lazy: true })

const selectedIndex = ref(1) // Default to "Employment" (index 1) to match the image
</script>
