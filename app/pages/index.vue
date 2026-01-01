<template>
    <main>
        <section class="relative h-[700px] md:h-screen z-0" id="/">
            <!-- Background image -->
            <NuxtImg src="/bg/main.png" alt="main" width="100%" height="100%"
                class="w-full h-full object-cover absolute left-0 top-0 z-0" />

            <!-- Hero text content -->
            <div class="pt-[100px] md:pt-[200px] pl-6 md:pl-[156px] text-black w-full relative z-20">
                <h2 class="text-lg md:text-2xl font-rajdhani font-medium mb-2 text-primary">SHINTA SRIWIJAYA & CO</h2>
                <h1 class="text-3xl md:text-5xl font-bold font-inter leading-tight">
                    Trusted Legal<br>
                    Solutions<br>
                    for Every<br>
                    Industry
                </h1>
            </div>

            <!-- Statue image - positioned absolutely on the right, clipped -->
            <div class="absolute bottom-0 left-0 z-10 h-full overflow-hidden w-full">
                <NuxtImg src="/img/statue.png" class="absolute bottom-0 -right-30 w-[336px]" />
            </div>

            <!-- Overlaying white card -->
            <div
                class="absolute -bottom-40 left-0 right-0 z-20 flex justify-center md:justify-start md:pl-[156px] pb-4 md:pb-8">
                <div
                    class="bg-white text-black max-w-[520px] w-full flex flex-col gap-6 md:gap-4 items-center px-6 py-6 rounded-[24px] mx-4 md:mx-0">
                    <div class="flex flex-col items-center justify-center text-center gap-4">
                        <p class="text-base md:text-2xl max-w-[378px] font-semibold leading-relaxed">
                            law firm offering strategic, client-focused legal services in Indonesia
                        </p>

                        <button
                            class="cursor-pointer border-2 border-[#91795C] rounded-full flex items-center gap-2 py-2.5 px-6 capitalize font-semibold text-sm md:text-base hover:bg-[#91795C] hover:text-white transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
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
                </div>
            </div>
        </section>
        <section id="about" class="bg-primary-50 pt-60 px-6">
            <div>
                <h1 class="text-primary font-rajdhani border-b-2 border-primary w-fit">
                    ABOUT US
                </h1>
                <br>

                <h2 class="font-bold text-xl">
                    Built on Principles. Driven by Results.
                </h2>
                <br>
                <NuxtImg src="/img/about-1.png" class="w-full" />

                <br>

                <p class="text-justify">
                    We also offer comprehensive dispute resolution services, handling both in-court and out-of-court
                    matters
                    based on the client’s goals. Because every case is unique, we carefully analyze and investigate each
                    situation to deliver effective legal solutions that fit the client’s industry, culture, and business
                    objectives.
                </p>
                <br>

                <p class="text-justify">
                    SS&Co. is a boutique Indonesian law firm with a young, dynamic, and creative team dedicated to
                    understanding each client’s needs and protecting their best interests. We help clients start and
                    operate
                    their businesses in Indonesia by choosing the right legal entity, managing licensing, and building a
                    strong legal foundation. Our deep understanding of Indonesia’s business environment, socio-political
                    context, and legal culture enables us to provide practical and strategic guidance tailored to each
                    client.
                </p>
            </div>
        </section>

        <section id="why-choose-us" class="bg-primary-50 px-6 pt-20">
            <div>
                <h1 class="text-primary font-rajdhani border-b-2 border-primary w-fit">
                    WHY CHOOSE US
                </h1>
                <br>

                <h2 class="font-bold text-xl">
                    Strategic legal solutions
                </h2>
                <br>
                <NuxtImg src="/img/why-choose-us.png" class="w-full" />
                <p class="text-justify text-secondary-100">
                    We take a value-driven approach by actively communicating and strategizing with our clients to meet
                    their needs and goals. With our growing experience and adaptability in a competitive legal market,
                    we consistently work to deliver strong and desirable results.
                </p>
                <br>
                <p class="text-justify text-secondary-100">
                    We stay focused on each client’s objectives, providing clear and strategic legal solutions while
                    anticipating future risks and challenges. By aligning our work with our internal culture, structure,
                    and processes, we are committed to one goal: ensuring client satisfaction.
                </p>
            </div>
        </section>

        <section id="our-services" class="bg-primary-50 px-6 pt-20">
            <div>
                <h1 class="text-primary font-rajdhani border-b-2 border-primary w-fit">
                    OUR SERVICE
                </h1>
                <br>

                <h2 class="font-bold text-xl">
                    Practice Areas
                </h2>
                <br>
                <NuxtImg src="/img/our-service.png" class="w-full" />
                <p class="text-justify text-secondary-100">
                    We stay focused on each client’s objectives, providing clear and strategic legal solutions while
                    anticipating future risks and challenges. By aligning our work with our internal culture, structure,
                    and processes, we are committed to one goal: ensuring client satisfaction.
                </p>
                <br>
                <div class="grid grid-rows-4 text-secondary-100 text-sm grid-flow-col gap-x-1">
                    <div v-for="(item, index) in practiceAreas" :key="index" @click="selectedIndex = index" :class="[
                        'flex items-start gap-2 cursor-pointer transition-colors text-xs',
                    ]">
                        <span class="font-medium">{{ String.fromCharCode(97 + index) }}.</span>
                        <span>{{ item }}</span>
                    </div>
                </div>

            </div>
        </section>

        <section id="our-team" class="bg-primary-50 px-6 pt-20">
            <h1 class="text-primary font-rajdhani border-b-2 border-primary w-fit">
                OUR TEAM
            </h1>
            <br>

            <h2 class="font-bold text-xl">
                Our Team of Legal Experts
            </h2>
            <br>
            <p class="text-justify text-secondary-100">
                Led by Shinta Sriwijaya, our legal team brings a wealth of experience,
                cross-industry insights, and dedication to every client we serve.
            </p>
            <br>

            <div class="flex flex-col gap-42">
                <div v-for="team in teams" :key="team.title" class="flex flex-col gap-10">
                    <h3 class="text-lg  bg-[#A08565] text-white px-4 py-2 rounded-t-xl rounded-br-xl font-rajdhani">
                        {{ team.title }}
                    </h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div v-for="member in team.members" :key="member.name" class="relative">
                            <NuxtImg :src="member.image" class="w-full z-10 relative" />
                            <div
                                class="bg-white absolute left-2 top-16 z-0 h-50 rounded-xl p-2 min-w-[170px] flex items-end w-full">
                                <div class="flex flex-col justify-between w-full gap-10">
                                    <div class="flex flex-col">
                                        <span class="font-bold text-xs text-black text-[11px]">{{ member.name }}</span>
                                        <span class="text-xs text-secondary-100 text-[11px]">{{ team.title }}</span>
                                    </div>
                                    <div class="flex justify-end">
                                        <NuxtLink to="#"
                                            class="text-xs text-secondary-100 text-[11px] capitalize flex gap-2">
                                            see more
                                            <UIcon name="i-lucide-arrow-right"
                                                class="size-4 border border-secondary-100 rounded-full p-px"
                                                mode="svg" />
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            news letter
        </section>

        <section>contact us</section>
    </main>
</template>

<script setup>
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

const teams = [
    {
        title: 'Managing Partner',
        members: [
            {
                name: 'Shinta Sriwijaya, S.H., LL.M.',
                image: '/img/team-1.png',
            }
        ]
    },
    {
        title: "Senior Associates",
        members: [
            {
                name: 'Siti Habibah, S.H., M.H.',
                image: '/img/team-2.png',
            },
            {
                name: 'Yohana Tri Meiliyanti',
                image: '/img/team-3.png'
            }
        ]
    },
    {
        title: 'OF-Counsel',
        members: [
            {
                name: 'Bagus Rahman, S.H., M.H.',
                image: '/img/team-4.png'
            }
        ]
    },
    {
        title: 'Supporting Team',
        members: [
            {
                name: 'Shaqina Dhiara P, S.IKom.',
                image: 'img/team-5.png'
            }
        ]
    },
]

const selectedIndex = ref(1) // Default to "Employment" (index 1) to match the image
</script>
