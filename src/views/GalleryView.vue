<template>
    <div class="container mx-auto">
  <h2 class="py-4 text-3xl font-bold text-center text-indigo-600">
    Artworks
  </h2>
  <div class="lg:gap-3 lg:grid lg:grid-cols-2" style="grid-auto-rows: min-content;">
    <div class="w-full rounded" v-for="image in images" :key="image.id">
      <img :src="image.photo" alt="image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          photo:
            'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/2022-10/shutterstock_567974023.jpg?itok=F8uIO2At',
        },
        {
          id: 2,
          photo:
            'https://i2.wp.com/blogs.cfainstitute.org/investor/files/2015/08/Hedge-Fund-Fees-The-Rorschach-Test-of-Investing.png?fit=1200%2C627&ssl=1',
        },
        {
          id: 3,
          photo:
            'https://as2.ftcdn.net/v2/jpg/04/79/62/57/1000_F_479625760_5UyEjoUdE0nxwMGAKhU78QgXUDJ4Gatn.jpg',
        },
        {
          id: 4,
          photo:
            'https://cdn.mos.cms.futurecdn.net/f301999cbb2c66f044b6aa36cc59db8c-1200-80.jpg',
        },
        {
          id: 5,
          photo:
            'https://www.fubiz.net/wp-content/uploads/2015/11/leifpodhajsky-0-708x456.jpg',
        },
        {
          id: 6,
          photo:
            'https://i.natgeofe.com/n/fc920f78-86a9-48d2-8346-27e299f9cac7/explore-mental-health-paint-2.jpg?w=636&h=475',
        },
        {
          id: 7,
          photo:
            'https://mathigon.org/content/transformations/images/symmetry-1.png',
        },
        {
          id: 8,
          photo:
            'https://cdn-media-1.freecodecamp.org/images/1*zMSR6lwGpWySHyxC5kagFA.jpeg',
        },
        {
          id: 9,
          photo:
            'https://images.fineartamerica.com/images-medium-large-5/symmetry-in-black-and-white-digital-painting-georgeta-blanaru.jpg',
        },
      ],
    };
  },
};
</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}

</style>