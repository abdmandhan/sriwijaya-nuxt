<template>
    <main>
        <section class="relative h-[800px] md:h-screen z-0 overflow-x-hidden" id="/">
            <!-- Background image -->
            <NuxtImg src="/bg/main.png" alt="main" width="100%" height="100%"
                class="w-full h-screen object-cover absolute left-0 top-0 z-0" />

            <!-- Hero text content -->
            <div class="pt-[100px] md:pt-[200px] pl-6 md:pl-[156px] text-black w-full relative z-20">
                <h2 class="text-lg md:text-2xl font-bold font-rajdhani mb-2">SHINTA SRIWIJAYA & CO</h2>
                <h1 class="text-3xl md:text-5xl font-bold font-inter leading-tight">
                    Trusted Legal<br>
                    Solutions<br>
                    for Every<br>
                    Industry
                </h1>
            </div>

            <!-- Statue image - positioned absolutely on the right, clipped -->
            <div class="absolute bottom-0 -right-[120px] md:right-0 z-10 h-full max-w-[336px] overflow-hidden">
                <NuxtImg src="/img/statue.png" class="h-full object-contain max-w-[336px]" />
            </div>

            <!-- Overlaying white card -->
            <div
                class="absolute bottom-0 left-0 right-0 z-20 flex justify-center md:justify-start md:pl-[156px] pb-4 md:pb-8">
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
            <!-- <div class="absolute bottom-0 w-full">
                <div
                    class="bg-white text-black max-w-[520px] flex flex-col gap-4 items-center px-6 py-6 rounded-[24px] absolute aspect-520/656 justify-between -bottom-20 z-20">
                    <div class="flex flex-col items-center justify-center text-center gap-4">
                        <p class="text-3xl max-w-[378px]">
                            law firm offering strategic, client-focused legal services in Indonesia
                        </p>

                        <button class="cursor-pointer border border-primary">
                            download our company profile
                        </button>
                    </div>
                    <NuxtImg src="/img/card-1.png" class="w-full border border-[#A08565] rounded-[16px]" />
                </div>
                <div class="w-full absolute bottom-0 left-[420px] max-w-[896px] z-10">
                    <NuxtImg src="/bg/main-bottom.png" />
                    <p class="absolute bottom-13 left-12 text-2xl text-white">
                        Helping clients navigate Indonesia’s legal landscape with
                        <br>
                        precision, insight, and integrity.
                    </p>
                </div>
            </div> -->
        </section>
        <section id="about" class="h-[1245px] bg-red-400">
            <div>
                <h1>
                    ABOUT US
                </h1>

                <p>
                    Built on Principles. Driven by Results.
                </p>

                <p>
                    SS&Co. is a boutique Indonesian law firm with a young, dynamic, and creative team dedicated to
                    understanding each client’s needs and protecting their best interests. We help clients start and
                    operate
                    their businesses in Indonesia by choosing the right legal entity, managing licensing, and building a
                    strong legal foundation. Our deep understanding of Indonesia’s business environment, socio-political
                    context, and legal culture enables us to provide practical and strategic guidance tailored to each
                    client.
                </p>

                <p>
                    We also offer comprehensive dispute resolution services, handling both in-court and out-of-court
                    matters
                    based on the client’s goals. Because every case is unique, we carefully analyze and investigate each
                    situation to deliver effective legal solutions that fit the client’s industry, culture, and business
                    objectives.
                </p>
            </div>
        </section>

        <section id="why-choose-us" class="h-[960px] bg-blue-400">
            <div>
                <h1>
                    WHY CHOOSE US
                </h1>
            </div>
        </section>

        <section id="our-services" class="h-[1000px] bg-green-400">
            our service
        </section>

        <section id="our-team" class="h-[1000px] bg-yellow-400">
            our team
        </section>

        <section>
            news letter
        </section>

        <section>contact us</section>
    </main>
</template>
