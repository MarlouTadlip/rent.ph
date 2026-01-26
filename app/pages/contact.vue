<script setup lang="ts"></script>
<template>
    <div class="w-screen min-h-screen">
        <ClientOnly>
            <navbar />
        </ClientOnly>
        <div class="container mx-auto px-10 pt-30 pb-20">
                <div class="flex flex-row p-5">
                    <div class=" w-1/2">
                        <p class="text-7xl w-3/4">Get in-</p>
                        <p class="text-7xl w-3/4 mb-5">touch with us</p>
                        <p class="text-gray-500 mb-5 w-5/6">Found a property you love? Have a question about a lease? Get in touch with us today. Our agents are standing by to provide the details you need to make your next move with confidence.</p>
                        <label for="" class="text-sm text-gray-500">Contact Number:</label>
                        <p class="text-lg">+639178886298 (Globe)</p>
                        <p class="text-lg">(032) 254-8900 (Landline)</p>

                        <br />
                        <label for="" class="text-sm text-gray-500 mt-5">Addess:</label>
                        <p class="text-lg">Rent.ph Headquarters</p>
                        <p class="text-lg">Aznar Road Cebu City, Philippines, 6000</p>

                        <br />
                        <label for="" class="text-sm text-gray-500 mt-5">Mail:</label>
                        <p class="text-lg">official.rentph@gmail.com</p>
                        
                        <br />
                        <label for="" class="text-sm text-gray-500 mt-5">Follow Us:</label>
                        <div class="flex flex-row gap-2">
                            <Icon name="lucide:facebook" class="size-8 text-blue-500"/>
                            <Icon name="lucide:instagram" class="size-8 text-pink-500"/>
                            <Icon name="ic:baseline-whatsapp" class="size-8 text-green-500"/>
                        </div>
                    </div>
                        <div class="flex flex-col shadow-lg border border-gray-500/10 rounded-3xl p-15 w-1/2 gap-5">
                            <div class="flex justify-between">
                                <Input
                                    name="keyword"
                                    class="w-19/40 py-2 pl-3 border border-dark-100 rounded-md text-sm h-10.5"
                                    placeholder="Name"
                                />
                                <Input
                                    name="keyword"
                                    class="w-19/40 py-2 pl-3 border border-dark-100 rounded-md text-sm h-10.5"
                                    placeholder="Email"
                                />
                            </div>
                            <div class="flex justify-between">
                                <Input
                                    name="keyword"
                                    class="w-19/40 py-2 pl-3 border border-dark-100 rounded-md text-sm h-10.5"
                                    placeholder="Phone"
                                />
                                <Input
                                    name="keyword"
                                    class="w-19/40 py-2 pl-3 border border-dark-100 rounded-md text-sm h-10.5"
                                    placeholder="Sbject"
                                />
                            </div>
                            <textarea name="keyword" id="" rows="4" autoresize class="w-full py-2 pl-3 border border-dark-100 rounded-md text-sm" placeholder="Your Message" />
                        </div>
                </div>
        </div>
        <ClientOnly>
            <Footer />
        </ClientOnly>
    </div>
</template>

