<script setup lang="ts">
import DesignTestimonials from './ui/design-testimonials/DesignTestimonials.vue'
const testimonials = [
  {
    quote: "We are incredibly grateful to Filipino Homes for providing this extraordinary opportunity for us to learn additional expertise from Harvard Leadership Techniques graduats and to enjoy the journey of success with team MINDANAO.",
    author: "Rica Grate",
    role: "Rent Manager ",
    company: "Family Estate",
    image: "/rica-removebg-preview.png"
  },
  {
    quote: "As a property owner, I appreciate the efficiency and professionalism of RentPH. They found great tenants in record time.",
    author: "Juan Dela Cruz",
    role: "Property Manager",
    company: "Cruz Realty",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan"
  },
  {
    quote: "The best rental platform I've used so far. Highly recommended for anyone looking for quality listings.",
    author: "Elena Reyes",
    role: "Tenant",
    company: "Modern Living",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  }
]
</script>
<template>
    <div class="px-12 pt-80">
        <div class="flex flex-col w-full">
            <h1 class="text-4xl font-bold">What our clients say about us</h1>
            <p class="uppercase pt-4 dark:text-gray-500 ">Testimonials</p>
        </div>
        <div>
            <DesignTestimonials :testimonials="testimonials" />
        </div>

    </div>
</template>