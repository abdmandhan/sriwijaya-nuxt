<template>
    <div class="h-full mb-10">
        <!-- breadcrumb -->
        <div
            class="bg-secondary h-[38px] xl:h-[48px] text-xs px-4 py-3 text-gray-500 md:text-sm xl:text-base max-w-[1608px] mx-auto">
            Homepage / Shinta Sriwijaya
        </div>
        <div class="h-[639px] md:h-[280px] xl:h-[400px] bg-cover overflow-hidden relative
            bg-center bg-no-repeat bg-[url(/bg/homepage-mobile.png)] md:bg-[url(/bg/homepage.png)]
            ">
            <div class="flex max-w-[1608px] mx-auto h-full">
                <NuxtImg src="/img/shinta.png"
                    class="absolute md:static bottom-0 left-0 md:translate-0 w-[382px] md:w-auto scale-150 md:scale-100" />
                <div class="text-white w-full h-full flex md:items-center px-6 md:px-0 py-10 md:py-0">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-md md:text-sm xl:text-2xl">Managing Partner</h2>
                        <h1 class="text-2xl md:text-4xl xl:text-5xl font-bold">Shinta Sriwijaya, S.H., LL.M.</h1>
                        <div class="flex flex-col text-md md:text-sm xl:text-xl gap-0 xl:gap-2">
                            <span class="flex gap-2 items-center">
                                <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.68914 19.512C2.88729 19.4263 2.13775 19.0728 1.56165 18.5085C0.98555 17.9442 0.616551 17.2022 0.514286 16.4023C0.257143 14.3366 0 12.2023 0 10.0149C0 8.40514 0.140571 6.82286 0.315428 5.27829C0.324046 5.20266 0.35273 5.13071 0.398507 5.0699C0.444285 5.00908 0.50549 4.96162 0.575783 4.93242C0.646076 4.90322 0.722898 4.89334 0.798291 4.90382C0.873684 4.9143 0.944903 4.94474 1.00457 4.992L8.31943 10.7606C9.11318 11.3862 10.0944 11.7265 11.1051 11.7265C12.1158 11.7265 13.0971 11.3862 13.8909 10.7606L21.2074 4.992C21.2671 4.94519 21.3382 4.91512 21.4133 4.9049C21.4885 4.89467 21.565 4.90464 21.635 4.9338C21.705 4.96296 21.766 5.01024 21.8117 5.07079C21.8573 5.13134 21.886 5.20296 21.8949 5.27829C22.0697 6.82286 22.2103 8.40514 22.2103 10.0149C22.2103 12.2023 21.9531 14.3383 21.696 16.4023C21.5937 17.2022 21.2247 17.9442 20.6486 18.5085C20.0725 19.0728 19.323 19.4263 18.5211 19.512L18.2914 19.536C15.9703 19.7777 13.5669 20.0297 11.1051 20.0297C8.64343 20.0297 6.24 19.7777 3.91886 19.536L3.68914 19.512ZM21.0137 1.93886C21.0736 2.02287 21.0981 2.12701 21.0821 2.22892C21.0661 2.33084 21.0108 2.42241 20.928 2.484L12.564 9.07714C12.1485 9.40529 11.6346 9.58378 11.1051 9.58378C10.5757 9.58378 10.0618 9.40529 9.64629 9.07714L1.28229 2.484C1.19952 2.42241 1.14419 2.33084 1.12816 2.22892C1.11214 2.12701 1.1367 2.02287 1.19657 1.93886C1.49153 1.54269 1.86522 1.21179 2.29416 0.966936C2.7231 0.722079 3.19804 0.568554 3.68914 0.516L3.91886 0.493714C6.24 0.250286 8.64343 0 11.1051 0C13.5669 0 15.9703 0.250286 18.2914 0.493714L18.5211 0.517714C19.0121 0.57006 19.487 0.72332 19.9159 0.967878C20.3448 1.21244 20.7186 1.54301 21.0137 1.93886Z"
                                        fill="white" />
                                </svg>

                                Email : <span class="border-b border-white">shinta.sriwijaya@ssco-law.com</span>
                            </span>
                            <span class="flex gap-2 items-center">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.76 0H2.4C1.0752 0 0 1.0752 0 2.4V17.76C0 19.0848 1.0752 20.16 2.4 20.16H17.76C19.0848 20.16 20.16 19.0848 20.16 17.76V2.4C20.16 1.0752 19.0848 0 17.76 0ZM6.24 7.68V16.8H3.36V7.68H6.24ZM3.36 5.0256C3.36 4.3536 3.936 3.84 4.8 3.84C5.664 3.84 6.2064 4.3536 6.24 5.0256C6.24 5.6976 5.7024 6.24 4.8 6.24C3.936 6.24 3.36 5.6976 3.36 5.0256ZM16.8 16.8H13.92C13.92 16.8 13.92 12.3552 13.92 12C13.92 11.04 13.44 10.08 12.24 10.0608H12.2016C11.04 10.0608 10.56 11.0496 10.56 12C10.56 12.4368 10.56 16.8 10.56 16.8H7.68V7.68H10.56V8.9088C10.56 8.9088 11.4864 7.68 13.3488 7.68C15.2544 7.68 16.8 8.9904 16.8 11.6448V16.8Z"
                                        fill="white" />
                                </svg>
                                Linkedin : <span class="border-b border-white">Shinta Sriwijaya</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-12 max-w-[1608px] mx-auto">
            <div class="flex flex-col gap-6 px-4 py-6 col-span-12 md:col-span-2 xl:col-span-3 md:py-10">
                <div class="flex flex-col gap-2">
                    <span class="text-md font-bold xl:text-2xl">Education:</span>
                    <div class="text-sm flex flex-col gap-2 xl:text-xl">
                        <span>University of Leeds, Master of Law (LL.M.)</span>
                        <span>Universitas Brawijaya, Bachelor of Law (S.H.)</span>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-md font-bold xl:text-2xl">Bar Admission:</span>
                    <div class="text-sm xl:text-xl">
                        <span>Dewan Pengacara Nasional Indonesia (DPNI)</span>
                    </div>
                </div>
            </div>

            <div class="px-4 gap-2 col-span-12 md:col-span-10 xl:col-span-9 md:py-10">
                <span class="font-bold text-2xl">Overview</span>
                <p>
                    Shinta is committed to providing solutions for the Clients’ best interest with high ethical work and
                    professionalism. She takes the time needed to systematically solves client’s issues thoroughly and
                    anticipate further challenges. Effective communication, listening skill, clear and concise in
                    delivering
                    solution are Shinta’s strength in foster greater trust with clients.

                    Shinta’s area of expertise includes commercial dispute settlement, land dispute, tort and breaching
                    contract, general corporate & commercial transactions, labor, family law (marriage, divorce,
                    domestic
                    violence, and other matters regarding family relationships), trade, criminal law and litigation.

                    In addition, Shinta is an ambitious young woman who desires for further development through
                    systematic
                    study and professional experience. She is also the member of non-profit organization; Indonesia
                    Youth
                    Diplomacy for her socio-politics awareness and social contribution to the nation.

                    Notable Representative Experience:
                    Project leader representing PT Telekomunikasi Selular for Recollection of B2B Customers Receivable
                    Billing via Private Lawyer and has successfully collected 67% of the total receivables outstanding.

                    Assisted PT Telekomunikasi Selular collaborate with the Junior Attorney General for Civil and State
                    Administration (Jaksa Agung Muda Perdata dan Tata Usaha Negara) in issuing legal opinion for
                    following
                    projects:
                </p>
                <ol>
                    <li>Highspeed Railway Jakarta Bandung in choosing the agreement scheme.</li>
                    <li>Cooperation to resell telecommunication services (Telkomsel Orbit service)</li>
                    <li>Netflix regarding the applicable law.</li>
                </ol>
                <p>
                    Represented PT Telekomunikasi Selular in land dispute in two district courts as stated below:
                </p>
                <ol>
                    <li>
                        Metro District Court, Lampung.
                    </li>
                    <li>Gedong Tataan District Court, Lampung.</li>
                </ol>

                <p>Assisted a client for fraud investment vs Malaysian asset management company with a total
                    compensation of
                    USD 3,400,000; further providing legal opinion for cross border dispute settlement and assisting
                    client
                    to report the investment advisor to the Greater Jakarta Metropolitan Regional Police (POLDA Metro
                    Jaya)
                    for fraud and embezzlement.</p>

                <p>
                    Represented Lembaga Pengelola Dana Bergulir Koperasi Usaha Mikro Kecil dan Menengah (LPDB-KUMKM)
                    under
                    the Ministry of Co-operatives in negotiating against co-operatives and Micro and Small Enterprises
                    (MSE)
                    who failed to repay its debts in order to repay the APBN funds and support state refund and improve
                    the
                    non-performing loan, in six court proceedings in Indonesia as below:
                </p>

                <ol>
                    <li>Siak Sri Indrapura District Court, Riau.</li>
                    <li>Palalawan District Court, Riau.</li>
                    <li>Pekanbaru District Court, Pekanbaru.</li>
                    <li>Bengkulu District Court, Bengkulu.</li>
                    <li>Kupang District Court, East Nusa Tenggara.</li>
                    <li>South Jakarta District Court, DKI Jakarta.</li>
                </ol>

                <p>
                    Represented PT Dwikarya Anugerah Sejati with regard of TORT dispute against PT Bank OCBC NISP Tbk.
                </p>
            </div>
        </div>
    </div>
</template>