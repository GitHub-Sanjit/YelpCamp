const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect(
  "mongodb+srv://node1:node1@cluster0.wz775d8.mongodb.net/yelp-camp?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "66330e83aecd804610d2fb21",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/def3t6co7/image/upload/v1714733240/YelpCamp/tz54ci5c7co0wjeuejp8.webp",
          filename: "YelpCamp/tz54ci5c7co0wjeuejp8",
        },
        {
          url: "https://res.cloudinary.com/def3t6co7/image/upload/v1714733241/YelpCamp/esmgqwlbjmirulcxyxg6.avif",
          filename: "YelpCamp/esmgqwlbjmirulcxyxg6",
        },
        {
          url: "https://res.cloudinary.com/def3t6co7/image/upload/v1714733240/YelpCamp/oflfuy1oloi4nggg1bwn.jpg",
          filename: "YelpCamp/oflfuy1oloi4nggg1bwn",
        },
        {
          url: "https://res.cloudinary.com/def3t6co7/image/upload/v1714733240/YelpCamp/rlxvwpkrjhhpibewecel.jpg",
          filename: "YelpCamp/rlxvwpkrjhhpibewecel",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
