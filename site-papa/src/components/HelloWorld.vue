<template>
  <header>
    <img src="../assets/img/20240418_180723.jpg" alt="">
  </header>
  <main class="mx-auto">
    <!-- header -->
    <section>
      <div class="max-w-screen-xl lg:grid lg:grid-cols-2 flex flex-col-reverse gap-8 w-full mx-auto">
        <div>
          <img src="../assets/img/20240418_180650.jpg" alt="">
        </div>
        <div class="flex flex-col gap-16 mx-4">
          <h1>Deschrevel Freddy BV</h1>
          <p>
              <strong>Draai- en freesbedrijf</strong> Deschrevel Freddy BV is een bedrijf dat zich specialiseert in het draaien en frezen van metalen en kunststoffen. 
              Wij zijn gevestigd in het Belgische Vichte en hebben al <strong>meer dan 10 jaar ervaring</strong> in de sector. 
              Onze klanten zijn voornamelijk bedrijven uit de machinebouw en de landbouw. 
              Wij werken zowel voor grote bedrijven als voor particulieren. 
              U kan bij ons terecht voor zowel <strong>kleine als grote series.</strong> 
          </p>
        </div>
      </div>
    </section>

    <!-- machine park -->
    <section>
      <div class="max-w-screen-xl flex gap-16 flex-col w-full mx-auto">
        <h1 class="col-span-2 mx-4">Machine park</h1>
  
        <!-- POS -->
        <div class="flex flex-col lg:justify-between gap-8">
          <div class="m-4">
            <h2>POS</h2>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <ul>
                  <li>
                    <p>x-axis (mm)</p>
                  </li>
                  <li>
                    <p>y-axis (mm)</p>
                  </li>
                  <li>
                    <p>z-axis (mm)</p>
                  </li>
                  <li>
                    <p>Speed (rpm)</p>
                  </li>
                  <li>
                    <p>Tool changer</p>
                  </li>
                  <li>
                    <p>Control System</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul class="">
                  <li>
                    <p>2.050</p>
                  </li>
                  <li>
                    <p>1.150</p>
                  </li>
                  <li>
                    <p>780</p>
                  </li>
                  <li>
                    <p>10.000 - 18.000</p>
                  </li>
                  <li>
                    <p>40-fold, 60-fold</p>
                  </li>
                  <li>
                    <p>Heidenhain 640, Siemens One</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img class="lg:w-1/2 w-full drop-shadow-lg" src="../assets/img/POS.jpg" alt="">
        </div>
  
        <!-- Mori -->
        <div class="flex flex-row-reverse justify-between gap-8">
          <div class="m-4">
            <h2>Mori</h2>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <p>x-axis (mm)</p>
                <p>y-axis (mm)</p>
                <p>z-axis (mm)</p>
                <p>Speed (rpm)</p>
                <p>Tool changer</p>
                <p>Control System</p>
              </div>
              <div>
                <p>2.050</p>
                <p>1.150</p>
                <p>780</p>
                <p>10.000 - 18.000</p>
                <p>40-fold, 60-fold</p>
                <p>Heidenhain 640, Siemens One</p>
              </div>
            </div>
          </div>
          <img class="w-1/2 drop-shadow-lg" src="../assets/img/MORI.jpg" alt="">
        </div>
  
        <!-- Mazak -->
        <div class="flex flex-row justify-between gap-8">
          <div class="m-4">
            <h2>Mazak</h2>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <p>x-axis (mm)</p>
                <p>y-axis (mm)</p>
                <p>z-axis (mm)</p>
                <p>Speed (rpm)</p>
                <p>Tool changer</p>
                <p>Control System</p>
              </div>
              <div>
                <p>2.050</p>
                <p>1.150</p>
                <p>780</p>
                <p>10.000 - 18.000</p>
                <p>40-fold, 60-fold</p>
                <p>Heidenhain 640, Siemens One</p>
              </div>
            </div>
          </div>
          <img class="w-1/2 drop-shadow-lg" src="../assets/img/MAZAK.png" alt="">
        </div>
  
        <!-- Haas -->
        <div class="flex flex-row-reverse justify-between gap-8">
          <div class="m-4">
            <h2>Haas</h2>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <p>x-axis (mm)</p>
                <p>y-axis (mm)</p>
                <p>z-axis (mm)</p>
                <p>Speed (rpm)</p>
                <p>Tool changer</p>
                <p>Control System</p>
              </div>
              <div>
                <p>2.050</p>
                <p>1.150</p>
                <p>780</p>
                <p>10.000 - 18.000</p>
                <p>40-fold, 60-fold</p>
                <p>Heidenhain 640, Siemens One</p>
              </div>
            </div>
          </div>
          <img class="w-1/2 drop-shadow-lg" src="../assets/img/HAAS.png" alt="">
        </div>
      </div>
    </section>

    <!-- klanten -->
    <!-- <section>
      <h1>Onze klanten</h1>
    </section> -->

    <!-- highlighted stukken -->
    <!-- <section>
      <h1>Een paar van onze stukken</h1>
    </section> -->

    <!-- Contact -->
    <section class="flex gap-12 bg-grey p-8">
      <div class="max-w-screen-xl flex gap-12 w-full mx-auto">
        <h1 class="col-span-2 text-white">Contacteer ons!</h1>
        <form ref="form" @submit.prevent="sendEmail" class="w-full flex flex-col gap-4">
          <div class="flex flex-col">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="John doe" class="px-2 py-1 rounded border-none bg-white">
          </div>
          <div class="flex flex-col">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="john.doe@gmail.com" class="px-2 py-1 rounded border-none bg-white">
          </div>
          <div class="flex flex-col">
            <label>Message</label>
            <textarea name="message" placeholder="Type hier uw bericht..." rows="5" class="px-2 py-1 rounded border-none bg-white"></textarea>
          </div>
          <input class="cursor-pointer rounded bg-green flex px-6 py-2 w-fit border-none shadow-xl text-white font-bold" type="submit" value="Send">
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import emailjs from '@emailjs/browser';
console.log("Service-id: " + import.meta.env);

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_940ujla', 'template_p9nabin', this.$refs.form, {
          publicKey: 'VF5BPnSwA0ai3uh6m',
        })
        .then(
          () => {
            console.log('SUCCESS!');

          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};
</script>