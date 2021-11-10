<template>
  <div class="container mx-auto px-2">
    <section class="grid md:grid-cols-3 mt-12">

        <main class="col-span-2 relative md:mr-2">
        <h1 class="text-3xl font-bold text-gray-800">{{ movie.title }}</h1>
        <div class="flex mt-2 my-2 items-center gap-4">
            <!-- eslint-disable-next-line -->
            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xmlns:v="https://vecta.io/nano"><path d="M390 300h50v50h-50zm0 90h50v50h-50zm-85 0h50v50h-50zm0-90h50v50h-50zm-85 0h50v50h-50zm0 90h50v50h-50zm-170 0h50v50H50zm85 0h50v50h-50zm0-90h50v50h-50zm-85 0h50v50H50zm0-90h50v50H50zm85 0h50v50h-50zm85 0h50v50h-50zm85 0h50v50h-50zm85 0h50v50h-50z" fill="#afb6bb"/><path d="M480 170v300c0 5.498-4.502 10-10 10H20c-5.498 0-10-4.502-10-10V170h470zm-40 270v-50h-50v50h50zm0-90v-50h-50v50h50zm0-90v-50h-50v50h50zm-85 180v-50h-50v50h50zm0-90v-50h-50v50h50zm0-90v-50h-50v50h50zm-85 180v-50h-50v50h50zm0-90v-50h-50v50h50zm0-90v-50h-50v50h50zm-85 180v-50h-50v50h50zm0-90v-50h-50v50h50zm0-90v-50h-50v50h50zm-85 180v-50H50v50h50zm0-90v-50H50v50h50zm0-90v-50H50v50h50z" fill="#fff"/><path d="M220 80c0 5.498 4.502 10 10 10h30c5.498 0 10-4.502 10-10V50h80v30c0 5.498 4.502 10 10 10h30c5.498 0 10-4.502 10-10V50h70c5.498 0 10 4.502 10 10v110H10V60c0-5.498 4.502-10 10-10h70v30c0 5.498 4.502 10 10 10h30c5.498 0 10-4.502 10-10V50h80v30z" fill="#dd352e"/><g fill="#afb6bb"><use xlink:href="#B"/><use xlink:href="#B" x="130"/><use xlink:href="#B" x="260"/></g><g fill="#231f20"><path d="M470 40h-60V20c0-11.028-8.972-20-20-20h-30c-11.028 0-20 8.972-20 20v20h-60V20c0-11.028-8.972-20-20-20h-30c-11.028 0-20 8.972-20 20v20h-60V20c0-11.028-8.972-20-20-20h-30C88.972 0 80 8.972 80 20v20H20C8.972 40 0 48.972 0 60v410c0 11.028 8.972 20 20 20h450c11.028 0 20-8.972 20-20V60c0-11.028-8.972-20-20-20zM360 20h30l.001 60H360V20zm-130 0h30l.001 60H230V20zm-130 0h30l.001 60H100V20zM80 60v20c0 11.028 8.972 20 20 20h30c11.028 0 20-8.972 20-20V60h60v20c0 11.028 8.972 20 20 20h30c11.028 0 20-8.972 20-20V60h60v20c0 11.028 8.972 20 20 20h30c11.028 0 20-8.972 20-20V60h60v100h-20v-55h-20v55H60v-55H40v55H20V60h60zM20 470V180h450v290H20zm210-350h30v20h-30zm50 0h30v20h-30zm50 0h30v20h-30zm-150 0h30v20h-30zm-50 0h30v20h-30z"/><use xlink:href="#C"/><use xlink:href="#C" x="85"/><use xlink:href="#C" x="170"/><use xlink:href="#D"/><use xlink:href="#C" x="-85"/><use xlink:href="#C" y="90"/><use xlink:href="#C" x="85" y="90"/><use xlink:href="#C" x="170" y="90"/><use xlink:href="#D" y="90"/><use xlink:href="#C" x="-85" y="90"/><use xlink:href="#C" y="180"/><use xlink:href="#C" x="85" y="180"/><use xlink:href="#C" x="170" y="180"/><use xlink:href="#D" y="180"/><use xlink:href="#C" x="-85" y="180"/></g><defs ><path id="B" d="M140 50v30c0 5.498-4.502 10-10 10h-30c-5.498 0-10-4.502-10-10V50 20c0-5.498 4.502-10 10-10h30c5.498 0 10 4.502 10 10v30z"/><path id="C" d="M270 200h-50a10 10 0 0 0-10 10v50a10 10 0 0 0 10 10h50a10 10 0 0 0 10-10v-50a10 10 0 0 0-10-10zm-10 50h-30v-30h30v30z"/><path id="D" d="M100 200H50a10 10 0 0 0-10 10v50a10 10 0 0 0 10 10h50a10 10 0 0 0 10-10v-50a10 10 0 0 0-10-10zm-10 50H60v-30h30v30z"/></defs></svg>
            <div class="text-gray-500">
                Released on {{ $dayjs(movie.showTime).format('LL') }}
            </div>
        </div>
         <div class="flex mt-2 my-2 items-center gap-4 md:hidden">
            <!-- eslint-disable-next-line -->
            <svg class="w-8 h-8"
            viewBox="0 0 512 512"
            xmlns:v="https://vecta.io/nano">
              <!-- eslint-disable-next-line -->
              <path d="M256.001 10.667c111.929 0 202.665 90.737 202.665 202.668 0 56.931-23.488 108.373-61.287 145.186 3.455 4.427 7.221 8.693 11.292 12.765 14.638 14.636 31.752 25.278 49.996 31.944-17.614 8.186-37.244 12.769-57.95 12.769-23.508 0-45.639-5.898-65-16.289-24.465 10.482-51.412 16.289-79.715 16.289-111.929 0-202.666-90.737-202.666-202.664S144.071 10.667 256.001 10.667z" fill="#ff9600"/><path d="M185.187 231.386l-.046-.047c-19.568-19.567-19.568-51.294 0-70.86s51.294-19.567 70.86 0c19.566-19.567 51.292-19.567 70.86 0s19.567 51.293 0 70.86l-.046.047-70.814 70.813-70.814-70.813z" fill="#ff2c47"/>
              <!-- eslint-disable-next-line -->
              <path d="M462.327 393.212c-17.404-6.359-32.918-16.275-46.114-29.469a128.71 128.71 0 0 1-4.438-4.666c37.194-39.651 57.558-91.025 57.558-145.743C469.332 95.702 373.632 0 256.001 0S42.668 95.702 42.668 213.335s95.701 213.331 213.333 213.331c27.414 0 54.045-5.115 79.235-15.211 20.25 9.965 42.778 15.211 65.48 15.211 21.786 0 42.795-4.63 62.446-13.762a10.67 10.67 0 0 0-.835-19.692zm-61.611 12.12c-20.914 0-41.647-5.194-59.956-15.021-1.571-.843-3.306-1.267-5.044-1.267a10.66 10.66 0 0 0-4.201.862c-23.894 10.236-49.3 15.426-75.515 15.426-105.869 0-192-86.13-192-191.997S150.131 21.333 256 21.333s191.999 86.131 191.999 192.002c0 52.232-20.621 101.079-58.063 137.544-3.898 3.796-4.315 9.916-.966 14.204a150.17 150.17 0 0 0 12.158 13.745c8.97 8.969 18.86 16.641 29.573 22.954-9.739 2.361-19.76 3.55-29.985 3.55zm-144.715-92.468c2.73 0 5.459-1.042 7.542-3.124l70.814-70.813.085-.087c11.453-11.473 17.759-26.718 17.759-42.932 0-16.234-6.321-31.494-17.799-42.972s-26.74-17.799-42.973-17.799c-12.893 0-25.172 3.987-35.429 11.378-10.257-7.391-22.536-11.378-35.428-11.378-16.234 0-31.494 6.321-42.973 17.799s-17.802 26.738-17.802 42.972 6.322 31.494 17.762 42.934c.027.029.055.058.083.085l70.814 70.813a10.64 10.64 0 0 0 7.545 3.124zm-63.318-89.068c-7.449-7.449-11.552-17.351-11.552-27.888a39.17 39.17 0 0 1 11.551-27.887 39.18 39.18 0 0 1 27.889-11.551c10.534 0 20.437 4.102 27.886 11.551a10.67 10.67 0 0 0 15.084 0c7.449-7.449 17.353-11.551 27.887-11.551a39.18 39.18 0 0 1 27.888 11.551c7.449 7.449 11.551 17.352 11.551 27.887s-4.102 20.439-11.551 27.888a5.36 5.36 0 0 1-.081.082L256 287.113l-63.233-63.232c-.027-.029-.055-.056-.084-.085zm220.764 20.11c-5.698-1.5-11.533 1.9-13.032 7.597C383.17 316.956 323.785 362.669 256 362.669a10.67 10.67 0 0 0-10.667 10.667A10.67 10.67 0 0 0 256 384.003c77.463 0 145.332-52.249 165.043-127.063a10.67 10.67 0 0 0-7.596-13.034zm1.959-13.047l.457.01a10.67 10.67 0 0 0 10.65-10.218l.155-7.315a10.67 10.67 0 0 0-10.667-10.667 10.67 10.67 0 0 0-10.667 10.667l-.135 6.418c-.249 5.884 4.321 10.857 10.207 11.105zM266.667 53.335A10.67 10.67 0 0 0 256 42.668c-77.464 0-145.332 52.249-165.043 127.063a10.67 10.67 0 0 0 7.597 13.033 10.64 10.64 0 0 0 2.725.355c4.726 0 9.046-3.167 10.307-7.952C128.831 109.714 188.215 64.001 256 64.001a10.67 10.67 0 0 0 10.667-10.666zM96.594 195.807a10.68 10.68 0 0 0-11.105 10.209 175.55 175.55 0 0 0-.155 7.318 10.67 10.67 0 0 0 10.667 10.667 10.67 10.67 0 0 0 10.667-10.667l.135-6.423c.249-5.884-4.322-10.856-10.209-11.104zm266.073 294.86l-213.332-.004a10.67 10.67 0 0 0-10.667 10.667 10.67 10.67 0 0 0 10.667 10.667l213.332.003a10.67 10.67 0 0 0 10.667-10.667 10.67 10.67 0 0 0-10.667-10.666z" fill="#000003"/>
            </svg>
            <div class="text-gray-500">
                {{ movie.like }} Likes
            </div>
        </div>

        <div class="flex justify-center border">
            <img :src="movie.image" class="cursor-pointer" :alt="`${movie.title} Image`"/>
        </div>
        <blockquote class="italic font-semibold font-serif text-gray-800 border-l-4 border-gray-900 my-3 pl-2 ml-8">
            <!-- eslint-disable -->
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit explicabo at expedita nam assumenda totam voluptas quibusdam repudiandae. Culpa mollitia dolor illo dolorum ipsum expedita ea nemo quasi soluta hic.

        </blockquote>
        <article>
            <section>
                <h2 class="text-2xl mb-2 font-semibold font-serif">Critical Analysis Of The Novel Charlotte's Web</h2>

                <p class="my-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
                    Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
                </p>

                <p class="my-4">

                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
                  Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
              </p>
            </section>

            <section>
                <h3 class="text-2xl mb-2 font-semibold font-serif">Overview Of History Of The Algerian Revolution</h3>

                <p class="my-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
                    Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
                </p>

                <p class="my-4">

                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
                  Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
              </p>
            </section>

            <section>
                <h3 class="text-2xl mb-2 font-semibold font-serif">Positive And Negative Impacts Of The Modern Revolution</h3>

                <p class="my-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
                    Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
                </p>

                <p class="my-4">

                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
                  Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
              </p>
              <!-- eslint-enable -->
            </section>
        </article>
        </main>

        <aside class="hidden md:block col-span-2 md:col-span-1 mt-4 md:mt-0">
            <div id="author-card" class="flex flex-col items-center my-8">
                <p class="text-3xl font-semibold border-l-4 my-8 border-indigo-700 pl-2 text-gray-700 self-start">Likes</p>
                <div >
                    <svg class="h-20 w-20"
                    viewBox="0 0 512 512"
                    xmlns:v="https://vecta.io/nano">
                      <!-- eslint-disable-next-line -->
                      <path d="M256.001 10.667c111.929 0 202.665 90.737 202.665 202.668 0 56.931-23.488 108.373-61.287 145.186 3.455 4.427 7.221 8.693 11.292 12.765 14.638 14.636 31.752 25.278 49.996 31.944-17.614 8.186-37.244 12.769-57.95 12.769-23.508 0-45.639-5.898-65-16.289-24.465 10.482-51.412 16.289-79.715 16.289-111.929 0-202.666-90.737-202.666-202.664S144.071 10.667 256.001 10.667z" fill="#ff9600"/><path d="M185.187 231.386l-.046-.047c-19.568-19.567-19.568-51.294 0-70.86s51.294-19.567 70.86 0c19.566-19.567 51.292-19.567 70.86 0s19.567 51.293 0 70.86l-.046.047-70.814 70.813-70.814-70.813z" fill="#ff2c47"/>
                      <!-- eslint-disable-next-line -->
                      <path d="M462.327 393.212c-17.404-6.359-32.918-16.275-46.114-29.469a128.71 128.71 0 0 1-4.438-4.666c37.194-39.651 57.558-91.025 57.558-145.743C469.332 95.702 373.632 0 256.001 0S42.668 95.702 42.668 213.335s95.701 213.331 213.333 213.331c27.414 0 54.045-5.115 79.235-15.211 20.25 9.965 42.778 15.211 65.48 15.211 21.786 0 42.795-4.63 62.446-13.762a10.67 10.67 0 0 0-.835-19.692zm-61.611 12.12c-20.914 0-41.647-5.194-59.956-15.021-1.571-.843-3.306-1.267-5.044-1.267a10.66 10.66 0 0 0-4.201.862c-23.894 10.236-49.3 15.426-75.515 15.426-105.869 0-192-86.13-192-191.997S150.131 21.333 256 21.333s191.999 86.131 191.999 192.002c0 52.232-20.621 101.079-58.063 137.544-3.898 3.796-4.315 9.916-.966 14.204a150.17 150.17 0 0 0 12.158 13.745c8.97 8.969 18.86 16.641 29.573 22.954-9.739 2.361-19.76 3.55-29.985 3.55zm-144.715-92.468c2.73 0 5.459-1.042 7.542-3.124l70.814-70.813.085-.087c11.453-11.473 17.759-26.718 17.759-42.932 0-16.234-6.321-31.494-17.799-42.972s-26.74-17.799-42.973-17.799c-12.893 0-25.172 3.987-35.429 11.378-10.257-7.391-22.536-11.378-35.428-11.378-16.234 0-31.494 6.321-42.973 17.799s-17.802 26.738-17.802 42.972 6.322 31.494 17.762 42.934c.027.029.055.058.083.085l70.814 70.813a10.64 10.64 0 0 0 7.545 3.124zm-63.318-89.068c-7.449-7.449-11.552-17.351-11.552-27.888a39.17 39.17 0 0 1 11.551-27.887 39.18 39.18 0 0 1 27.889-11.551c10.534 0 20.437 4.102 27.886 11.551a10.67 10.67 0 0 0 15.084 0c7.449-7.449 17.353-11.551 27.887-11.551a39.18 39.18 0 0 1 27.888 11.551c7.449 7.449 11.551 17.352 11.551 27.887s-4.102 20.439-11.551 27.888a5.36 5.36 0 0 1-.081.082L256 287.113l-63.233-63.232c-.027-.029-.055-.056-.084-.085zm220.764 20.11c-5.698-1.5-11.533 1.9-13.032 7.597C383.17 316.956 323.785 362.669 256 362.669a10.67 10.67 0 0 0-10.667 10.667A10.67 10.67 0 0 0 256 384.003c77.463 0 145.332-52.249 165.043-127.063a10.67 10.67 0 0 0-7.596-13.034zm1.959-13.047l.457.01a10.67 10.67 0 0 0 10.65-10.218l.155-7.315a10.67 10.67 0 0 0-10.667-10.667 10.67 10.67 0 0 0-10.667 10.667l-.135 6.418c-.249 5.884 4.321 10.857 10.207 11.105zM266.667 53.335A10.67 10.67 0 0 0 256 42.668c-77.464 0-145.332 52.249-165.043 127.063a10.67 10.67 0 0 0 7.597 13.033 10.64 10.64 0 0 0 2.725.355c4.726 0 9.046-3.167 10.307-7.952C128.831 109.714 188.215 64.001 256 64.001a10.67 10.67 0 0 0 10.667-10.666zM96.594 195.807a10.68 10.68 0 0 0-11.105 10.209 175.55 175.55 0 0 0-.155 7.318 10.67 10.67 0 0 0 10.667 10.667 10.67 10.67 0 0 0 10.667-10.667l.135-6.423c.249-5.884-4.322-10.856-10.209-11.104zm266.073 294.86l-213.332-.004a10.67 10.67 0 0 0-10.667 10.667 10.67 10.67 0 0 0 10.667 10.667l213.332.003a10.67 10.67 0 0 0 10.667-10.667 10.67 10.67 0 0 0-10.667-10.666z" fill="#000003"/>
                    </svg>
                </div>
                <div>
                    <p class="text-2xl text-center font-medium my-4 text-pink-500">{{ movie.like }}</p>
                </div>
            </div>
        </aside>
      </section>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  async asyncData({ params, $api }) {
    const { data } = await $api.get(`/${params.slug}`);
    return { movie: data };
  },
  head: {
    title: 'Kino - Movie Detail',
  },
};
</script>
